// import React, { useState, useEffect } from 'react';
// import ReactEcharts from 'echarts-for-react';
//
// import imgUrl from '@/assets/dataicon.png';
// import { connect } from 'react-redux';
//
// //export default function(props) {
// function Rightb(props) {
//   //const { monitorCount } = props;
//   const { messageLib } = props;
//   const [options, setOptions] = useState({});
//   useEffect(() => {
//
//     if (messageLib) {
//       const temp = messageLib.map(item => {
//         return {
//           name: item.deptName,
//           value: item.count,
//         }
//       });
//       setOptions({
//         series: [{
//           type: 'pie',
//           radius: [2, '55%'],
//           center: ['50%', '50%'],
//           startAngle:200,
//           roseType: 'radius',
//           color: ['#04f0c4', '#48d9ff', '#6ee624', '#8d14ff', '#bc10e0','#5c43fe'],
//
//           data: temp,
//           label: {
//             normal: {
//               formatter: "{b|{b}}:{c|{c}}\n{per|{d}%} ",
//               backgroundColor: "rgba(255, 147, 38, 0)",
//               borderColor: "transparent",
//               borderRadius: 4,
//               rich: {
//                 a: {
//                   lineHeight: 22,
//                   align: "center"
//                 },
//                 hr: {
//                   borderColor: "#aaa",
//                   width: "100%",
//                   borderWidth: 1,
//                   height: 0
//                 },
//                 b: {
//                   fontSize: 18,
//                   lineHeight: 33
//                 },
//                 c: {
//                   fontSize: 18,
//                   color: "#eee"
//                 },
//                 per: {
//                   fontSize: 18,
//                   //padding: [5, 8],
//                   borderRadius: 1
//                 }
//               },
//               textStyle: {
//                 color: "#fff",
//                 fontSize: 18
//               }
//             }
//           },
//           labelLine: {
//             normal: {
//               smooth: true,
//               lineStyle: {
//                 width: 2
//               }
//             }
//           },
//           itemStyle: {
//             normal: {
//               shadowBlur: 30,
//               shadowColor: 'rgba(0, 0, 0, 0.4)'
//             }
//           },
//           animationType: 'scale',
//         }]
//       });
//     }else {
//       setOptions({});
//     }
//
//   }, [messageLib]);
//   // useEffect(() => {
//   //   if (monitorCount) {
//   //     setOptions({
//   //       tooltip: {
//   //         trigger: 'item',
//   //         formatter: "{b} : {d}% <br/> {c}"
//   //       },
//   //
//   //       legend: {
//   //         orient: 'horizontal',
//   //         icon: 'circle',
//   //         top: 0,
//   //         x: 'center',
//   //         textStyle: {
//   //           color: '#fff',
//   //           fontSize:18
//   //         },
//   //         // data: ['红灯', '黄灯', '绿灯'],
//   //         data: monitorCount.map(item => {
//   //           return item.name;
//   //         }),
//   //       },
//   //       series: [{
//   //         type: 'pie',
//   //         radius: ['40%', '50%'],
//   //         center: ['50%', '50%'],
//   //         startAngle:90,
//   //         color: ['red', 'green' , 'yellow'],
//   //         data:monitorCount.map(item =>{
//   //           return {
//   //             value: item.value,
//   //             name: item.name,
//   //           };
//   //         }),
//   //         labelLine: {
//   //           normal: {
//   //             show: true,
//   //             length: 20,
//   //             length2: 20,
//   //             lineStyle: {
//   //               color: '#12EABE',
//   //               width: 2
//   //             }
//   //           }
//   //         },
//   //         label: {
//   //           normal: {
//   //             formatter: '{b|{b}:} {c|{c}}\n{hr|}\n{d|{d}%}',
//   //             rich: {
//   //               b: {
//   //                 fontSize: 20,
//   //                 color: '#fff',
//   //                 align: 'left',
//   //                 padding: 4
//   //               },
//   //               hr: {
//   //                 borderColor: '#12EABE',
//   //                 width: '100%',
//   //                 borderWidth: 2,
//   //                 height: 0
//   //               },
//   //               d: {
//   //                 fontSize: 20,
//   //                 color: '#fff',
//   //                 align: 'left',
//   //                 padding: 4
//   //               },
//   //               c: {
//   //                 fontSize: 20,
//   //                 color: '#fff',
//   //                 align: 'left',
//   //                 padding: 4
//   //               }
//   //             }
//   //           }
//   //         }
//   //       }]
//   //
//   //     });
//   //   }else {
//   //     setOptions({});
//   //   }
//   //
//   // }, [monitorCount]);
//   return (
//     <div style={{ flex: '1' }}>
//       <div id={'chart'} className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
//         <img src={imgUrl} alt={'#'} style={{marginLeft:'30px'}}/>
//         {/*<strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>监察数据统计</strong>*/}
//         <strong style={{ color: "#00eaff", 'font-size': '1.6vh' ,marginBottom:'100px'}}>信息库引用统计</strong>
//         <ReactEcharts
//           option={options}
//           style={{ width: '600px', height: '480px' ,marginTop:'150px' }}
//         />
//       </div>
//
//     </div>
//   );
// }
// export default connect(({ appeal }) => ({
//   //monitorCount: appeal.monitorCount,
//   messageLib: appeal.messageLib,
// }))(Rightb);
//


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
                  //color: 'rgba(255,255,255,0.8)',
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
                  //color: '#fff',
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
        <strong style={{ color: "#00eaff", 'font-size': '1.6vh', marginBottom: '100px' }}>区机关部门案件大类统计</strong>
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

