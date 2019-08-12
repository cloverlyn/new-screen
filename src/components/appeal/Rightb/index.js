import React from 'react';
import PhoneState from './charts/PhoneState';
import { connect } from 'react-redux';
import Another from './charts/State1';
import styles from './index.scss';


class Rightb extends React.Component {
  render(){
    const { deptName } = this.props;
    var flag = 0;
    if(deptName === '长沙市'){
      flag = 1;
    }
    return (
    <div className={styles.container}>
      {flag ? <PhoneState />: <Another />}
      {/* <PhoneState /> */}
    </div>
  );
  }
  
};

export default connect(({ appeal }) => ({
  deptName : appeal.deptName,
}))(Rightb);


