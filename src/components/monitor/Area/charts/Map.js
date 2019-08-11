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
          trigger: 'item',
          formatter: function (params) {
            return (
              '<span style="color:#00eaff ; font: 18px Microsoft YaHei ; text-align: center">' + params.name + ':' + '</span><br/>'
              + '<ol>'
              + '<span style="color:#00eaff ; float: left">' + '●' + '<span style="color:#fff">' + params.value[2] + '</span>' +'</span>'
              + '<span style="color:#de2a99 ; float: left ; padding-left: 10px">' + '●' + '<span style="color:#fff">' + params.value[4] + '</span>' + '</span>'
              // + '<strong style="color:#0093fc">' + '●' + '</strong>' + params.value[3] + '%<br/>'
              + '</ol>'
            )
          },
          textStyle: {
            align: 'center'
          },
          //alwaysShowContent: true,
        },
        visualMap: {
          min: 0,
          max: findMax(inTimeHandle),
          calculable: true,
          inRange: {
            color: ['#33FF33', '#FFFF00', '#CC0000'],
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
              areaColor: '#0067ee',
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
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(inTimeHandle),

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
          }
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
                    <div style={{ borderStyle: 'groove', borderColor: 'rgba(31, 80, 190, 0.75)', width: '80%', marginLeft: '10%', borderWidth: '10px'}}>
                      <div style={{ fontSize: '30px', textAlign: 'center' }}>
                        总计工单：
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_1} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_2} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_3} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_4} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_5} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_6} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_7} />
                        <CountUp className={styles.letter} start={0} end={caseTotal[0].digit_8} />
                      </div>
                    </div>
                  )
                }
                else {
                  return (
                    <div style={{ borderStyle: 'groove', borderColor: 'rgba(31, 80, 190, 0.75)', width: '80%', marginLeft: '10%',  borderWidth: '10px', marginTop:'20px'}}>
                      <div style={{ fontSize: '30px', textAlign: 'center' }}>
                        本年工单：
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
              })

            }
          </div>

          <div style={{ marginTop: '150px' }}>
            <div style = {{fontSize: '3.1vh', color: 'rgba(255, 255, 255, 0.67)'}} >事发区域数据统计</div>

            <ReactEcharts
              option={this.options}
              style={{ width: '99%', height: '600px' }}
              onEvents={{ click: this.chartDetails }}
            />
            <ol style={{float: 'left' , marginLeft:'100px'}}>
              <img src={point1} alt={'#'} /><strong style={{ color: '#00eaff' }}>在线办结工单数  </strong>

              <img src={point3} alt={'#'} /><strong style={{ color: '#00eaff', paddingRight: '30px' }}>转办工单数  </strong>

            </ol>
            <strong style={{ float: 'right', marginRight: '50px', marginTop: '100px', fontSize: 32 }}>{deptName}案件大类
              <p style={{ float: 'right', color: '#00eaff', fontSize: 32 }}>(单位：个)</p>
            </strong>

            <City />

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

