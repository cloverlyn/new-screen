import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';

function History(props) {
  const { HistoryData1, HistoryData2, HistoryData3, HistoryData4 } = props;
  const [options, setOptions] = useState({});
  useEffect(() => {

    if (HistoryData1) {
      const xAxisData = HistoryData1.map(item => {
        return item.dateYear;
      });

      const tem1 = HistoryData1.map(item => {
        return item.caseSubTypeCount;
      });
      const temp1 = HistoryData1.map(item => {
        return item.caseSubTypeName;
      });

      var tem2 = [];
      var tem3 = [];
      var tem4 = [];
      var temp2 = [];
      var temp3 = [];
      var temp4 = [];

      if (HistoryData2) {
        tem2 = HistoryData2.map(item => {
          return item.caseSubTypeCount;
        });

        temp2 = HistoryData2.map(item => {
          return item.caseSubTypeName;
        });
      }

      if (HistoryData3) {
        tem3 = HistoryData3.map(item => {
          return item.caseSubTypeCount;
        });

        temp3 = HistoryData3.map(item => {
          return item.caseSubTypeName;
        });
      }

      if (HistoryData4) {
        tem4 = HistoryData4.map(item => {
          return item.caseSubTypeCount;
        });

        temp4 = HistoryData4.map(item => {
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
          smooth: 0.4,
          symbolSize: 10,
          data: metaDate[v]
        };
        serieData.push(serie)
      }
      var colors = ["#41d96d", "#9549f7", "#00c0ef", "#fda53a"];
      setOptions({
        legend: {
          show: true, left: "right", data: legendData, top: 20,
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
      setOptions({});
    }
  }, [HistoryData1, HistoryData2, HistoryData3, HistoryData4]);

  return (
    <div>
      <ReactEcharts
        option={options}
        style={{ width: '600px', height: '800px' }} />
    </div>
  );
}

export default connect(({ appeal }) => ({
  HistoryData1: appeal.HistoryData1,
  HistoryData2: appeal.HistoryData2,
  HistoryData3: appeal.HistoryData3,
  HistoryData4: appeal.HistoryData4,
}))(History);
