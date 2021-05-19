import React from 'react';
import Form from './Form';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      animation: 'onLogin',
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 600);
  }

  handleBtn = e => {
    e.preventDefault();
    fetch('http://10.58.5.254:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(resData => resData.json())
      .then(jsonData => {
        console.log(jsonData);
        sessionStorage.setItem('accessToken', jsonData.token);
        // this.props.history.push('#');
        if (jsonData.MESSAGE === 'INVALID_EMAIL') {
          alert('이메일을 확인해주세요.');
        }
        if (jsonData.MESSAGE === 'INVALID_PASSWORD') {
          alert('패스워드를 확인해주세요.');
        }
      });
  };

  render() {
    const { name, text, type, errorMsg, isCheck } = this.props;
    return (
      <div className="bodyBack">
        <div className={'login'}>
          <div className={'modalBody ' + this.state.animation}>
            <button
              className="modalCloseBtn"
              type="button"
              onClick={() => {
                this.setState({
                  animation: 'offLoginPage',
                });
              }}
            >
              <img alt="closeButton_image" src="./images/closeBtn.png" />
            </button>
            <div className="modalHeadingWrap">
              <h1 className="modalTitle">안녕하세요.</h1>
              <p>WeSop에 오신 것을 진심으로 환영합니다.</p>
            </div>

            <Form
              name={name}
              text={text}
              type={type}
              errorMsg={errorMsg}
              isCheck={isCheck}
              onChange={this.handleValue}
            />
            <Form
              name={name}
              text={text}
              type={type}
              errorMsg={errorMsg}
              isCheck={isCheck}
              onChange={this.handleValue}
            />
            <button
              className="btnLogin"
              onClick={this.handleBtn}
              // disabled={isEmail && isPassword ? false : true}
            >
              계속
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
