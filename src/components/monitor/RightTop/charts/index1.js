import React from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import Charts from './chart1';

import styles from './index.scss';

function RightTop(props) {
  const { hotEvent1, hotIndex } = props;

  const onChangeDetail = (index) => {
  
      props.dispatch({
        type: 'monitor/save',
        payload: {
          hotIndex: index,
        },
      });
      props.dispatch({
        type: 'monitor/handleHotEventDetail1',
      });
  };
  return (
    <div className={styles.mainContainer}>
      <div div className={styles.types}>
        {
          hotEvent1.map((item) => {
            const cx = classNames({
              [styles.typeItem]: true,
              [styles.select]: item.typeId === hotIndex,
            });
            return (

              <div className={cx} key={item.caseName} onClick={() => onChangeDetail(item.typeId)}>
                <div>
                  {item.caseName}
                  {item.total}个来电
            </div>
              </div>
            );
          })
        }
      </div>
      <Charts />
    </div>
  );

}


export default connect(({ monitor }) => ({
  hotEvent1: monitor.hotEvent1,
  hotIndex: monitor.hotIndex,
}))(RightTop);
