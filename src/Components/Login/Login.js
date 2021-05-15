import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      close: '',
      product: {},
    };
  }

  // 서버에서 데이터 받기
  // getInfo = e => {
  //   e.preventDefault();
  //   fetch('http://10.58.0.170:8000/products/openproduct', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         product: result,
  //       });
  //     });
  // };

  // componentDidMount() {
  //   this.getInfo();
  // }

  handleValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleBtn = e => {
    e.preventDefault();
    fetch('', {
      //http://10.58.2.6:8000/user/login
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(resData => resData.json())
      .then(jsonData => {
        console.log(jsonData);
        localStorage.setItem('accessToken', jsonData.token);
        // this.props.history.push('#');
        if (jsonData.MESSAGE === 'INVALID_EMAIL') {
          alert('이메일을 확인해주세요.');
        }
      });
  };

  render() {
    const { email, password } = this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기

    return (
      <div className="bodyBack">
        <div className="login">
          <div className="modalBody">
            <form className={'loginForm ' + this.state.close}>
              <button
                className="modalCloseBtn"
                type="button"
                onClick={() => {
                  this.props.offLogin();
                  this.setState({
                    close: 'offLoginPage',
                  });
                }}
              >
                <img alt="closeButton_image" src="./images/closeBtn.png" />
              </button>
              <div className="modalHeadingWrap">
                <h1 className="modalTitle">안녕하세요.</h1>
                <p>WeSop에 오신 것을 진심으로 환영합니다.</p>
              </div>
              <div className="formRow">
                <label htmlFor="">
                  <input
                    onChange={this.handleValue}
                    aria-required="true"
                    className={isEmail ? 'formTextInput' : 'isEmailError'}
                    name="email"
                    type="email"
                  />
                  <span className={email ? 'typing' : 'formTextLabel'}>
                    이메일 주소
                  </span>
                </label>
              </div>
              <div className={email && !isEmail ? 'errorMessage' : 'opacity'}>
                유효한 이메일 주소를 입력하세요
              </div>
            </form>
            <form className={'loginForm ' + this.state.close}>
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
              <div
                className={
                  password && !isPassword ? 'errorMessage' : 'opacity '
                }
              >
                <span className="errorMessage">
                  패스워드는 5자리부터 10자리 미만입니다.
                </span>
              </div>
              <button
                className="btnLogin"
                onClick={this.handleBtn}
                disabled={isEmail && isPassword ? false : true}
              >
                계속
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
