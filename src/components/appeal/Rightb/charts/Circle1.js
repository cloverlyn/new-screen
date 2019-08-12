import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

import imgUrl from '@/assets/dataicon.png';
import { connect } from 'react-redux';

//export default function(props) {
function Rightb(props) {
  const { areaDeptDetail, deptName } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    if (areaDeptDetail) {
      const temp = areaDeptDetail.map(item => {
        return {
          name: item.caseTypeName,
          value: item.caseCount,
        }
      });
      setOptions({
        color: ['#04f0c4', '#48d9ff', '#6ee624', '#8d14ff', '#bc10e0', '#5d44ff', '#54FEFE', '#0097EE', '#3D4969', '#35CEBA'],
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
        },
        series: [{
          type: 'pie',
          radius: ['24%', '70%'],
          roseType: 'area',
          label: {
            normal: {
              show: true,
              formatter: '{b|{b}}\n{hr|}\n{d|占比{d}%}',
              rich: {
                b: {
                  fontSize: 20,
                  color: 'rgba(255,255,255,0.8)',
                  align: 'center',
                  padding: 6
                },
                hr: {
                  borderColor: '#0097EE',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                d: {
                  fontSize: 20,
                  color: '#fff',
                  align: 'center',
                  padding: 6,
                },
              },
              position: 'outside'
            },
            emphasis: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 1,
              lineStyle: {
                color: '#0097EE',
                width: 1
              },
            },
            emphasis: {
              show: true
            }
          },
          data: temp,
        },
        // 边框的设置
        {
          radius: ['16%', '20%'],
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          animation: false,
          tooltip: {
            show: false
          },
          data: [{
            value: 1,
            itemStyle: {
              color: "#3D4969",
            },
          }],
        },
        ]
      });
    } else {
      setOptions({});
    }

  }, [areaDeptDetail]);
  return (
    <div style={{ flex: '1' }}>
      <div id={'chart'} className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{ marginLeft: '30px' }} />
        <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>区县机关案件大类</strong>
        <ReactEcharts
          option={options}
          style={{ width: '600px', height: '480px', marginTop: '150px' }}
        />
      </div>

    </div>
  );
}
export default connect(({ appeal }) => ({
  areaDeptDetail: appeal.areaDeptDetail,
  // deptName: appeal.deptName,
}))(Rightb);

