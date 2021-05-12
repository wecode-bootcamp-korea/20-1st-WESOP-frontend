import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
      close: '',
    };
  }

  handleValueID = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handleBtn = e => {
    e.preventDefault();
    fetch('#', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
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
    return (
      <div className="bodyBack">
        <div className="login">
          <div className="modalBody">
            {/* onclick을 하면 css class변경 해주기 "LoginForm" + " " 상태인데
            50번줄에 onClick이 실행되면 Main.js에 있는 offLogin()함수가 실행되고 close: "" 가
            close : "offLoginPage의 css 속성을 먹는다."  */}
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
                <p>유효한 이메일 주소를 입력하세요.</p>
              </div>
              <div className="formRow">
                <label htmlFor="">
                  <input
                    onChange={this.handleValueID}
                    aria-required="true"
                    className="formTextInput"
                    name="email"
                    type="email"
                  />
                  <span className="formTextLabel">이메일 주소</span>
                </label>
              </div>
              <button className="btnLogin" onClick={this.handleBtn}>
                <div className="btnContent">
                  <span className="btnLabel">계속</span>
                  <span className="loadingIndicator">
                    <span className="loadingIndicatorLabel">
                      필수 입력 항목입니다.
                    </span>
                  </span>
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
