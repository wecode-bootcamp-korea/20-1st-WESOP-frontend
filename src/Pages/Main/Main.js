import React from 'react';
import SignUp from '../../Components/SignUp/SignUp';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: true,
    };
  }

  signUpToggle = () => {
    setTimeout(() => {
      this.setState({ login: false });
    }, 200);
  };

  render() {
    return this.state.signUp && <SignUp signUpToggle={this.signUpToggle} />;
  }
}

export default Main;
