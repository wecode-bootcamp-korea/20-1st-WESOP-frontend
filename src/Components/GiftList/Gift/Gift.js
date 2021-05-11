import React from 'react';
import './Gift.scss';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gift: [],
    };
  }

  componentDidMount() {
    this.setState({
      gift: this.props,
    });
  }

  render() {
    const { gift } = this.state;
    return (
      <div className="Gift">
        <div>{gift.id}</div>
      </div>
    );
  }
}

export default Gift;
