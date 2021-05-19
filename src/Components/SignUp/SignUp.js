import React from 'react';
import BaseForm from './Form/BaseForm';
import AddForm from './Form/AddForm';
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
      //http://10.58.5.240:8000/user/signup
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
          if (jsonData.MESSAGE === 'INVALID_PASSWORD') {
            alert('비밀번호 양식을 다시 확인해주세요.');
          }
        },
        () => {
          console.log('button');
        }
      );
  };

  checkBoxValue = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
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

    const baseInputs = [
      {
        name: 'email',
        type: 'text',
        text: '이메일 주소',
        errorMsg: ' 유효한 이메일 주소를 입력하세요',
        isCheck: isEmail,
      },
      {
        name: 'password',
        type: 'password',
        text: '패스워드',
        errorMsg: '대문자 포함 및 5자리부터 10자리 미만이어야 합니다',
        isCheck: isPassword,
      },
      {
        name: 'pwconfirm',
        type: 'password',
        text: '패스워드 확인',
        errorMsg: '입력하신 패스워드와 일치하지 않습니다.',
        isCheck: isConfirm,
      },
    ];

    const addInputs = [
      {
        name: 'lastname',
        type: 'text',
        text: ' 성',
        isCheck: isLastName,
      },
      {
        name: 'firstname',
        type: 'text',
        text: '이름',
        isCheck: isFirstName,
      },
    ];

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

              {baseInputs.map((el, index) => (
                <BaseForm
                  key={index}
                  name={el.name}
                  text={el.text}
                  type={el.type}
                  errorMsg={el.errorMsg}
                  isCheck={el.isCheck}
                  handleValue={this.handleValue}
                />
              ))}
              <div className="formRow">
                {addInputs.map((el, index) => (
                  <AddForm
                    key={index}
                    name={el.name}
                    text={el.text}
                    type={el.type}
                    isCheck={el.isCheck}
                    handleValue={this.handleValue}
                  />
                ))}
              </div>
              <div className="formRow">
                <div className="formText">
                  <label htmlFor="#">
                    <input
                      onChange={this.handleValue}
                      aria-required="true"
                      type="number"
                      className={isPhoneNumber ? 'formTextInput' : 'isError'}
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
