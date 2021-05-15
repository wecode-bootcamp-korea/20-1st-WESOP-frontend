import React from 'react';
import Form from './Form';
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
    };
  }

  handleValue = e => {
    const { name, value } = e.target;
    console.log(typeof name);
    this.setState({
      [name]: value,
    });
  };

  // handleValuePW = e => {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // };

  // handleConfirm = e => {
  //   this.setState({
  //     pwconfirm: e.target.value,
  //   });
  // };

  // handleLastName = e => {
  //   this.setState({
  //     lastname: e.target.value,
  //   });
  // };

  // handleFirstName = e => {
  //   this.setState({
  //     firstname: e.target.value,
  //   });
  // };

  // handlePhoneNumber = e => {
  //   this.setState({
  //     phonenumber: e.target.value,
  //   });
  // };

  render() {
    const { email, password, pwconfirm, lastname, firstname, phonenumber } =
      this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기
    const isConfirm = password === pwconfirm && pwconfirm.length >= 6;
    const isLastName = lastname.length >= 1 && lastname.length <= 10;
    const isFirstName = firstname.length >= 1 && firstname.length <= 15;
    const isPhoneNumber = isNaN(phonenumber) && phonenumber.length >= 6;

    const inputs = [
      {
        type: 'email',
        check: 'isEmail',
        name: 'email',
        text: '이메일 주소.',
      },
      {
        type: 'password',
        check: 'isPassword',
        name: 'password',
        text: '패스워드',
      },
      {
        type: 'password',
        check: 'isConfirm',
        name: 'pwconfirm',
        text: '패스워드 확인',
      },
      {
        type: 'lastname',
        check: 'isLastName',
        name: 'lastname',
        text: '성',
      },
      {
        type: 'firstname',
        check: 'isFirstName',
        name: 'firstname',
        text: '이름',
      },
      {
        type: 'number',
        check: 'isPhoneNumber',
        name: 'phonenumber',
        text: '핸드폰 번호',
      },
    ];

    const mapBox = inputs.map((el, index) => (
      <Form
        onChange={this.handleValue}
        type={el.type}
        check={el.check}
        name={el.name}
        text={el.text}
      />
    ));
    console.log(mapBox);

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
              {mapBox}
              {/* <div className="formRow">
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
              </div> */}

              {/* <Form onChange={this.handleValue} type={}  check={} name={} text={} /> */}
              <div className={email && !isEmail ? 'errorMessage' : 'opacity'}>
                유효한 이메일 주소를 입력하세요
              </div>
              {/* </div> */}
              {/* <div className="loginForm"> */}
              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValuePW}
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
                      onChange={this.handleConfirm}
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
                      onChange={this.handleLastName}
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
                      onChange={this.handleFirstName}
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
                      onChange={this.handlePhoneNumber}
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
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handlePhoneNumber}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
