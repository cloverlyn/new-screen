import React from 'react';
import { connect } from 'dva';
import ReactEcharts from 'echarts-for-react';
import Detail from './charts/Detail';
import Charts from './charts/index';

import styles from './index.scss';
import imgUrl from '@/assets/dataicon.png';

class LeftTop extends React.Component {
  get options() {
    const { caseTypeStatistics } = this.props;
    if (caseTypeStatistics) {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : <br />{c} ({d}%)',
        },
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            startAngle: 120,
            label: {
              show: true,
              formatter: '{b}: \n{d}%',
              textStyle: {
                fontSize: 20,
              },
            },
            data: caseTypeStatistics.map(item => {
              return {
                value: item.caseCount,
                name: item.caseTypeName,
                typeId: item.caseTypeId,
              };
            }),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
        color: ['#f34238', '#17f5b8', '#2e91ff', '#f1cf18', '#00faff', '#8b32bf', '#4855e5'],
      };
    } else {
      return {};
    }
  }

  chartDetails = e => {
    this.props.dispatch({
      type: 'appeal/handleCaseTypeStatisticsDetail',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent1',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent2',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent3',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/handlenoisyEvent4',
      payload: {
        typeId: e.data.typeId,
      },
    });
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        name: e.data.name,
      },
    });
  };

  render() {
    const { name } = this.props;
    const { partName } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.title}>在线办结案件</div>
        <div className={styles.mainContainer}>
          <div style={{ width: '100%', marginTop: '50px' }}>
            <img src={imgUrl} alt="" />
            <strong style={{ color: '#00eaff', fontSize: '1.6vh' }}>各案件大类数据统计</strong>
            <ReactEcharts
              option={this.options}
              style={{ width: '550px', height: '69%' }}
              onEvents={{ click: this.chartDetails }}
            />
          </div>

          <div style={{ opacity: 0.9, width: '600px', height: '800px' }}>
            <img src={imgUrl} alt="" />
            <strong style={{ color: '#00eaff', fontSize: '1.6vh'}}>
              {name}案件类概况
            </strong>
            <Charts />

            <img src={imgUrl} alt="" />
            <strong style={{ color: '#00eaff', fontSize: '1.6vh'}}>
              {name}类{partName}分布图
            </strong>
            <Detail />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ appeal }) => ({
  caseTypeStatistics: appeal.caseTypeStatistics,
  name: appeal.name,
  partName: appeal.partName,
}))(LeftTop);
