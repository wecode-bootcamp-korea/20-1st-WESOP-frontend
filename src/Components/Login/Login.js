import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
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
        <div className="Login">
          <div className="Modal-body">
            <form className="LoginForm">
              <button className="Modal-closeBtn" type="button">
                <img alt="closeButton_image" src="./images/closeBtn.png" />
              </button>
              <div className="Modal-headingWrap">
                <h2 className="Modal-title">안녕하세요.</h2>
                <p>유효한 이메일 주소를 입력하세요.</p>
              </div>
              <div className="Form-row">
                <div className="FormText">
                  <label htmlFor="">
                    <input
                      onChange={this.handleValueID}
                      aria-required="true"
                      className="FormText-input"
                      name="email"
                      type="email"
                    />
                    <span className="FormText-label">이메일 주소</span>
                  </label>
                </div>
              </div>
              <button className="Btn-Login" onClick={this.handleBtn}>
                <div className="Btn-content">
                  <span className="Btn-label">계속</span>
                  <span className="LoadingIndicator">
                    <span className="LoadingIndicator-label">
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
