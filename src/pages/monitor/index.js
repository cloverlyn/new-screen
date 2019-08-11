import React from 'react';
import { connect } from 'dva';
import Area from '@/components/monitor/Area';


class Monitor extends React.Component {
  times = null;

  componentDidMount() {
    this.props.dispatch({
      type: 'monitor/fetch',
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
    }, 5000);
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
