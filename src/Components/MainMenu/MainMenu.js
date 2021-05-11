import React from 'react';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHover: { li0: false, li1: false, li2: false } };
  }

  render() {
    const { isHover } = this.state;

    return (
      <div className="MainMenu">
        <div className="menuNav">
          <ul>
            {UPPERCATEGORIES.map((title, index) => (
              <li
                onMouseOver={() => {
                  const newHover = { ...ALLNOTHOVER };
                  newHover[`li${index}`] = true;
                  this.setState({
                    isHover: newHover,
                  });
                }}
              >
                {title}
                <hr style={{ width: isHover['li' + index] && `100%` }} />
              </li>
            ))}
          </ul>
          <i class="fas fa-times" />
        </div>
        <img alt="wesop logo" src="images/wesop.png" className="logo" />
        <div className="category">
          {CATEGORIES.map(cate => (
            <li>{cate}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default MainMenu;

const UPPERCATEGORIES = ['제품보기', '읽기', '검색'];
const CATEGORIES = ['스킨', '헤어', '바디 & 핸드', '향수', '기프트 가이드'];
const ALLNOTHOVER = { li0: false, li1: false, li2: false };
