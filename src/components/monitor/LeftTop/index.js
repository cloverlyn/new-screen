import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts/lib/echarts';
import styles from './index.scss';
import Satisfaction from './charts/Satisfaction'
import WorkOrder from './charts/WorkOrder';

function LeftTop(props) {
  const { OnlineFinishThis, OnlineFinishLast, DistributeByMonth, DistributeLastMonth } = props;
  // const [options4, setOptions4] = useState({});
  const [options5, setOptions5] = useState({});
  const [options6, setOptions6] = useState({});
  useEffect(() => {
    
    // if (OnlineFinishThis) {
    //   var tempThis = [];
    //   tempThis.push(OnlineFinishThis.onlineProportion);
    //   tempThis.push(OnlineFinishThis.distributeProportion);
    //   var tempLast = [];
    //   tempLast.push(OnlineFinishLast.onlineProportion);
    //   tempLast.push(OnlineFinishLast.distributeProportion)
    //   setOptions4({
    //     // backgroundColor: "#000833",
    //     //animation: true,
    //     title:{
    //       text:"办结率",
    //       top:20,
    //       right:20,
    //       textStyle:{
    //         color:'#00eaff',
    //         fontSize:20
    //       }
    //     },
    //     legend: {
    //       top: 20,
    //       left:20,
    //       textStyle: {
    //         color: "#00eaff"
    //       },
    //       data: ["上月", "本月"]
    //     },
    //     grid: {
    //       left: "3%",
    //       right: "4%",
    //       bottom: "10%",
    //       containLabel: true
    //     },

    //     tooltip: {
    //       show: "true",
    //       trigger: "item",
    //       backgroundColor: "rgba(0,0,0,0.7)", // 背景
    //       padding: [8, 10], //内边距
    //       extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);", //添加阴影
    //       formatter: function(params) {
           
    //           return (
    //             params.name +
    //             "<br>" +
    //             params.seriesName +
    //             " ： " +
    //             params.value +
    //             "%"
    //           );
           
    //       }
    //     },
    //     yAxis: {

    //       type: "value",
    //       axisTick: {
    //         show: false
    //       },
    //       axisLine: {
    //         show: true,
    //         lineStyle: {
    //           color: "#00eaff"
    //         }
    //       },
    //       splitLine: {
    //         show: true,
    //         lineStyle: {
    //           color: "#363e83 "
    //         }
    //       },
    //       axisLabel: {
    //         formatter: "{value} %",
    //         textStyle: {
    //           color: "#00eaff",
    //           fontWeight: "normal",
    //           fontSize: "18",

    //         }
    //       }
    //     },
    //     xAxis: [
    //       {
    //         type: "category",
    //         axisTick: {
    //           show: false
    //         },
    //         axisLine: {
    //           show: true,
    //           lineStyle: {
    //             color: "#00eaff"
    //           }
    //         },
    //         axisLabel: {
    //           inside: false,
    //           textStyle: {
    //             color: "#00eaff",
    //             fontWeight: "normal",
    //             fontSize: "18"
    //           }
    //           // formatter:function(val){
    //           //     return val.split("").join("\n")
    //           // },
    //         },
    //         data: ["在线办结率", "转办率"]
    //       },
    //       {
    //         type: "category",
    //         axisLine: {
    //           show: false
    //         },
    //         axisTick: {
    //           show: false
    //         },
    //         axisLabel: {
    //           show: false
    //         },
    //         splitArea: {
    //           show: false
    //         },
    //         splitLine: {
    //           show: false
    //         },
    //         data: ["在线办结率", "转办率"]
    //       }
    //     ],
    //     series: [
    //       {
    //         type: "bar",
    //         xAxisIndex: 1,
    //         zlevel: 1
    //       },
    //       {
    //         type: "bar",
    //         xAxisIndex: 1,
    //         zlevel: 1
    //       },
    //       {
    //         type: "bar",
    //         xAxisIndex: 1,
    //         zlevel: 1
    //       },
    //       {
    //         name: "上月",
    //         type: "bar",
    //         itemStyle: {
    //           normal: {
    //             show: true,
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               {
    //                 offset: 0,
    //                 color: "#fccb05"
    //               },
    //               {
    //                 offset: 1,
    //                 color: "#f5804d"
    //               }
    //             ]),
    //             fontSize:18,
    //             barBorderRadius: 50,
    //             borderWidth: 0
    //           }
    //         },
    //         zlevel: 2,
    //         barWidth: "16%",//柱子宽度
    //         data: tempLast
    //       },
    //       {
    //         name: "本月",
    //         type: "bar",
    //         barWidth: "16%",
    //         itemStyle: {
    //           normal: {
    //             show: true,
    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //               {
    //                 offset: 0,
    //                 color: "#248ff7"
    //               },
    //               {
    //                 offset: 1,
    //                 color: "#6851f1"
    //               }
    //             ]),
    //             fontSize:18,
    //             barBorderRadius: 50,
    //             borderWidth: 0
    //           }
    //         },
    //         zlevel: 2,
    //         barGap: "100%",
    //         data: tempThis
    //       }
    //     ]
    //   });
    // }
    // else
    //   {
    //     setOptions4({});
    //   }

    if (OnlineFinishThis) {
      var tempThis1 = [];
      tempThis1.push(OnlineFinishThis.onlineCount);
      tempThis1.push(OnlineFinishThis.distributeCount);
      tempThis1.push(OnlineFinishThis.distributeFinish);
      var tempLast1 = [];
      tempLast1.push(OnlineFinishLast.onlineCount);
      tempLast1.push(OnlineFinishLast.distributeCount);
      tempLast1.push(OnlineFinishLast.distributeFinish);
      setOptions5({
        // backgroundColor: "#000833",
        // animation: true,
        title:{
          text:"工单数",
          top:20,
          right:20,
          textStyle:{
            color:'#00eaff',
            fontSize:20
          }
        },
        legend: {
          top: 20,
          left:30,
          textStyle: {
            color: "#00eaff"
          },
          data: ["上月", "本月"]
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },

        tooltip: {
          show: "true",
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#00eaff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#363e83 "
            }
          },
          axisLabel: {
            textStyle: {
              color: "#00eaff",
              fontWeight: "normal",
              fontSize: "18"
            }
          }
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00eaff"
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: "#00eaff",
                fontWeight: "normal",
                fontSize: "12"
              }
              // formatter:function(val){
              //     return val.split("").join("\n")
              // },
            },
            data: ["在线办结工单", "转办工单", "转办办结工单"]
          },
          {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: ["在线办结工单", "转办工单", "转办办结工单"]
          }
        ],
        series: [
          {
            type: "bar",
            xAxisIndex: 1,
            zlevel: 1
          },
          {
            type: "bar",
            xAxisIndex: 1,
            zlevel: 1
          },
          {
            type: "bar",
            xAxisIndex: 1,
            zlevel: 1
          },
          {
            name: "上月",
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#fccb05"
                  },
                  {
                    offset: 1,
                    color: "#f5804d"
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0
              }
            },
            zlevel: 2,
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize: 20,
            },
            barWidth: "18%",
            data: tempLast1
          },
          {
            name: "本月",
            type: "bar",
            barWidth: "18%",
            itemStyle: {
              normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#248ff7"
                  },
                  {
                    offset: 1,
                    color: "#6851f1"
                  }
                ]),
                barBorderRadius: 50,
                borderWidth: 0
              }
            },
            zlevel: 2,
            label: {
              show: true,
              position: 'top',
              color: '#fff',
              fontSize: 20,
            },
            barGap: "100%",
            data: tempThis1
          }
        ]
      });
    }
    else
    {
      setOptions5({});
    }
   
    if (DistributeByMonth) {
      const name = DistributeByMonth.map((item, index) => {
        return item.name;
      });
      const valueThis = DistributeByMonth.map((item, index) => {
      
          return item.value;
      });
  
      const valueLast = DistributeLastMonth.map((item, index) => {
        
          return item.value;
      });
      setOptions6({
        // backgroundColor: "#000833",
        // animation: true,
        title:{
          text:"转办工单",
          top:20,
          right:20,
          textStyle:{
            color:'#00eaff',
            fontSize:20
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["上月", "本月"],
          align: "left",
          top:20,
          left: 20,
          textStyle: {
            color: "#fff"
          },
          itemWidth: 30,
          itemHeight: 15,
          itemGap: 35
        },
        grid: {
          right: '2%',
          left: '18%',
          bottom: '14%'
        },
        xAxis: [
          {
            type: "category",
            data: name,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            axisPointer:{
              type:'line',
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              margin:10,
              rotate:40,
              fontSize:14,
              textStyle: {
                color: "#00c7ff",
                width:0
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}",
              fontSize:20,
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#063374"
              }
            }
          }
        ],
        series: [
          {
            name: "上月",
            type: "bar",
            data: valueLast,
            barWidth: 10, //柱子宽度
            barGap: '-50%', //柱子与柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#008cff"
                  },
                  {
                    offset: 1,
                    color: "#005193"
                  }
                ]),
                opacity: 1
              }
            }
          },
          {
            name: "本月",
            type: "bar",
            data: valueThis,
            barWidth: 10,
            barGap:'0',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00da9c"
                  },
                  {
                    offset: 1,
                    color: "#007a55"
                  }
                ]),
                opacity: 1
              }
            }
          }
        ]
      });
    }
    else
    {
      setOptions6({});
    }

  }, [OnlineFinishThis, OnlineFinishLast, DistributeByMonth, DistributeLastMonth]);


  return (
    <div className={styles.container}>
      <div className={styles.title}>工单办理情况</div>
      <div style={{ width: '100%' }}>
        <WorkOrder style={{marginBottom: '100px'}}/>


        <Satisfaction style={{marginBottom: '100px'}}/>
    </div>

    <div style={{ width: '100%' }}>
        {/*<div className="col-md-4" style={{  float: 'left', overflow: 'hidden' }}>*/}
        {/*  <ReactEcharts*/}
        {/*    option={options4}*/}
        {/*    style={{ width: '350px', height: '450px',marginTop:'50px' }}*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="col-md-6" style={{ float: 'left', overflow: 'hidden' }}>
          <ReactEcharts
            option={options6}
            style={{ width: '500px', height: '450px' ,marginTop:'50px',marginLeft:'30px'}}
          />
        </div>


        <div className="col-md-6" style={{  float: 'left', overflow: 'hidden' }}>
          <ReactEcharts
            option={options5}
            style={{ width: '500px', height: '450px' ,marginTop:'50px',marginLeft:'80px'}}
          />
        </div>
      </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  OnlineFinishThis:monitor.OnlineFinishThis,
  OnlineFinishLast: monitor.OnlineFinishLast,
  DistributeByMonth: monitor.DistributeByMonth,
  DistributeLastMonth: monitor.DistributeLastMonth
}))(LeftTop);
