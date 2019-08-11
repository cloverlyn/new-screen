import React, { useState, useEffect } from 'react';
import Circle from './Circle';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import imgUrl from '@/assets/dataicon.png';
import styles from './../index.scss';
import { connect } from 'react-redux';

//export default function(props) {
function TimeHandle(props) {
  const { TimeHandle } = props;
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (TimeHandle) {
      //var data = ["95","5"]
      const name = TimeHandle.map(item => {
        return item.deptName;
      });
      const total = TimeHandle.map(item => {
        return item.total;
      });
      const onlineCount = TimeHandle.map(item => {
        return item.onlineCount;
      });
      const distributeCount = TimeHandle.map(item => {
        return item.distributeCount;
      });
      const distributeFinish = TimeHandle.map(item => {
        return item.distributeFinish;
      });
      setOptions({
        legend: {
          top:0,
          textStyle: {
            color: '#00eaff',
            fontSize:18
          },
          data: ['总工单数', '在线办结工单数','转办工单数','转办办结工单数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },

        tooltip: {
          show: "true",
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00eaff',
            }
          },
          axisLabel:{
            textStyle:{
              fontSize: 18
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#aaa',
            }
          },
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00eaff',
            }
          },
          axisLabel:{
            rotate:40,
            textStyle:{
              fontSize: 18
            }
          },
          data: name
          //data: inTimeHandleFinish.map(item => {
          // return item.deptName;
          //}),
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: name
        },

        ],
        series: [{
          name: '总工单数',
          type: 'bar',
          xAxisIndex: 1,

          itemStyle: {
            normal: {
              show: true,
              color: '#277ace',
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          barWidth: '25%',
          data: total
        }, {
          name: '转办工单数',
          type: 'bar',
          xAxisIndex: 1,

          itemStyle: {
            normal: {
              show: true,
              color: '#C96DD8',
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          barWidth: '25%',
          barGap: '100%',
          data: distributeCount
        }, {
          name: '在线办结工单数',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00FFE6'
              }, {
                offset: 1,
                color: '#007CC6'
              }]),
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            }
          },
          barWidth: '25%',
          data: onlineCount
        }, {
          name: '转办办结工单数',
          type: 'bar',
          barWidth: '25%',
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                //color: '#3023AE'
                color: '#de2a99'
              }, {
                offset: 1,
                color: '#de2a99'
              }]),
              barBorderRadius: 50,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            }
          },
          barGap: '100%',
          data: distributeFinish
        }

        ]

      });
    }else {
      setOptions({});
    }

  }, [TimeHandle]);
  return (
    <div className={styles.mainContainer} style={{marginTop:'60px', width:'100%'}}>

      <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'}/>
        <strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>实时区县办结案件</strong>
        <ReactEcharts
          option={options}
          style={{ width: '600px', height: '480px' ,marginTop:'150px'}}
        />
      </div>
      <div className={styles.circle}>
          <Circle/>
        </div>
    </div>
  );
}
export default connect(({ appeal }) => ({
  TimeHandle: appeal.TimeHandle,
}))(TimeHandle);

