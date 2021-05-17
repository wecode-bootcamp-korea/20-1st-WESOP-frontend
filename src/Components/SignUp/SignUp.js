import React from 'react';
//import Form from './Form';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pwconfirm: '',
      firstname: '',
      lastname: '',
      phonenumber: '',
      checkbox: false,
      animation: 'onLogin',
    };
  }

  handleBtn = e => {
    e.preventDefault();
    fetch('', {
      //http://10.58.2.6:8000/user/login
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phonenumber: this.state.phonenumber,
        checkbox: this.state.checkbox,
      }),
    })
      .then(resData => resData.json())
      .then(
        jsonData => {
          console.log(jsonData);
          localStorage.setItem('accessToken', jsonData.token);
          // this.props.history.push('#');
          if (jsonData.MESSAGE === 'INVALID_EMAIL') {
            alert('이메일을 확인해주세요.');
          }
        },
        () => {
          console.log('button');
        }
      );
  };

  checkBoxValue = () => {
    if (this.state.checkbox === false) {
      this.setState({
        checkbox: true,
      });
    } else {
      this.setState({
        checkbox: false,
      });
    }
  };

  handleValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 600);
  }

  render() {
    const {
      email,
      password,
      pwconfirm,
      lastname,
      firstname,
      phonenumber,
      checkbox,
    } = this.state;

    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기
    const isConfirm = password === pwconfirm && pwconfirm.length >= 6;
    const isLastName = lastname.length >= 1 && lastname.length <= 10;
    const isFirstName = firstname.length >= 1 && firstname.length <= 15;
    const isPhoneNumber = phonenumber.length >= 8;
    const isCheck = checkbox;

    const isButton =
      isEmail &&
      isPassword &&
      isConfirm &&
      isLastName &&
      isFirstName &&
      isPhoneNumber;

    return (
      <div className="bodyBack">
        <div className="signUp">
          <div className={'modalBody ' + this.state.animation}>
            <div className="loginForm">
              <button
                className="modalCloseBtn"
                type="button"
                onClick={() => {
                  this.setState({
                    animation: 'offLoginPage',
                  });
                }}
              >
                <img alt="closeButton_image" src="/closeBtn.png" />
              </button>
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
                      onChange={this.handleValue}
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
                      onChange={this.handleValue}
                      aria-required="true"
                      type="password"
                      className={
                        isPassword ? 'formTextInput' : 'isPasswordError'
                      }
                      name="password"
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

              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValue}
                      aria-required="true"
                      type="password"
                      className={isConfirm ? 'formTextInput' : 'isConfirmError'}
                      name="pwconfirm"
                    />
                    <span className={pwconfirm ? 'typing' : 'formTextLabel'}>
                      패스워드 확인
                    </span>
                  </label>
                </div>
              </div>
              <div
                className={pwconfirm && !isConfirm ? 'errorMessage' : 'opacity'}
              >
                입력하신 패스워드와 일치하지 않습니다.
              </div>

              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValue}
                      aria-required="true"
                      type="text"
                      className={
                        isLastName ? 'formTextInput' : 'isLastNameError'
                      }
                      name="lastname"
                    />
                    <span className={lastname ? 'typing' : 'formTextLabel'}>
                      성
                    </span>
                  </label>
                </div>
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValue}
                      aria-required="true"
                      type="text"
                      className={
                        isFirstName ? 'formTextInput' : 'isFirstNameError'
                      }
                      name="firstname"
                    />
                    <span className={firstname ? 'typing' : 'formTextLabel'}>
                      이름
                    </span>
                  </label>
                </div>
              </div>
              <div
                className={
                  firstname && !isFirstName ? 'errorMessage' : 'opacity'
                }
              >
                이름을 올바르게 입력해주세요.
              </div>

              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValue}
                      aria-required="true"
                      type="number"
                      className={
                        isPhoneNumber ? 'formTextInput' : 'isPhoneNumberError'
                      }
                      name="phonenumber"
                    />
                    <span className={phonenumber ? 'typing' : 'formTextLabel'}>
                      핸드폰 번호
                    </span>
                  </label>
                </div>
              </div>
              <div
                className={
                  phonenumber && !isPhoneNumber ? 'errorMessage' : 'opacity'
                }
              >
                유효하지 않는 번호입니다.
              </div>

              <div className="formText">
                <form method="POST">
                  <input
                    type="checkbox"
                    id="checkBox"
                    name="ageCheck"
                    onChange={this.checkBoxValue}
                  />
                  <label htmlFor="checkBox">
                    가입자 본인은 만 14세 이상입니다.
                  </label>
                </form>
              </div>
              <button
                className="btnLogin"
                onClick={this.handleBtn}
                disabled={isButton && isCheck ? false : true}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
