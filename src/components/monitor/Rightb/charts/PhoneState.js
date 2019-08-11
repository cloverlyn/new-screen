import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

import { phoneState } from '@/utils/config';
import { phoneColor } from '../../../../utils/config';

const makeSer = (data) => {
  let temp = [];

  for (let key in data) {
    temp.push({
      name: phoneState[key],
      color: phoneColor[key],
      type: 'line',
      lineStyle: {
        width: 10
      },
      data: data[key].slice(-6),
      smooth: true,
      label: {
        show: true,
        position: 'right',
      },
    });
  }
  return temp;
};

class PhoneState extends React.Component {
  get options() {
    const { phoneState } = this.props;
     
    var name = ['示闲', '示忙', '通话', '事后', '等待']

    return {
      legend: {
        top: 20,
        itemGap: 5,
        itemWidth: 5,
        textStyle: {
          color: '#',
          fontSize: '20'
        },
        icon: "react",
        data: name
      },

      tooltip: {
        trigger: "axis",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          lineStyle: {
            color: '#06e4f9'
          }
        },
        formatter: [
          '    {d|●}',
          ' {a|{c}}     \n',
          '    {b|}'
        ],

        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
      },
      xAxis: [{
        type: "category",
        axisLine: {
          lineStyle: {
            color: '#06e4f9'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#06e4f9',
            fontWeight: 'normal',
            fontSize: '20',
          },
        },
        data: ['','','','','',''],
      }],
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#06e4f9',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#32346c ',
          }
        },
        axisLabel: {
          textStyle: {
            color: '#06e4f9',
            fontWeight: 'normal',
            fontSize: '20',
          },
          formatter: '{value}',
        },
      },
      series: makeSer(phoneState),
    };
  }

  render() {
    return (
      <div>
        <ReactEcharts
          option={this.options}
          style={{ width: '99%', height: '650px', padding: '1vh' }}
        />
      </div>
    );
  }
}

export default connect(({ monitor }) => ({
  phoneState: monitor.phoneState,
}))(PhoneState);
