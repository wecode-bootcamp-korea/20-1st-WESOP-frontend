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

  handleValue = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(name, value);
      }
    );
  };

  hadleValueID = e => {
    this.setState({
      email: e.target.value,
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 600);

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  handleBtn = e => {
    e.preventDefault();
    fetch('http://10.58.2.119:8000/user/login', {
      //http://192.168.0.24:8000/user/login
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(resData => resData.json())
      .then(jsonData => {
        sessionStorage.setItem('accessToken', JSON.stringify(jsonData.token));
        // this.props.history.push('#');
        if (jsonData.MESSAGE === 'INVALID_EMAIL') {
          alert('이메일을 확인해주세요.');
        }
        if (jsonData.MESSAGE === 'INVALID_PASSWORD') {
          alert('패스워드를 확인해주세요.');
        }
        if (jsonData.MESSAGE === 'SUCCESS') {
          this.setState({
            animation: 'offLoginPage',
          });
          alert('환영합니다!');
        }
      });
  };

  render() {
    const { email, password } = this.state;
    const isEmail = email.includes('@') && email.endsWith('.com');
    const isPassword = password.length >= 6 && password.length <= 10; //대문자 , 숫자 적용하기

    const inputs = [
      {
        name: 'email',
        type: 'text',
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

            {inputs.map((input, index) => (
              <Form
                key={index}
                name={input.name}
                text={input.text}
                type={input.type}
                errorMsg={input.errorMsg}
                isCheck={input.isCheck}
                handleValue={this.handleValue}
                value={this.state[input.name]}
              />
            ))}

            <button
              className="btnLogin"
              onClick={this.handleBtn}
              disabled={isEmail && isPassword ? false : true}
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
