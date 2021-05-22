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
    //deltaY가 위로 휠하면 음수가 되고, 아래로 휠하면 양수가 되어서 그 수*0.001turn 만큼씩 회전하도록 하려고 state값을 지정했습니다
    this.setState({ wheel: this.state.wheel + e.deltaY * 0.001 });
  };

  render() {
    const { children } = this.props;
    return (
      <div className="mainIllust">
        <img
          className="illust"
          alt="main illust"
          //부모 컴포넌트에서 다른 이미지를 전달하면 그 이미지로, 없으면 illust.png가 나오도록
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
