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
          startAngle:290,
          color: ['#f33f39', '#18e7d8', '#2e91ff', '#eebd10', '#00faff', '#de1f87', '#505de8'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data:blueSkyCount.map(item =>{
            return{
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

    if (businessCount) {

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
            startAngle:195,
            label: {
              show: true,
              formatter: '{b}: \n {d}%',
              textStyle:{
                fontSize:15
              }
            },
            data:businessCount.map(item =>{
              return{
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
        color: ['#f34238','#17f5b8','#2e91ff','#f1cf18','#00faff','#8b32bf','#4855e5']
      });
    }
    else {
      setOptions2({})
    }

  }, [businessCount]);

  useEffect(() => {
    if (moreOneCaseTypeResult) {
      var maxOne = 0;
      moreOneCaseTypeResult.map((item , index) => {
        if(index === 0)
        maxOne = item.count;
      });

      var xData = [];
      var length = moreOneCaseTypeResult.length;
      for(var i=0;i<length;i++)
      {
          xData.push(maxOne);
      }

      setOptions3({
        grid: {
          show:'true',
          borderWidth:'0',
          height:"80%",
          width:"65%",
          //x:"12%",
          left:"20%",
          right:"30px"
          // y:"20%",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: "{b0}: {c0}"
          /*formatter: function(params) {
              var result = '';
              params.forEach(function (item) {
                  result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
              });
              return result;
          }*/
        },
        xAxis: {
          show: false,                //是否显示x轴
          type: 'value'
        },
        yAxis: {
          type: 'category',
          inverse:true,               //让y轴数据逆向
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666', //y轴字体颜色
              fontSize: 18
            },
            formatter: function(value, index) {
              return [
                '{lg|'+ '}' + '{title|' + value + '} '
              ].join('\n');
            },
            //定义富文本标签
            rich: {
              lg: {
                fontWeight: 'bold',
                fontSize: 18,       //字体默认12
                color: '#08C',
                padding: [0, 5, 0, 0]
              },
              title: {
                color: '#fff',
                fontWeight: 'lighter',
                // borderWidth: 1,
                // borderColor: '#08c'
                // textareaBorderColor: '#08c',
              }
            }
          },
          splitLine: {show: false},   //横向的线
          axisTick: {show: false},    //y轴的端点
          axisLine: {show: false},    //y轴的线
          //data: ['闽DZ0175','闽DZ6027','闽D83876','闽DZ1377','闽DZ8825']
            data:moreOneCaseTypeResult.map(item => {
                return item.deptName
            })
        },
        series: [
          {
            name: '数据内框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: '#00b5eb',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#fff',
                  fontSize: 16,
                  fontStyle: 'bold',
                }
              }
            },
            barWidth: 30,
            //data: [11, 33, 77, 39, 55]
            data: moreOneCaseTypeResult.map(item => {
              return item.count
            })
          },
          {
            name: '外框',
            type: 'bar',
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: 'rgba(255, 255, 255, 0.14)' //rgba设置透明度0.14
              }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 30,
            //data: [100, 100, 100, 100, 100]
            data: xData
          }
        ]
        //backgroundColor: '#0e2147',
        // grid: {
        //   left: '9%',
        //   top: '12%',
        //   right: '5%',
        //   bottom: '8%',
        //   containLabel: true
        // },
        // xAxis: [{
        //   show: false,
        // }],
        // yAxis: [{
        //   axisTick: 'none',
        //   axisLine: 'none',
        //   offset: '27',
        //   axisLabel: {
        //     textStyle: {
        //       color: '#ffffff',
        //       fontSize: '16',
        //     }
        //   },
        //   //data: ['宁乡市', '岳麓区', '芙蓉区', '天心区', '开福区', '浏阳市', '长沙县', '望城区', '雨花区', '长沙市']
        //   data:moreOneCaseTypeResult.map(item => {
        //       return item.deptName
        //   })
        // },
        //   {
        //   axisTick: 'none',
        //   axisLine: 'none',
        //     show: 'false',
        //   axisLabel: {
        //     textStyle: {
        //       color: '#ffffff',
        //       fontSize: '16',
        //     }
        //   },
        //   //data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
        //   data:moreOneCaseTypeResult.map(item =>{
        //     return item.ranking
        //   })
        // },
        //   {
        //   //name: '分拨延误TOP 10',
        //   nameGap: '50',
        //   nameTextStyle: {
        //     color: '#ffffff',
        //     fontSize: '16',
        //   },
        //   axisLine: {
        //     lineStyle: {
        //       color: 'rgba(0,0,0,0)'
        //     }
        //   },
        //   data: [],
        // }],
        // series: [{
        //   name: '条',
        //   type: 'bar',
        //   yAxisIndex: 0,
        //   //data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
        //   data:moreOneCaseTypeResult.map(item =>{
        //      return item.count
        //   }),
        //   label: {
        //     normal: {
        //       show: true,
        //       position: 'right',
        //       textStyle: {
        //         color: '#ffffff',
        //         fontSize: '16',
        //       }
        //     }
        //   },
        //   barWidth: 12,
        //   itemStyle: {
        //     normal: {
        //       color: function(params) {
        //         var num = myColor.length;
        //         return myColor[params.dataIndex % num]
        //       },
        //     }
        //   },
        //   z: 2
        // }, {
        //   name: '白框',
        //   type: 'bar',
        //   yAxisIndex: 1,
        //   barGap: '-100%',
        //   //data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        //   data:moreOneCaseTypeResult.map(item =>{
        //      return item.count+9.5
        //   }),
        //   barWidth: 20,
        //   itemStyle: {
        //     normal: {
        //       color: '#0e2147',
        //       barBorderRadius: 5,
        //     }
        //   },
        //   z: 1
        // }, {
        //   name: '外框',
        //   type: 'bar',
        //   yAxisIndex: 2,
        //   barGap: '-100%',
        //   //data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        //   data:moreOneCaseTypeResult.map(item =>{
        //      return item.count+10
        //   }),
        //   barWidth: 24,
        //   itemStyle: {
        //     normal: {
        //       color: function(params) {
        //         var num = myColor.length;
        //         return myColor[params.dataIndex % num]
        //       },
        //       barBorderRadius: 5,
        //     }
        //   },
        //   z: 0
        // },
        //   {
        //     name: '外圆',
        //     type: 'scatter',
        //     hoverAnimation: false,
        //     //data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     data:moreOneCaseTypeResult.map(item => {
        //       return item.count-item.count
        //     }),
        //     yAxisIndex: 2,
        //     symbolSize: 35,
        //     itemStyle: {
        //       normal: {
        //         color: function(params) {
        //           var num = myColor.length;
        //           return myColor[params.dataIndex % num]
        //         },
        //         opacity: 1,
        //       }
        //     },
        //     z: 2
        //   }
        // ]

      })

    } else {
      setOptions3({});
    }

  }, [moreOneCaseTypeResult]);
  return (
    <div style={{ width: '100%' }}>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '32.5%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{marginLeft:'80px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '50px',fontSize: '1.6vh' }}>营商环境类</strong>
        <ReactEcharts
          option={options2}
          style={{ width: '390px', height: '500px'}}
        />

        <div>
          {
            businessCount.map((item , index) => {
              if(index === 0)
                return (
                  <div style={{ fontSize: '1.6em' , fontWeight: 'bold' , color: '#06e4f9' , marginLeft:'100px'}}>
                    案件总数：{item.total}
                  </div>
                );
            })
          }
        </div>

      </div>


      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '32.5%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{marginLeft:'100px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>蓝天保卫战</strong>
        <ReactEcharts
          option={options}
          style={{ width: '400px', height: '500px'  }}
        />

        <div>
          {
            blueSkyCount.map((item , index) => {
              if(index === 0)
                return (
                  <div style={{ fontSize: '1.6em' , fontWeight: 'bold' , color: '#06e4f9' , marginLeft:'80px'}}>
                    案件总数：{item.total}
                  </div>
                );
            })
          }
        </div>

      </div>

      
      <div id={'chart'} className="col-md-4" style={{ marginTop: '60px', width: '35%', float: 'left', overflow: 'hidden' }}>
        <img src={imgUrl} alt={'#'} style={{marginLeft:'100px'}}/>
        <strong style={{ color: "#00eaff", marginTop: '30px', fontSize: '1.6vh' }}>一件事一次办</strong>
        <ReactEcharts
          option={options3}
          style={{ width: '450px', height: '500px' , marginTop: '100px'}}
        />
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
