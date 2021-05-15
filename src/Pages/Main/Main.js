import React from 'react';
import MainMenu from '../../Components/MainMenu/MainMenu';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: true,
    };
  }

  menuToggle = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };
  render() {
    const { openMenu } = this.state;
    const { menuToggle } = this;

    return (
      <div className="main">
        {openMenu && <MainMenu menuToggle={menuToggle} />}
      </div>
    );
  }
}

export default Main;
