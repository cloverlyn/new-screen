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
        grid: {
          top: '8%',
          left: '5%',
          right: '1%',
          bottom: '8%',
          containLabel: true,
        },
        legend: {
          itemGap: 50,
          data: ['总工单', '转办办结工单'],
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
              color: '#00eaff'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            rotate: 40,
            textStyle: {
              color: '#00eaff',
              margin: 15,
              fontSize: 18,
            },
          },
          axisTick: {
            show: false,
          },
          data: areaDept.map(item => {
            return item.deptName;
          }),
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
              color: '#00eaff',
              fontSize: 18
            },
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '转办办结工单',
          type: 'line',
          // smooth: true, //是否平滑曲线显示
          // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 12,
          lineStyle: {
            normal: {
              //color: "#28ffb3", // 线条颜色
              color:'#f0f'
            },
            borderColor: '#f0f'
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
          },
          itemStyle: {
            normal: {
              color: "#f0f",
            }
          },
          tooltip: {
            show: true
          },
          data: areaDept.map(item => {
            return item.distributeFinish;
          }),
        }, {
          name: '总工单',
          type: 'bar',
          barWidth: 20,
          tooltip: {
            show: true
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
              fontSize: 16
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
          data: areaDept.map(item => {
            return item.distributeCount;
          }),
        }]
      }
    }
  }

  chartDetails = e => {
    var id;
    this.props.areaDept.map(item =>{
      if(item.deptName === e.name)
        id = item.deptId;
    })
    this.props.dispatch({
      type: 'appeal/handleAreaDeptDetail',
      payload: {
        areaId: id,
      },
    });
  };


  render() {
    // const {deptName} = this.props;
    return (
      <div className={styles.mainContainer} style={{ marginTop: '60px', width: '100%' }}>

        <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
          <img src={imgUrl} alt={'#'} />
          <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>区机关部门工单统计</strong>
          <ReactEcharts
            option={this.options}
            style={{ width: '600px', height: '520px', marginTop: '150px' }}
            onEvents={{ click: this.chartDetails }}
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
  areaDept: appeal.areaDept,
  // deptName: appeal.deptName,
}))(AreaDept);

