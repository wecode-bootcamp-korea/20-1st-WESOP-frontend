import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
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

  handleValueID = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handleValuePW = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleBtn = e => {
    e.preventDefault();
    fetch('#', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        pw: this.state.email,
      }),
    })
      .then(resData => resData.json())
      .then(jsonData => {
        if (jsonData.MESSAGE === 'SUCCES') {
          localStorage.setItem('accessToken', jsonData.ACCESS_TOKEN);
          this.props.history.push('#');
        } else if (jsonData.MESSAGE === 'INVALID_USER') {
          alert('이메일을 확인해주세요.');
        }
      });
  };

  render() {
    const { email, pw } = this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = pw.length >= 6 && pw.length <= 10; //대문자 , 숫자 적용하기
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
                <p>Wesop에 오신 것을 진심으로 환영합니다.</p>
              </div>
              <div className="formRow">
                <label htmlFor="">
                  <input
                    onChange={this.handleValueID}
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
                    onChange={this.handleValuePW}
                    aria-required="true"
                    className={isPassword ? 'formPwInput' : 'isPasswordError'}
                    name="password"
                    type="password"
                  />
                  <span className={pw ? 'typing' : 'formTextLabel'}>
                    패스워드
                  </span>
                </label>
              </div>
              <div className={pw && !isPassword ? 'errorMessage' : 'opacity '}>
                <span className="errorMessage">
                  패스워드는 5자리부터 10자리 이상이어야 합니다
                </span>
              </div>
              <button
                className="btnLogin"
                onClick={this.handleBtn}
                disabled={isEmail && isPassword ? false : true}
              >
                <div className="btnContent">
                  <span className="btnLabel">계속</span>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
