import React from 'react';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpEmail: '',
      signUpPW: '',
      pwCheck: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };
  }
  render() {
    return (
      <div className="bodyBack">
        <div className="signUp">
          <div className="modalBody">
            <div className="loginForm">
              <div className="modalHeadingWrap">
                <h1 className="modalTitle">
                  처음 만나 뵙게 되네요. WeSop에 오신 것을 환영합니다.
                </h1>
                <div className="modalSubTitle">
                  계정을 만들려면 아래에 세부 정보를 입력하십시오.
                </div>
              </div>
              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      aria-required="true"
                      type="email"
                      className="formTextInput"
                      name="email"
                    />
                    <span className="formTextLabel">이메일 주소</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
