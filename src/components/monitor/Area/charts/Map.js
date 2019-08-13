import React from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'dva';

import CountUp from 'react-countup';
import point1 from '@/assets/point1.png'
//import point2 from '@/assets/point2.png'
import point3 from '@/assets/point3.png'
//import point4 from '@/assets/point4.png'
import City from './CityEventCount'
import styles from './../index.scss'
import SStyle from '@/pages/monitor/index.scss'
import LeftTop from '@/components/monitor/LeftTop';
import RightTop from '@/components/monitor/RightTop';
import Rightb from '@/components/monitor/Rightb';
import Leftb from '@/components/monitor/Leftb';

import * as map from '@/utils/map.json';

class Map extends React.Component {

  get options() {
    const { inTimeHandle } = this.props;
    let geos = {};
    map.default.features.forEach(item => {
      const { name, center } = item.properties;
      geos[name] = center;
    });

    echarts.registerMap('changsha', map.default);
    const convertData = function (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geos[data[i].deptName];
        if (geoCoord) {
          res.push({
            name: data[i].deptName,
            deptId: data[i].deptId,
            value: geoCoord.concat(data[i].onlineCount, data[i].onlineProportion, data[i].distributeCount, data[i].distributeProportion, data[i].total),
          });
        }
      }

      return res;
    };

    const findMax = (data) => {
      let temp = [];
      for (let i = 0; i < data.length; i++) {
        temp.push(data[i].total);
        temp.push(data[i].deptId);
      }

      return Math.max(...temp);
    };
    if (inTimeHandle.length !== 0) {
      return {
        tooltip: {
          // trigger: 'item',
          show: true,
          formatter: function (params) {
            console.log(params)
            debugger
            if(params.data){
              return (
                `${params.name}</br>${params.marker}在线办结工单数：${ params.data.value[2]}</br>${params.marker}转办办结工单数：${params.data.value[4]}`
              )
            }
            else {
              return;
          }
          },
          textStyle: {
            align: 'center',
            fontSize: 30,
          },
          //alwaysShowContent: true,
        },
        visualMap: {
          min: 0,
          max: findMax(inTimeHandle),
          calculable: true,
          inRange: {
            color: ['#94e3fd', '#02bcf9', '#006edd'],
          },
          textStyle: {
            color: '#fff',
            fontSize: 18,
          },
        },
        geo: {
          map: 'changsha',
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              // areaColor: '#0067ee',
              borderColor: '#111',
            },
            emphasis: {
              areaColor: '#707caa',
            },
          },
        },

        //地图连线
        series: [
          {
            name: '事件总计',
            type: 'map',
            coordinateSystem: 'geo',
            data: convertData(inTimeHandle),
            roam: false,
            geoIndex: 0,
            symbolSize: 25,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              emphasis: {
                borderColor: '#fff',
                borderWidth: 1,
              },
            },
          },
        ]
      }
    }
    else {
      return {};
    }
  }

  chartDetails = e => {
    var id;
    for (let i = 0; i < this.props.inTimeHandle.length; i++) {
      if (this.props.inTimeHandle[i].deptName === e.name)
        id = this.props.inTimeHandle[i].deptId;
    }
    this.props.dispatch({
      type: 'monitor/handleUpdate',
      payload: {
        deptId: id
      },
    });
    this.props.dispatch({
      type: 'monitor/save',
      payload: {
        deptName: e.name
      },
    });
    this.props.dispatch({
      type: 'monitor/fetch',
    });
  };

  render() {
    const { deptName } = this.props;
    const { caseTotal } = this.props;


    return (
      <div className={SStyle.container}>

        <LeftTop />
        <div className={styles.container}>
          <div>
            {
              caseTotal.map((item, index) => {
                if (index === 0) {
                  return (
                    <div>
                      <div className = {styles.number} style={{ marginLeft: '50px', fontSize: '30px', textAlign: 'left' }}>
                        总受理量：
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_1} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_2} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_3} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_4} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_5} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_6} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_7} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_8} />
                      </div>
                      <div className = {styles.number} style={{ marginLeft: '300px',fontSize: '30px', textAlign: 'right' }}>
                        总转办量：
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_1} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_2} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_3} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_4} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_5} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_6} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_7} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[1].digit_8} />
                      </div>
                    </div>
                  )
                }
                else if(index === 2){
                  return (
                    <div style={{marginTop: '10px' }}>
                      <div className = {styles.number} style={{ marginLeft: '50px', fontSize: '30px', textAlign: 'left' }}>
                        本年受理：
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_1} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_2} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_3} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_4} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_5} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_6} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_7} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[2].digit_8} />
                      </div>
                      <div className = {styles.number} style={{ marginLeft: '300px',fontSize: '30px', textAlign: 'right' }}>
                        本年转办：
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_1} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_2} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_3} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_4} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_5} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_6} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_7} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[3].digit_8} />
                      </div>
                    </div>
                  )
                }
              })

            }
          </div>

          <div style={{ marginTop: '70px' }}>
            <div style={{ fontSize: '2.5vh', color: 'rgba(255, 255, 255, 0.67)' }} >事发区域数据统计</div>

            <ReactEcharts
              option={this.options}
              style={{ width: '99%', height: '600px' }}
              onEvents={{ click: this.chartDetails }}
            />
            {/* <ol style={{ float: 'left', marginLeft: '100px' }}>
              <img src={point1} alt={'#'} /><strong style={{ color: '#00eaff' }}>在线办结工单数  </strong>

              <img src={point3} alt={'#'} /><strong style={{ color: '#00eaff', paddingRight: '30px' }}>转办工单数  </strong>

            </ol> */}

            <City />
            <strong style={{ float: 'right', marginRight: '50px', marginTop: '100px', fontSize: 32 }}>{deptName}案件类型
              <p style={{ float: 'right', color: '#00eaff', fontSize: 32 }}>(单位：个)</p>
            </strong>

          </div>
        </div>


        <RightTop />
        <Rightb />
        <Leftb />
      </div>
    )
  }
}

export default connect(({ monitor }) => ({
  inTimeHandle: monitor.inTimeHandle,
  deptName: monitor.deptName,
  caseTotal: monitor.caseTotal,
}))(Map);

