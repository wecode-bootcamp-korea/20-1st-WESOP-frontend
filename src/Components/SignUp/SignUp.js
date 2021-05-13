import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bodyBack">
        <div className="modalBody">
          <div className="loginForm">
            <div className="modalHeadingWrap">
              <h1>처음 만나 뵙게 되네요. 이솝에 오신 것을 환영합니다.</h1>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
