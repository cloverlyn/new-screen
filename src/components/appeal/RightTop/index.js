import React from 'react';
import { connect } from 'dva';

import Charts from './charts/distributeEvent';
import styles from './index.scss';


function RightTop(props) {
  
  return (
    <div className={styles.container}>
      <div className={styles.title} style={{marginBottom:'50px'}}>办理数据</div>
      <Charts/>
    </div>
  );
}

export default connect(({ appeal }) => ({
  //hotEvent: monitor.hotEvent,
  //hotIndex: monitor.hotIndex,
  distributeEvent: appeal.distributeEvent,
  HistoryData1: appeal.HistoryData1,
  HistoryData2: appeal.HistoryData2,
  HistoryData3: appeal.HistoryData3,
  HistoryData4: appeal.HistoryData4,
}))(RightTop);
