import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';


function Satisfaction(props) {
  const { Satisfaction } = props;
  const [options, setOptions] = useState({});
  const [options1, setOptions1] = useState({});
  useEffect(() => {
    if (Satisfaction) {
      // 添加渐变色
      const temp = Satisfaction.map((item, index) => {
        if (index < 4) {
          return {
            name: item.satisfiedName,
            value: item.satisfiedCount,
           
          };
        }
      });

      setOptions({
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "48%"],
            color: ["#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
            startAngle: 135,
            labelLine: {
              normal: {
                length: 25
              }
            },
            label: {
              normal: {
                formatter: "{b|{b}}\n {c|{c}  }\n {per|{d}%} ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                  a: {
                    color: "#999",
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
                    color: "#b3e5ff",
                    fontSize: 20,
                    lineHeight: 33
                  },
                  c: {
                    fontSize: 18,
                    color: "#eee"
                  },
                  per: {
                    color: "#FDF44E",
                    fontSize: 16,
                    padding: [5, 8],
                    borderRadius: 2
                  }
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 18
                }
              }
            },

            data: temp
          }
        ]
      });
    } else {
      setOptions({});
    }

    if (Satisfaction) {
      // 添加渐变色
      const temp = Satisfaction.map((item) => {
        return item.satisfiedProportion;
      });
      
      var max = 100;
      var prop = temp[4];
      // var prop = 88;

      setOptions1({
        title: {
          text: "满意度",
          top: "38%",
          left: "center",
          textStyle: {
            color: "#00eaff",
            fontSize: 18
          }
        },
        color: ["#00eaff", "#00eaff", "#aaacbb"],
        series: [
          {
            type: "pie",
            center: ["60%", "60%"],
            radius: ["60%", "50%"],
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: prop,
                label: {
                  show: true,
                  position: "center",
                  color: "#00eaff",
                  fontSize: 30,
                  fontWeight: "bold",
                  formatter: function(o) {
                    return prop + "%";
                  }
                }
              },
              {
                //画中间的图标
                name: "",
                value: 0,
                label: {
                  position: "inside",
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  padding: 30
                }
              },
              {
                //画剩余的刻度圆环
                name: "",
                value: max - prop,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            ]
          }
        ]
      });
    } else {
      setOptions1({});
    }
  }, [Satisfaction]);
  return (
    <div>
      <div className="col-md-3" style={{ float: 'left', overflow: 'hidden' }}>
          {/*<ReactEcharts*/}
          {/*  option={options1}*/}
          {/*  style={{ width: '120px', height: '380px' ,marginBottom:'50px'}}*/}
          {/*/>*/}
        </div>

        <div className="col-md-4" style={{  float: 'left', overflow: 'hidden' }}>
          <img src={ imgUrl } alt={'#'} style={{marginLeft:'30px'}}/>
          <strong style={{ color: "#00eaff" , height: '100px', fontSize: '1.6vh'}}>回访满意度情况</strong>
          <ReactEcharts
            option={options}
            style={{ width: '420px', height: '380px' ,marginBottom:'50px'}}
          />
        </div>
    </div>
  );
}

export default connect(({ monitor }) => ({
  Satisfaction: monitor.Satisfaction,
}))(Satisfaction);
