import React, { useState, useEffect } from 'react';
import Circle from './Circle1';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';
import styles from './../index.scss';
import { connect } from 'react-redux';

class TimeHandle extends React.Component {
  get options() {
    const { TimeHandle } = this.props;
    if (TimeHandle) {
      return {
        tooltip: {},
        grid: {
          top: '8%',
          left: '1%',
          right: '1%',
          bottom: '8%',
          containLabel: true,
        },
        legend: {
          itemGap: 50,
          data: ['工单总量', '办结工单量'],
          textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff',
            fontSize: 20,
          },
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#f9f9f9'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#d1e6eb',
              margin: 15,
              fontSize: 20,
            },
          },
          axisTick: {
            show: false,
          },
          data: ['街道1', '街道2', '街道3', '街道4', '街道5', '街道6', '街道7',],
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0a3256'
            }
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#d1e6eb',

            },
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '工单总量',
          type: 'line',
          // smooth: true, //是否平滑曲线显示
          // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#28ffb3", // 线条颜色
            },
            borderColor: '#f0f'
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
            }
          },
          itemStyle: {
            normal: {
              color: "#28ffb3",

            }
          },
          tooltip: {
            show: false
          },
          data: [393, 438, 485, 631, 689, 824, 987]
        }, {
          name: '办结工单量',
          type: 'bar',
          barWidth: 20,
          tooltip: {
            show: false
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                return colorList[params.dataIndex];
              }
            }
          },
          data: [200, 382, 102, 267, 186, 315, 316]
        }]
      }
    }
  }

  render() {
    return (
      <div className={styles.mainContainer} style={{ marginTop: '60px', width: '100%' }}>

        <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} alt={'#'} />
          <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>实时街道办结案件</strong>
          <ReactEcharts
            option={this.options}
            style={{ width: '600px', height: '480px', marginTop: '150px' }}
          />
        </div>
        <div className={styles.circle}>
          <Circle />
        </div>
      </div>
    );
  }
}


export default connect(({ appeal }) => ({
  TimeHandle: appeal.TimeHandle,
  partName: appeal.partName,
}))(TimeHandle);

