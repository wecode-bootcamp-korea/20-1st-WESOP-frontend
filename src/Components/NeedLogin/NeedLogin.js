import React from 'react';
import './NeedLogin.scss';

class NeedLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 'onLogin',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 600);

    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  close = () => {
    this.setState({
      animation: 'offLoginPage',
    });
    setTimeout(this.props.navToggle, 600);
  };

  render() {
    return (
      <div className="bodyBack">
        <div className="needLogin">
          <div className={'modalBody ' + this.state.animation}>
            <div className="modalHeadingWrap">
              <h1 className="modalTitle">로그인이 필요한 페이지입니다.</h1>
              <p>WeSop의 회원이 되어 다양한 혜택을 즐겨보세요.</p>
            </div>
            <button className="btnLogin" onClick={this.close}>
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NeedLogin;
