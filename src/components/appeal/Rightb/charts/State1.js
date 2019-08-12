import React from 'react';
import Circle from './Circle1';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';
import styles from './../index.scss';
import { connect } from 'react-redux';

class AreaDept extends React.Component {
  get options() {
    const { areaDept } = this.props;
    if (areaDept) {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['总工单', '转办办结工单'],
          textStyle: {
            color: '#00eaff',
            fontSize: 18
          },
        },
        grid: {
          left: '4%',
          top: "12%",
          bottom: "8%",
          right: "5%",
          containLabel: true
        },
        toolbox: {
          show: true,

        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: areaDept.map(item => {
              return item.deptName
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00eaff',
              }
            },
            axisLabel: {
              rotate: 40,
              textStyle: {
                fontSize: 18
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00eaff',
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 18
              }
            },
          }
        ],
        series: [
          {
            name: '总工单',
            type: 'bar',
            itemStyle: {
              color: '#00FFE6'
            },
            data: areaDept.map(item => {
              return item.distributeCount
            }),

          },
          {
            name: '转办办结工单',
            type: 'bar',
            itemStyle: {
              color: '#bc10e0'
            },
            data: areaDept.map(item => {
              return item.distributeFinish
            }),
          }
        ]
      }
    }
  };


  chartDetails = e => {
    var id;
    this.props.areaDept.map(item => {
      if (item.deptName === e.name)
        id = item.deptId;
    })
    this.props.dispatch({
      type: 'appeal/handleAreaDeptDetail',
      payload: {
        areaId: id,
      },
    });
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        areaName: e.name,
      },
    });
  };


  render() {
    const {areaName} = this.props;
    return (
      <div className={styles.mainContainer} style={{ marginTop: '60px', width: '100%' }}>

        <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} alt={'#'} />
          <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>区县机关部门工单统计</strong>
          <ReactEcharts
            option={this.options}
            style={{ width: '600px', height: '520px', marginTop: '150px' }}
            onEvents={{ click: this.chartDetails }}
          />
        </div>
        <div className={styles.circle}>
          <div style={{ flex: '1' }}>
            <div id={'chart'} className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
              <img src={imgUrl} alt={'#'} style={{ marginLeft: '30px' }} />
              <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>{areaName}案件大类统计</strong>
              <Circle />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default connect(({ appeal }) => ({
  areaDept: appeal.areaDept,
  areaName: appeal.areaName,
}))(AreaDept);

