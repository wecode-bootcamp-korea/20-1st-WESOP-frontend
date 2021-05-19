import React from 'react';
import { Link } from 'react-router-dom';
import MenuColumn from '../../MenuColumn/MenuColumn';
import './FirstMenu.scss';

class FirstMenu extends React.Component {
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
    const { wheel } = this.state;
    const {
      firstRequest,
      secondRequest,
      handleFirstRequest,
      handleSecondRequest,
      close,
      animation,
    } = this.props;

    let upperMenus = {
      제품보기: this.props.menus,
      읽기: ['더 아테네움', '회사 소개', '철학', 'Taxonomy of Design'],
      검색: ['인기검색어', '클렌저', '페뷸러스', '향수'],
    };

    return (
      <MenuColumn zIndex={2} animation={animation}>
        <div className="firstMenu">
          <div className="menuNav">
            <ul>
              {Object.keys(upperMenus).map((upperMenu, index) => (
                <li
                  key={index}
                  onMouseOver={() => {
                    handleFirstRequest(upperMenu);
                  }}
                >
                  {upperMenu}
                  <hr />
                </li>
              ))}
            </ul>
            <img
              alt="close button"
              src="/images/closeBtn.png"
              onClick={close}
            />
          </div>
          <Link to="/">
            <img
              alt="wesop logo"
              src="/images/wesop.png"
              className="logo"
              style={{ transform: `rotate(${wheel}turn)` }}
              onClick={close}
            />
          </Link>
          <div className="category">
            {firstRequest === '검색' && (
              <>
                <i className="fas fa-arrow-right" />
                <input />
              </>
            )}
            <ul>
              {(upperMenus[firstRequest] || []).map((menu, index) => (
                <Link key={index} to="/products">
                  <li
                    className="categoryList"
                    style={{
                      animationDelay: `${index * 0.1 + 0.2}s`,
                      borderColor: menu === secondRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleSecondRequest(menu);
                    }}
                    onClick={close}
                  >
                    {menu}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </MenuColumn>
    );
  }
}

export default FirstMenu;
