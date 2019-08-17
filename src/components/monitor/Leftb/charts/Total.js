import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import imgUrl from '@/assets/dataicon.png';

function Total(props) {
  const { HandleBusiness, messageLib,adviceHandleDept, adviceHandleDept1, CallType } = props;
  const [options, setOptions] = useState({});
  const [options2, setOptions2] = useState({});
  const [options3, setOptions3] = useState({});
  useEffect(() => {
    if (HandleBusiness) {
      const name = HandleBusiness.map(item => {
        return item.handleDate;
      });

      const handleCount = HandleBusiness.map(item => {
        return item.handleCount;
      });

      const acceptCount = HandleBusiness.map(item => {
        return item.acceptCount;
      });
      setOptions({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter:"{a}:{c}<br/>{a1}:{c1}",
          rich:{
            a:{
              textStyle:{
                color:'#fccb05'
              }

            },
            a1:{
              color: '#8bd46e'
            }

          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        legend: {
          data: ['受理量', '转办量'],
          right: 50,
          top:12,
          textStyle: {
            color: "#00eaff"
          },
          itemWidth: 12,
          itemHeight: 10,
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: name,
          
          axisLine: {
            lineStyle: {
              color: '#00eaff'
            }
          },
          axisLabel: {
            // interval: 0,
            rotate: 40,
            fontSize:20,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} ',
            fontSize:20,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00eaff",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#00eaff",
            }
          }
        }],
        "dataZoom": [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '150%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [{
          name: '受理量',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
              barBorderRadius: 12,
            },
          },
          data: handleCount
        },
          {
            name: '转办量',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]),
                barBorderRadius: 11,
              }

            },
            data: acceptCount
          }]

      });
    } else {
      setOptions({});
    }

    // if (messageLib) {
    //   const temp = messageLib.map(item => {
    //     return {
    //       name: item.deptName,
    //       value: item.count,
    //     }
    //   });
    //   setOptions2({
    //     // backgroundColor: "#000833",
    //     // animation: true,
    //     series: [{
    //       type: 'pie',
    //       radius: [2, '40%'],
    //       center: ['50%', '50%'],
    //       startAngle:200,
    //       roseType: 'radius',
    //       color: ['#04f0c4', '#48d9ff', '#6ee624', '#8d14ff', '#bc10e0','#5c43fe'],
    //
    //       data: temp,
    //       label: {
    //         normal: {
    //           formatter: "{b|{b}}:{c|{c}}\n{per|{d}%} ",
    //           backgroundColor: "rgba(255, 147, 38, 0)",
    //           borderColor: "transparent",
    //           borderRadius: 4,
    //           rich: {
    //             a: {
    //               lineHeight: 22,
    //               align: "center"
    //             },
    //             hr: {
    //               borderColor: "#aaa",
    //               width: "100%",
    //               borderWidth: 1,
    //               height: 0
    //             },
    //             b: {
    //               fontSize: 14,
    //               lineHeight: 33
    //             },
    //             c: {
    //               fontSize: 14,
    //               color: "#eee"
    //             },
    //             per: {
    //               fontSize: 14,
    //               //padding: [5, 8],
    //               borderRadius: 1
    //             }
    //           },
    //           textStyle: {
    //             color: "#fff",
    //             fontSize: 18
    //           }
    //         }
    //       },
    //       labelLine: {
    //         normal: {
    //           smooth: true,
    //           lineStyle: {
    //             width: 2
    //           }
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           shadowBlur: 30,
    //           shadowColor: 'rgba(0, 0, 0, 0.4)'
    //         }
    //       },
    //       animationType: 'scale',
    //     }]
    //   });
    // }
    //   else{
    //     setOptions2({})
    //   }
    if (adviceHandleDept) {
          var plantCap = adviceHandleDept.map(item =>{
            return{
              name: item.deptName,
              value: item.distributCount,
            }
          });
        var datalist = [{
            offset: [56, 48],
            symbolSize: 154,
            opacity: .95,
            color: '#000833'
        },  {
            offset: [20, 43],
            symbolSize: 115,
            opacity: .84,
            color: '#000833'
        }, {
            offset: [83, 35],
            symbolSize: 113,
            opacity: .8,
            color: '#000833'
        }, {
            offset: [64, 20],
            symbolSize: 92,
            opacity: .7,
            color: '#000833'
        }, {
            offset: [80, 52],
            symbolSize: 60,
            opacity: .7,
            color: '#000833'
        },{
            offset: [40, 65],
            symbolSize: 60,
            opacity: .88,
            color: '#000833'
        }];
        var datas = [];
        for (var i = 0; i < plantCap.length; i++) {
            var item = plantCap[i];
            var itemToStyle = datalist[i];
            datas.push({
                name: item.value + '\n' + item.name,
                value: itemToStyle.offset,
                symbolSize: itemToStyle.symbolSize,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 18,
                            color:'#00faff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: itemToStyle.color,
                        opacity: itemToStyle.opacity
                    }
                },
            })
        }
          setOptions2({
            grid: {
              show: false,
              top: 10,
              bottom: 10
          },
          xAxis: [{
              gridIndex: 0,
              type: 'value',
              show: false,
              min: 0,
              max: 100,
              nameLocation: 'middle',
              nameGap: 5
          }],
          yAxis: [{
              gridIndex: 0,
              min: 0,
              show: false,
              max: 100,
              nameLocation: 'middle',
              nameGap: 30
          }],
          series: [{
              type: 'scatter',
              symbol: 'circle',
              symbolSize: 120,
              label: {
                  normal: {
                      show: true,
                      formatter: '{b}',
                      color: '#fff',
                      textStyle: {
                          fontSize: '20'
                      }
                  },
              },
              itemStyle: {
                  normal: {
                      borderWidth: '4',
                      borderType: 'solid',
                      borderColor: '#fff',
                      color: '#000833',
                      shadowColor: '#00faff',
                      shadowBlur: 10
                  }
              },
              data: datas
          }]
          });
    }
    else{
      setOptions2({})
    }

    if (adviceHandleDept1) {
      const deptName = adviceHandleDept1.map(item => {
        return item.deptName;
      });
      const distributCount = adviceHandleDept1.map(item => {
        return item.distributCount;
      });
      setOptions3({
        // backgroundColor: "#000833",
        // animation: true,
        grid: {
          top: '15%',
          right: '3%',
          left: '15%',
          bottom: '15%'
        },
        xAxis: [{
          type: 'category',
          color: '#00eaff',
          data: deptName,
          axisPointer: {
            type: 'line'
          },
          axisLine: {
            lineStyle: {
              color: '#00eaff'
            }
          },
          axisLabel: {
            margin: 20,//x轴距下方文件的文字距离
            color: '#00eaff',
            rotate:45,//文字偏移角度
            textStyle: {
              fontSize: 14
            },
          },
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            fontSize: 16
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00eaff",
              width: 1,
              type: "solid"
            },
          },
          splitLine: {
            lineStyle: {
              color: "#063374",
            }
          }
        }],
        series: [{
          type: 'bar',
          data: distributCount,
          barWidth: '20px',//柱状图宽度
          barGap:'10px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#41E1D4' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#10A7DB' // 100% 处的颜色
              }], false),
              barBorderRadius: [30, 30, 0, 0],
              shadowColor: 'rgba(0,255,225,1)',
              shadowBlur: 4,
            }
          },
          label: {
            normal: {
              show: true,
              lineHeight: 30,
              width: 50,
              height: 30,
              backgroundColor: '#252453',
              borderRadius: 200,
              position: ['-8', '-60'],
              distance: 1,
              formatter: [
                //'    {d|●}',
                ' {a|{c}}     \n',
                '    {b|}'
              ].join(','),
              rich: {
                d: {
                  color: '#3CDDCF',
                },
                a: {
                  color: '#00eaff',
                  align: 'center',
                },
                b: {
                  width: 1,
                  height: 30,
                  borderWidth: 1,
                  borderColor: '#00eaff',
                  align: 'left'
                },
              }
            }
          }
        }]
      });
    }else{
      setOptions3({});
    }

  }, [HandleBusiness, messageLib,adviceHandleDept,adviceHandleDept1, CallType]);
  return (
    <div style={{ width: '100%' }}>


      <div id={'chart'} className="col-md-3" style={{ marginTop: '40px' , width: '28%'  , float: 'left', overflow: 'hidden' }}>
        <img src={ imgUrl } alt={'#'}/>
        <strong style={{ color: "#00eaff" , marginTop: '50px' , fontSize: '1.6vh'}}>专席受理</strong>
        <ReactEcharts
          option={options}
          style={{ width: '350px', height: '450px' , marginTop: '150px' }}
        />
      </div>


      <div id={'chart'} className="col-md-5" style={{ marginTop: '40px' , width: '40%'  , float: 'left', overflow: 'hidden' }}>
        <img src={ imgUrl } alt={'#'} style={{marginLeft:'100px'}}/>
        {/*<strong style={{ color: "#00eaff" ,marginTop: '50px' , fontSize: '1.6vh' }}>信息库引用统计</strong>*/}
        <strong style={{ color: "#00eaff" ,marginTop: '50px' , fontSize: '1.6vh' }}>微建议受理</strong>
        <ReactEcharts
          option={options2}
          style={{ width: '450px', height: '450px', marginTop: '150px'}}
        />
      </div>


      <div id={'chart'} className="col-md-4" style={{marginTop: '40px' , width: '32%'  , float: 'right', overflow: 'hidden' }}>
        <img src={ imgUrl } alt={'#'}/>
        {/*<strong style={{ color: "#00eaff" , marginTop: '50px' , fontSize: '1.6vh' }}>本月话务类型统计</strong>*/}
        <strong style={{ color: "#00eaff" , marginTop: '50px' , fontSize: '1.6vh' }}>市长信箱受理</strong>
        <ReactEcharts
          option={options3}
          style={{ width: '380px', height: '550px', marginTop: '150px',}}
        />
      </div>

    </div>
  );
}

export default connect(({ monitor }) => ({
  HandleBusiness: monitor.HandleBusiness,
  messageLib: monitor.messageLib,
  CallType: monitor.CallType,
  adviceHandleDept: monitor.adviceHandleDept,
  adviceHandleDept1: monitor.adviceHandleDept1,
}))(Total);
