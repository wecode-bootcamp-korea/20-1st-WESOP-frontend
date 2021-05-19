import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기

    const inputs = [
      {
        name: 'email',
        type: 'email',
        text: '이메일 주소',
        isCheck: isEmail,
        errorMsg: '유효한 이메일 주소를 입력하세요',
      },
      {
        name: 'password',
        type: 'password',
        text: '패스워드',
        isCheck: isPassword,
        errorMsg: '패스워드는 5자리부터 10자리 미만입니다.',
      },
    ];

    // const inputBox = inputs.map((el, index) => {
    //   return;
    // });

    return (
      <form className={'loginForm '}>
        <div className="formRow">
          <label htmlFor="">
            {inputs.map((el, index) => (
              <input
                key={index}
                type={el.type}
                text={el.text}
                errorMsg={el.errorMsg}
                className={el.isCheck}
              />
            ))}
            {/* <input
              onChange={this.handleValue}
              aria-required="true"
              className={isEmail ? 'formTextInput' : 'isEmailError'}
              name="email"
              type="email"
            /> */}
            <span className={email ? 'typing' : 'formTextLabel'}></span>
          </label>
        </div>
        <div className={email && !isEmail ? 'errorMessage' : 'opacity'}>
          유효한 이메일 주소를 입력하세요
        </div>
        {/* 
        <div className="formRow">
          <label htmlFor="">
            <input
              onChange={this.handleValue}
              aria-required="true"
              className={isPassword ? 'formPwInput' : 'isPasswordError'}
              name="password"
              type="password"
            />
            <span className={password ? 'typing' : 'formTextLabel'}>
              패스워드
            </span>
          </label>
        </div>
        <div className={password && !isPassword ? 'errorMessage' : 'opacity '}>
          <span className="errorMessage">
            패스워드는 5자리부터 10자리 미만입니다.
          </span>
        </div> */}
      </form>
    );
  }
}

export default Form;
