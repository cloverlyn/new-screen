import React from 'react';
import { connect } from 'dva';
import Area from '@/components/appeal/Area';


class Appeal extends React.Component {
  times = null;
  componentDidMount() {
    this.props.dispatch({
      type: 'appeal/fetch',
    });
    this.times = setInterval(() => {
      this.props.dispatch({
        type: 'appeal/fetch',
      });
      this.props.dispatch({
        type: 'appeal/save',
        payload: {
          name: '规划房地',
          deptName: '长沙市',
          caseName: '规划房地',
          partName: '区县街道',
          areaName: '区县机关部门',
          deptNum1: '',
          deptNum2: '',
        },
      });
    
    }, 1500000);


  }

  componentWillUnmount() {
    clearInterval(this.times);
  }

  render() {
    return (
        <Area />
    );
  }
}

export default connect()(Appeal);
