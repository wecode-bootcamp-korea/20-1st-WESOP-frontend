import React from 'react';
import { Link } from 'react-router-dom';
import './MainIllust.scss';

class MainIllust extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wheel: 0 };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = e => {
    this.setState({ wheel: this.state.wheel + e.deltaY * 0.001 });
  };

  render() {
    const { children } = this.props;
    return (
      <div className="mainIllust">
        <img
          className="illust"
          alt="main illust"
          src={this.props.img || '/images/illust.png'}
        />
        <Link to="/">
          <img
            alt="wesop logo"
            src="/images/wesop.png"
            className="logo"
            style={{ transform: `rotate(${this.state.wheel}turn)` }}
          />
        </Link>

        <div className="giftIntro">
          {children || (
            <div className="contents">
              <p>어버이날과 스승의 날</p>
              <h1>지혜로운 보답</h1>
              <p>
                학교나 가정, 그곳이 어디든 평온한 순간을 선사할 수 있도록 다양한
                기프트 옵션과 감각적인 선물을 마련했습니다.
              </p>
              <Link to="/giftpage">
                <button>
                  기프트 보기
                  <i className="fas fa-arrow-right" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainIllust;
