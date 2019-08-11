import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

import imgUrl from '@/assets/dataicon.png';
import { connect } from 'react-redux';

//export default function(props) {
function Rightb(props) {
  //const { monitorCount } = props;
  const { messageLib } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {
    console.log(messageLib);
    debugger;
    if (messageLib) {
      const temp = messageLib.map(item => {
        return {
          name: item.deptName,
          value: item.count,
        }
      });
      setOptions({
        series: [{
          type: 'pie',
          radius: [2, '55%'],
          center: ['50%', '50%'],
          startAngle:200,
          roseType: 'radius',
          color: ['#04f0c4', '#48d9ff', '#6ee624', '#8d14ff', '#bc10e0','#5c43fe'],

          data: temp,
          label: {
            normal: {
              formatter: "{b|{b}}:{c|{c}}\n{per|{d}%} ",
              backgroundColor: "rgba(255, 147, 38, 0)",
              borderColor: "transparent",
              borderRadius: 4,
              rich: {
                a: {
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  fontSize: 18,
                  lineHeight: 33
                },
                c: {
                  fontSize: 18,
                  color: "#eee"
                },
                per: {
                  fontSize: 18,
                  //padding: [5, 8],
                  borderRadius: 1
                }
              },
              textStyle: {
                color: "#fff",
                fontSize: 18
              }
            }
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 2
              }
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 30,
              shadowColor: 'rgba(0, 0, 0, 0.4)'
            }
          },
          animationType: 'scale',
        }]
      });
    }else {
      setOptions({});
    }

  }, [messageLib]);
  return (
    <div style={{ flex: '1' }}>
      <div id={'chart'} className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{marginLeft:'30px'}}/>
        {/*<strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>监察数据统计</strong>*/}
        <strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>信息库引用统计</strong>
        <ReactEcharts
          option={options}
          style={{ width: '600px', height: '480px' ,marginTop:'150px' }}
        />
      </div>

    </div>
  );
}
export default connect(({ appeal }) => ({
  //monitorCount: appeal.monitorCount,
  messageLib: appeal.messageLib,
}))(Rightb);

