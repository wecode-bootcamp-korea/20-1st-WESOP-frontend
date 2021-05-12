import React from 'react';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheel: 0,
      firstRequest: '제품보기',
      secondRequest: '',
    };
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

  handleFirstRequest = menu => {
    this.setState(
      {
        firstRequest: '',
        secondRequest: '',
      },
      () => {
        this.setState({ firstRequest: menu });
      }
    );
  };

  handleSecondRequest = category => {
    this.setState(
      {
        secondRequest: [],
      },
      () => {
        this.setState({
          secondRequest: category,
        });
      }
    );
  };

  render() {
    const { wheel, firstRequest, secondRequest } = this.state;
    const { handleFirstRequest, handleSecondRequest } = this;

    return (
      <div className="MainMenu">
        <div className="menuNav">
          <ul>
            {Object.keys(CATEGORIES).map(menu => (
              <li
                onMouseOver={() => {
                  handleFirstRequest(menu);
                }}
              >
                {menu}
                <hr style={{ width: firstRequest === menu && `100%` }} />
              </li>
            ))}
          </ul>
          <i class="fas fa-times" />
        </div>
        <div className="column">
          <div className={`firstMenu ${secondRequest && `nextMenu`}`}>
            <img
              alt="wesop logo"
              src="images/wesop.png"
              className="logo"
              style={{ transform: `rotate(${wheel}turn)` }}
            />
            <div className="category">
              {firstRequest === '검색' && (
                <>
                  <i class="fas fa-arrow-right" />
                  <input />
                </>
              )}
              <ul>
                {(firstRequest
                  ? Object.keys(CATEGORIES[firstRequest])
                  : []
                ).map((category, index) => (
                  <li
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      borderColor: category === secondRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleSecondRequest(category);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {secondRequest && (
            <div className="secondMenu">
              <ul className="category">
                {(Array.isArray(secondRequest)
                  ? []
                  : CATEGORIES[firstRequest][secondRequest]
                ).map((category, index) => (
                  <li style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainMenu;

const CATEGORIES = {
  제품보기: {
    스킨: [
      '모두 보기',
      '스킨 케어 기프트',
      '클렌저',
      '각질 제거',
      '트리트먼트 & 마스크',
      '토너',
      '하이드레이터',
      '립 & 아이',
    ],
    헤어: ['모두 보기', '샴푸', '컨디셔너', '트리트먼트', '그루밍'],
    '바디 & 핸드': [
      '핸드 및 바디 케어 기프트',
      '핸드',
      '바디',
      '퍼스널 케어',
      '번들',
    ],
    향수: [
      '로즈 오 드 퍼퓸',
      '로즈 앙상블',
      '휠 오 드 퍼퓸',
      '마라케시 인텐스 퍼퓸',
    ],
    '기프트 가이드': ['모든 기프트', '이솝에서 사랑받는 제품들'],
  },

  읽기: {
    '더 아테네움': [],
    '회사 소개': [],
    철학: [],
    'Taxonomy of Design': [],
  },
  검색: { 인기검색어: ['클렌저', '페뷸러스', '향수'] },
};
