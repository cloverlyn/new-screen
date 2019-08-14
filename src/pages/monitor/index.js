import React from 'react';
import { connect } from 'dva';
import Area from '@/components/monitor/Area';


class Monitor extends React.Component {
  times = null;

  componentDidMount() {
    this.props.dispatch({
      type: 'monitor/fetch',
    });
    this.props.dispatch({
      type: 'monitor/save',
      payload: {
        deptName: '长沙市',
      },
    });
    this.props.dispatch({
      type: 'appeal/fetch',
    });
    this.props.dispatch({
      type: 'appeal/save',
      payload: {
        name: '',
        deptName: '长沙市',
        caseName: '',
        partName: '区县街道',
        areaName: '区县机关部门',
        aName: '区县',
      },
    });
    this.times = setInterval(() => {
      this.props.dispatch({
        type: 'monitor/fetch',
      });
      this.props.dispatch({
        type: 'monitor/save',
        payload: {
          deptName: '长沙市',
        },
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.times);
  }

  render() {
    return (
        <Area/>
    );
  }
}

export default connect()(Monitor);
