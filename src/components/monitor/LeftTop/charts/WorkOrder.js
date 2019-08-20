import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import imgUrl from '@/assets/dataicon.png';


function WorkOrder(props) {
    const { WorkOrder } = props;
    const [options, setOptions] = useState({});

    useEffect(() => {
        if (WorkOrder) {
            var xData = WorkOrder.map((item) => {
                return item.dateOfMonthDay;
            });
            var name = ["在线办结工单", "转办工单", "转办办结工单"]
            const temp1 = WorkOrder.map((item) => {
                return item.onlineFinishCount;
            });

            const temp2 = WorkOrder.map((item) => {
                return item.distributeCount;
            });
            const temp3 = WorkOrder.map((item) => {
                return item.distributeFinish;
            });


            setOptions({
                color: ['#1a9bfc', '#99da69', '#e32f46'],
                legend: {
                    top: 20,
                    itemGap:5,
                    itemWidth:5,
                    textStyle: {
                      color: '#',
                      fontSize: '20',
                      fontWeight: 'bold'
                    },
                    data: name,
                    icon: "react",
                  },
                tooltip: {
                    trigger: 'axis',
                    
                },
                
                xAxis: [{
        
      
                    axisLine: {
                        lineStyle: {
                            color: '#00ebff'
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        rotate: 50,
                        color: '#00ebff',
                        textStyle: {
                          fontSize:16
                        }
                    },
                    
                    data: xData,
                }],
                yAxis: [{
            
                   
                    nameGap: 40,
                    nameTextStyle: {
                        color: '#00ebff'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#00ebff'
                        },
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                      textStyle: {
                        fontSize:16
                      }
                    }
                    
                }],
                series: [{
                    name: '在线办结工单',
                    type: 'line',
                    itemStyle: {
                        color: '#1a9bfc',
                        borderColor: '#1a9bfc',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp1
                },
                {
                    name: '转办工单',
                    type: 'line',
                    itemStyle: {
                        color: '#99da69',
                        borderColor: '#99da69',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp2
                },
                {
                    name: '转办办结工单',
                    type: 'line',
                    itemStyle: {
                        color: '#e32f46',
                        borderColor: '#e32f46',
                        borderWidth: 4
                    },
                    lineStyle: {
                        width: 4
                    },
                    data: temp3
                }
                ]

            });
        } else {
            setOptions({});
        }


    }, [WorkOrder]);
    return (
        <div>
            <div className="col-md-6" style={{ float: 'left', overflow: 'hidden'  ,marginLeft:'30px'}}>
                <img src={imgUrl} alt={'#'}/>
                <strong style={{ color: "#00eaff", fontSize: '1.6vh' }}>工单办理对比</strong>
                <ReactEcharts
                    option={options}
                    style={{ width: '700px', height: '380px',marginBottom:'50px'}}
                />
            </div>
        </div>
    );
}

export default connect(({ monitor }) => ({
    WorkOrder: monitor.WorkOrder,
}))(WorkOrder);
