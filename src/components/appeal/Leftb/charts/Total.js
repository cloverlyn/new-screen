import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';

function Total(props) {
  //const { adviceHandleDept } = props;
  const { blueSkyCount } = props;
  const { businessCount } = props;
  const { moreOneCaseTypeResult } = props;
  //const {name} = props;
  const [options, setOptions] = useState({});
  const [options2, setOptions2] = useState({});
  const [options3, setOptions3] = useState({});
  useEffect(() => {
    if (blueSkyCount) {

      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: "{b} : <br/>{c} ({d}%)"
        },

        visualMap: {
          show: false,
          inRange: {
          }
        },
        series: [{
          type: 'pie',
          radius: '48%',
          center: ['50%', '50%'],
          startAngle: 290,
          color: ['#f33f39', '#18e7d8', '#2e91ff', '#eebd10', '#00faff', '#de1f87', '#505de8'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: blueSkyCount.map(item => {
            return {
              value: item.value,
              name: item.name,
            }
          }).sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',

          label: {
            normal: {
              formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
              rich: {
                c: {
                  color: 'rgb(241,246,104)',
                  fontSize: 20,
                  fontWeight: 'bold',
                  lineHeight: 5
                },
                b: {
                  color: 'rgb(98,137,169)',
                  fontSize: 15,
                  fontWeight: 'bold',
                  height: 40
                },
              },
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgb(98,137,169)',
              },
              smooth: 0.2,
              length: 10,
              length2: 10,

            }
          },
          itemStyle: {
            normal: {
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              shadowBlur: 50,
            }
          }
        }]

      });
    } else {
      setOptions({});
    }
  }, [blueSkyCount]);

  useEffect(() => {

    if (moreOneCaseTypeResult) {

      setOptions2({
        tooltip: {
          trigger: 'item',
          formatter: "{b} : <br />{c} ({d}%)"
        },

        series: [
          {
            type: 'pie',
            radius: '48%',
            center: ['50%', '50%'],
            startAngle: 195,
            label: {
              show: true,
              formatter: '{b}: \n {d}%',
              textStyle: {
                fontSize: 15
              }
            },
            data: moreOneCaseTypeResult.map(item => {
              return {
                value: item.count,
                name: item.deptName,
              };
            }),
            itemStyle: {

              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        color: ['#f34238', '#17f5b8', '#2e91ff', '#f1cf18', '#00faff', '#8b32bf', '#4855e5', "#FFE400", "#F76F01", "#01A4F7", "#c07dff"]
      });
    }
    else {
      setOptions2({})
    }

  }, [moreOneCaseTypeResult]);

  useEffect(() => {
    if (businessCount) {

      setOptions3({
        tooltip: {
          trigger: 'item',
          formatter: "{b} : <br />{c} ({d}%)"
        },

        series: [
          {
            type: 'pie',
            radius: '48%',
            center: ['50%', '50%'],
            startAngle: 195,
            label: {
              show: true,
              formatter: '{b}: \n {d}%',
              textStyle: {
                fontSize: 14
              }
            },
            data: businessCount.map(item => {
              return {
                value: item.value,
                name: item.name,
              };
            }),
            itemStyle: {

              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        color: ["#FFE400", "#F76F01", "#01A4F7", "#c07dff"]
      })

    } else {
      setOptions3({});
    }

  }, [businessCount]);
  return (
    <div style={{ width: '100%' }}>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '32.5%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{ marginLeft: '80px' }} />
        <strong style={{ color: "#00eaff", marginTop: '50px', fontSize: '1.6vh' }}>营商环境类</strong>
        <ReactEcharts
          option={options3}
          style={{ width: '390px', height: '500px' }}
        />

        <div>
          {
            businessCount.map((item, index) => {
              if (index === 0)
                return (
                  <div style={{ fontSize: '1.6em', fontWeight: 'bold', color: '#06e4f9', marginLeft: '100px' }}>
                    案件总数：{item.total}
                  </div>
                );
            })
          }
        </div>

      </div>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '32.5%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{ marginLeft: '100px' }} />
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>蓝天保卫战</strong>
        <ReactEcharts
          option={options}
          style={{ width: '400px', height: '500px'}}
        />

        <div>
          {
            blueSkyCount.map((item, index) => {
              if (index === 0)
                return (
                  <div style={{ fontSize: '1.6em', fontWeight: 'bold', color: '#06e4f9', marginLeft: '80px' }}>
                    案件总数：{item.total}
                  </div>
                );
            })
          }
        </div>

      </div>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '35%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{ marginLeft: '100px' }} />
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>一件事一次办</strong>
        <ReactEcharts
          option={options2}
          style={{ width: '400px', height: '500px' }}
        />

        <div>
          {
            moreOneCaseTypeResult.map((item, index) => {
              if (index === 0)
                return (
                  <div style={{ fontSize: '1.6em', fontWeight: 'bold', color: '#06e4f9', marginLeft: '100px' }}>
                    案件总数：{item.total}
                  </div>
                );
            })
          }
        </div>
      </div>

    </div>
  );


}

export default connect(({ appeal }) => ({
  blueSkyCount: appeal.blueSkyCount,
  businessCount: appeal.businessCount,
  adviceHandleDept: appeal.adviceHandleDept,
  moreOneCaseTypeResult: appeal.moreOneCaseTypeResult,
  name: appeal.deptName,
}))(Total);
