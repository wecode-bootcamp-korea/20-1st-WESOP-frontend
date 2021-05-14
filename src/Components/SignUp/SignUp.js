import React from 'react';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pwCheck: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };
  }

  handleValueEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handleValuePW = e => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    const { email, password } = this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기
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
                      onChange={this.handleValueEmail}
                      aria-required="true"
                      type="email"
                      className={isEmail ? 'formTextInput' : 'isEmailError'}
                      name="email"
                    />
                    <span className={email ? 'typing' : 'formTextLabel'}>
                      이메일 주소
                    </span>
                  </label>
                </div>
              </div>
              <div className={email && !isEmail ? 'errorMessage' : 'opacity'}>
                유효한 이메일 주소를 입력하세요
              </div>

              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValuePW}
                      aria-required="true"
                      type="passwrod"
                      className={
                        isPassword ? 'formTextInput' : 'isPasswordError'
                      }
                      name="email"
                    />
                    <span className={password ? 'typing' : 'formTextLabel'}>
                      패스워드
                    </span>
                  </label>
                </div>
              </div>
              <div
                className={password && !isPassword ? 'errorMessage' : 'opacity'}
              >
                패스워드는 5자리부터 10자리 미만이어야 합니다
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
