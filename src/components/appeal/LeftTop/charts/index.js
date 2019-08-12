import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

function LeftTop(props) {
  const { noisyEvent1, noisyEvent2, noisyEvent3, noisyEvent4 } = props;
  const [options1, setOptions1] = useState({});
  // const [options2, setOptions2] = useState({});

  useEffect(() => {
    if (noisyEvent1) {
      const xAxisData = noisyEvent1.map(item => {
        return item.dateYear;
      });

      const tem1 = noisyEvent1.map(item => {
        return item.caseSubTypeCount;
      });
      const temp1 = noisyEvent1.map(item => {
        return item.caseSubTypeName;
      });

      var tem2 = [];
      var tem3 = [];
      var tem4 = [];
      var temp2 = [];
      var temp3 = [];
      var temp4 = [];

      if (noisyEvent2) {
        tem2 = noisyEvent2.map(item => {
          return item.caseSubTypeCount;
        });

        temp2 = noisyEvent2.map(item => {
          return item.caseSubTypeName;
        });
      }

      if (noisyEvent3) {
        tem3 = noisyEvent3.map(item => {
          return item.caseSubTypeCount;
        });

        temp3 = noisyEvent3.map(item => {
          return item.caseSubTypeName;
        });
      }

      if (noisyEvent4) {
        tem4 = noisyEvent4.map(item => {
          return item.caseSubTypeCount;
        });

        temp4 = noisyEvent4.map(item => {
          return item.caseSubTypeName;
        });
      }


      //var legendData = ['其他', '骚扰电话', '催办工单', '移车'];
      var legendData = [];
      legendData.push(temp1[0]);
      legendData.push(temp2[0]);
      legendData.push(temp3[0]);
      legendData.push(temp4[0]);
      var serieData = [];
      var metaDate = [];
      metaDate.push(tem1);
      metaDate.push(tem2);
      metaDate.push(tem3);
      metaDate.push(tem4);
      for (var v = 0; v < legendData.length; v++) {
        var serie = {
          name: legendData[v],
          type: 'line',
          symbol: "circle",
          symbolSize: 10,
          data: metaDate[v]
        };
        serieData.push(serie)
      }
      var colors = ["#036BC8", "#843dcb", "#00c0ef", "#fda53a"];
      setOptions1({
        legend: {
          show: true, left: "right", data: legendData, y: "0",
          itemWidth: 18, itemHeight: 12, textStyle: { color: "#fff", fontSize: 18 },
        },
        color: colors,
        grid: { left: '2%', top: "12%", bottom: "5%", right: "5%", containLabel: true },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: [
          {
            type: 'category',
            axisLine: { show: true, lineStyle: { color: '#00eaff' } },
            axisLabel: { interval: 0, rotate: 40, textStyle: { color: '#00eaff', fontSize: 18 } },
            axisTick: { show: false },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { textStyle: { color: '#00eaff', fontSize: 18 } },
            axisLine: { show: true, lineStyle: { color: '#00eaff' } },
          },
        ],
        series: serieData
      });
    } else {
      setOptions1({});
    }


  }, [noisyEvent1, noisyEvent2, noisyEvent3, noisyEvent4]);

  return (
    <ReactEcharts
      option={options1}
      style={{ width: '99%', height: '99%', padding: '1vh', marginLeft: '20px' }}
    />
  );
}

export default connect(({ appeal }) => ({
  noisyEvent1: appeal.noisyEvent1,
  noisyEvent2: appeal.noisyEvent2,
  noisyEvent3: appeal.noisyEvent3,
  noisyEvent4: appeal.noisyEvent4,
  // caseTypeStatisticsDetail: appeal.caseTypeStatisticsDetail,
  // name: appeal.caseTypeStatisticsDetail.data.caseTypeName,
}))(LeftTop);
