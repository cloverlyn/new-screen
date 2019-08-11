import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import styles from './index.scss';
import imgUrl from '@/assets/dataicon.png';
import History from './history'
class DistributeEvent extends React.Component {
  get options() {
    const { distributeEvent } = this.props;
    if (distributeEvent) {
      return {
        grid: {
          top: '5%',
          left: '15%',
          bottom: '16%',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}：<br/>{c}',
        },
        xAxis: {
          data: distributeEvent.map(item => {
            return item.caseName;
          }),
          axisLabel: {
            rotate: 45,
            textStyle: {
              color: '#00eaff',
            },
            fontSize: 20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00eaff',
            }
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00eaff',
            }
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#03c9db',
              fontSize: 25,
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(5,228,248,0.24)' },
                  { offset: 1, color: 'rgba(8,175,255,0.3)' },
                ]),
                barBorderRadius: 7.5,
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#06e4f9' },
                  { offset: 1, color: '#08afff' },
                ]),
                barBorderRadius: 9,
              },
            },
            barWidth: 18,
            data: distributeEvent.map(item => {
              return {
                value: item.total,
                typeId: item.typeId,
                caseName: item.caseName,
              }
            }),
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 16,
                  fontStyle: 'bold',
                }
              }
            }
          },
        ],
      }
    }
    else {
      return {};
    }
  }

  chartDetails = e => {
    this.props.dispatch({
      type: 'appeal/handleHistoryDetail1',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handleHistoryDetail2',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handleHistoryDetail3',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handleHistoryDetail4',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        caseName: e.data.caseName,
      },
    });
  };

  render() {
    const {caseName} = this.props;
    return (
      <div className={styles.mainContainer}>

        <div className="col-md-6" style={{ marginBottom: '50px', float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} alt={'#'} />
          <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>转办工单案件大类统计</strong>
          <ReactEcharts
            option={this.options}
            style={{ width: '550px', height: '800px', marginTop: '10px' }}
            onEvents={{ click: this.chartDetails }} />
        </div>

        <div className="col-md-6" style={{ marginBottom: '50px', float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} alt={'#'} style={{ marginLeft: '30px' }} />
          <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>{caseName}案件类历史数据</strong>
          <History style={{ width: '650px', height: '800px' }} />
        </div>

      </div>



    );
  }
}



export default connect(({ appeal }) => ({
  distributeEvent: appeal.distributeEvent,
  caseName: appeal.caseName,
}))(DistributeEvent);
