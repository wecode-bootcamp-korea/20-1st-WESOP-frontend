import React from 'react';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MainMenu">
        <img alt="wesop logo" src="images/wesop.png" className="logo" />
      </div>
    );
  }
}

export default MainMenu;
