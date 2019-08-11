import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';

function CityEventByType(props) {
  const { cityEventByType } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (cityEventByType) {
      setOptions({

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '10%',
          containLabel: true
        },
        yAxis: [{
          type: 'value',
          axisLabel: {
            interval: 0,
            color: '#06e4f9',
            fontSize: 20,
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          }
        }],
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          //data: ['区县管理', '民政业务', '话务区域', '生活服务', '教科文卫', '城乡建设', '噪音扰民', '市容环境', '突发事件', '法律事务'],
          data:cityEventByType.map(item =>{
            return item.name;
          }),
          axisLabel: {
            rotate:45,
            interval: 0,
            color: '#06e4f9',
            fontSize: 20,
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            }
          },
          splitArea: {
            show: false,
            //  areaStyle: {
            //      color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
            //  }
          }
        }],
        series: [{
          type: 'pictorialBar',
          symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
          //data: [320, 302, 341, 374, 390, 320, 302, 341, 374, 390],
          data:cityEventByType.map(item =>{
            return item.value;
          }),
          barWidth: '50%',
          // barGap: 1, //柱子之间间距
          symbolOffset: [0, -15],
          //					xAxisIndex: 0,
          //					yAxisIndex: 0,
          z: 99,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 24,
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(51,189,216,0.3)'
              }, {
                offset: 0.5,
                color: 'rgba(51,189,216,0.3)'
              }, {
                offset: 0.5,
                color: 'rgba(51,189,216,1)'
              }, {
                offset: 1,
                color: 'rgba(51,189,216,1)'
              }]),
              opacity: 1,
            }
          }
        },
          {

            type: 'pictorialBar',
            symbol: 'diamond',
            barWidth: '50%',
            symbolSize: ['100%', 30],
            // symbolOffset: [0, 13],
            //					xAxisIndex: 0,
            //					yAxisIndex: 0,
            z: 99,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
                  offset: 0,
                  color: 'rgba(51,189,216,0.8)'
                }, {
                  offset: 0.5,
                  color: 'rgba(51,189,216,0.8)'
                }, {
                  offset: 0.5,
                  color: 'rgba(51,189,216,1)'
                }, {
                  offset: 1,
                  color: 'rgba(51,189,216,1)'
                }]),
                opacity: 1,
              }
            },
            //data: [320, 302, 341, 374, 390,320, 302, 341, 374, 390],
            data:cityEventByType.map(item =>{
              return item.value;
            }),
          }
        ]

      });
    } else {
      setOptions({});
    }
  }, [cityEventByType]);

  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ width: '99%', height: '800px', marginTop: '200px' }}
      />
    </div>
  );
}

export default connect(({ appeal }) => ({
  cityEventByType: appeal.cityEventByType,
}))(CityEventByType);
