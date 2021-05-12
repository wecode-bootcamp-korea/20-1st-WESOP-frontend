import React from 'react';
import Login from '../../Components/Login/Login';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true, // 로그인 = true
    };
  }

  // 로그인창이 close 되는 함수.
  offLogin = () => {
    setTimeout(() => {
      // 로그인 = false
      this.setState({ login: false });
    }, 200); // 0.2초 후에 종료.
  };

  render() {
    return (
      // state에 있는 login 이 true면 offLogin 함수 전달 Login.js에서 사용할 수 있게.
      <div>{this.state.login ? <Login offLogin={this.offLogin} /> : null}</div>
    );
  }
}

export default Main;
