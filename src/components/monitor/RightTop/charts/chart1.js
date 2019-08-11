import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

function LeftTop(props) {
  const { hotEventDetail1 } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (hotEventDetail1) {
      setOptions({
        grid: {
          top: '5%',
          bottom: '10%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
          fontSize:24,
        },
        xAxis: {
          data: hotEventDetail1.map(item => {
            return item.deptName;
          }),
          axisLabel: {
            rotate: 45,
            textStyle: {
              color: '#06e4f9',
            },
            fontSize: 20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#06e4f9' },
                    { offset: 1, color: '#08afff' },
                  ],
                ),
              //  barBorderRadius: 7.5,
              },
            },
            barWidth: 15,
            data: hotEventDetail1.map(item => {
              return item.total;
            }),

            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                }
              }
             }
            },
        ],
      });
    } else {
      setOptions({});
    }
  }, [hotEventDetail1]);

  return (
    <div style={{ backgroundColor: '#0e255d' }}>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '100%', padding: '1vh' }}
      />
    </div>
  );
}

export default connect(({ monitor }) => ({
  hotEventDetail1: monitor.hotEventDetail1,
}))(LeftTop);
