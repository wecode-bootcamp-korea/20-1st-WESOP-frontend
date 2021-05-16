import React from 'react';
import './MenuColumn.scss';

class MenuColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zIndex, left, animation } = this.props;
    return (
      <div
        className={`menuColumn ${animation}`}
        style={{ zIndex: zIndex, left: left }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default MenuColumn;
