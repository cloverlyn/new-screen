import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

function LeftTop(props) {
    const { caseTypeStatisticsDetail } = props;

    const [options2, setOptions2] = useState({});
    useEffect(() => {
        if (caseTypeStatisticsDetail) {

            var colorList = ['#e3bb11', '#e7e311', '#14eea0', '#2bc1f8', '#0665f8', '#7d39d8', '#d10783', '#e13c41'];
            setOptions2({
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                grid: {
                    top: '1%',
                    containLabel: true
                },
                series: [{
                    type: 'pie',
                    radius: ['27%', '53%'],
                    // roseType: 'radius',
                    clockwise: false,
                    z: 5,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                // build a color map as your need.
                                return colorList[params.dataIndex]
                            },
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d|{b}}\n{hr|}\n{d|({d}%)}',
                            rich: {
                                b: {
                                    fontSize: 16,
                                    color: '#843dcb',
                                    align: 'left',
                                    padding: 4
                                },
                                hr: {
                                    //		                            borderColor: '#12EABE',
                                    width: '100%',
                                    borderWidth: 1,
                                    height: 0
                                },
                                d: {
                                    fontSize: 16,
                                    color: '#00eaff',
                                    align: 'left',
                                    padding: 1
                                },
                                c: {
                                    fontSize: 16,
                                    color: '#fff',
                                    align: 'center',
                                    //		                            padding: 4
                                }
                            }
                        }
                    },

                    labelLine: {
                        normal: {
                            length: 22,
                            length2: 0,
                            lineStyle: {
                                width: 2
                            }
                        }
                    },
                    data: caseTypeStatisticsDetail.map((item) => {
                        return {
                            name: item.name,
                            value: item.value,
                        };
                    })
                }]
            });
        } else {
            setOptions2({});
        }
    }, [caseTypeStatisticsDetail]);

    return (
        <ReactEcharts
            option={options2}
            style={{ width: '99%', height: '45%', padding: '1vh' }}
        />

    );
}

export default connect(({ appeal }) => ({
    caseTypeStatisticsDetail: appeal.caseTypeStatisticsDetail,
}))(LeftTop);
