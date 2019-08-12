import React from 'react';
import Circle from './Circle';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';
import styles from './../index.scss';
import { connect } from 'react-redux';

class AreaDept extends React.Component {
  get options() {
    const { areaStreet } = this.props;
    if (areaStreet) {
      return {
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['总工单','转办办结工单'],
          textStyle:{
            color:'#00eaff',
            fontSize:18
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
          show : true,
        
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            //data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            data:areaStreet.map(item =>{
              return item.deptName
            }),
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
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00eaff',
              }
            },
            axisLabel:{
              textStyle:{
                fontSize: 18
              }
            },
          }
        ],
        series : [
          {
            name:'总工单',
            type:'bar',
            itemStyle:{
              color: '#00FFE6'
            },
            //data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            data:areaStreet.map(item =>{
              return item.distributeCount
            }),

          },
          {
            name:'转办办结工单',
            type:'bar',
            itemStyle:{
              color: '#de2a99'
            },
            //data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            data:areaStreet.map(item =>{
              return item.distributeFinish
            }),
          }
        ]
      }
    }
  }

  chartDetails = e => {
    var id;
    this.props.areaStreet.map(item =>{
      if(item.deptName === e.name)
        id = item.deptId;
    })
    this.props.dispatch({
      type: 'appeal/handleAreaStreetDetail',
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
          <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>区县机关部门办结案件</strong>
          <ReactEcharts
            option={this.options}
            style={{ width: '600px', height: '480px', marginTop: '150px' }}
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
  areaStreet: appeal.areaStreet,
  // deptName: appeal.deptName,
}))(AreaDept);

