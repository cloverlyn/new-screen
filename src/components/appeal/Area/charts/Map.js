import React from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import { connect } from 'dva';
import point1 from '@/assets/point1.png'
//import point2 from '@/assets/point2.png'
import point3 from '@/assets/point3.png'
//import point4 from '@/assets/point4.png'
import City from './CityEventCount'
import styles from './../index.scss'
import SStyle from '@/pages/appeal/index.scss'
import LeftTop from '@/components/appeal/LeftTop';
import RightTop from '@/components/appeal/RightTop';
import Rightb from '@/components/appeal/Rightb';
import Leftb from '@/components/appeal/Leftb';

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

    const tempData = function (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = geos[data[i].deptName];
        if (geoCoord) {
          res.push({
            name: data[i].deptName,
            value: data[i].total,
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
            // console.log(params)
            // debugger
            if(params.data){
              return (
                `${params.name}</br>${params.marker}在线办结工单数：${ params.data.value[2]}</br>${params.marker}转办工单数：${params.data.value[4]}`
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
      //console.log(id);
    }

    this.props.dispatch({
      type: 'appeal/handleUpdate',
      payload: {
        deptId: id
      },
    }
    );
    this.props.dispatch({
      type: 'appeal/handleAreaDept',
      payload: {
        deptId: id
      },
    }
    );
    this.props.dispatch({
      type: 'appeal/handleAreaStreet',
      payload: {
        deptId: id
      },
    }
    );
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        deptName: e.name,
        aName: e.name,
        partName: '区县街道',
        areaName: '区县机关部门'
      },
    });

    this.props.dispatch({
      type: 'appeal/handleLeftBottom',
    });
    this.props.dispatch({
      type: 'appeal/handleRightTop',
    });
    this.props.dispatch({
      type: 'appeal/handleRightBottom',
    });
    this.props.dispatch({
      type: 'appeal/handleLeftTop',
    });
  };

  handClick = e => {
    this.props.dispatch({
      type: 'appeal/handleUpdate',
      payload: {
        deptId: ''
      },
    }
    );
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        deptName: '长沙市',
        name: '规划房地',
        caseName: '规划房地',
      },
    });

    this.props.dispatch({
      type: 'appeal/handleLeftBottom',
    });
    this.props.dispatch({
      type: 'appeal/handleRightTop',
    });
    this.props.dispatch({
      type: 'appeal/handleRightBottom',
    });
    this.props.dispatch({
      type: 'appeal/handleLeftTop',
    });
  };

  render() {
    const { deptName } = this.props;
    const { inTimeHandle } = this.props;

    return (
      <div className={SStyle.container}>

        <LeftTop />
        <div className={styles.container}>
          <button className={styles.title} style={{ background: 'none', border: 'none', textAlign: 'left' }} onClick={this.handClick}>事发区域数据统计</button>
          <div>

            <ReactEcharts
              option={this.options}
              style={{ width: '99%', height: '600px' }}
              onEvents={{ click: this.chartDetails }}
            />


            {
              inTimeHandle.map((item,index) => {
                if(deptName === item.deptName){
                  return (
                    <strong style={{color: '#00eaff', fontSize: 32 , marginLeft:'100px'}}>
                      {deptName}工单总数：{item.total}
                    </strong>
                  )
                }

              })
            }

            <strong style={{ float: 'right', marginRight: '50px', marginTop: '100px' , fontSize: 32 }}>{deptName}案件类型
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

export default connect(({ appeal }) => ({
  inTimeHandle: appeal.inTimeHandle,
  deptName: appeal.deptName,
}))(Map);
