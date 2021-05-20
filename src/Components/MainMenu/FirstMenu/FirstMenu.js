import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

  goToList = menu_id => {
    this.props.close();
    this.props.history.push(`/products/${menu_id}`);
    window.scrollTo(0, 0);
  };

  goToLink = link => {
    window.location.href = link ? link : '';
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

    const { goToList, goToLink } = this;

    let upperMenus = {
      제품보기: this.props.menus,
      읽기: [
        {
          menu_id: 0,
          menu_name: '더 아테네움',
          link: 'https://www.aesop.com/kr/r/the-athenaeum/',
        },
        {
          menu_id: 0,
          menu_name: '회사 소개',
          link: 'https://www.aesop.com/kr/r/about/',
        },
        {
          menu_id: 0,
          menu_name: '철학',
          link: 'https://www.aesop.com/kr/r/philosophy-to-products/',
        },
        {
          menu_id: 0,
          menu_name: 'Taxonomy of Design',
          link: 'http://taxonomyofdesign.com/#!/',
        },
      ],
      검색: [
        {
          menu_id: 0,
          menu_name: '인기검색어',
        },
        { menu_id: 0, menu_name: '클렌저', link: '/search?search=클렌저' },
        {
          menu_id: 0,
          menu_name: '트리트먼트',
          link: '/search?search=트리트먼트',
        },
        { menu_id: 0, menu_name: '마스크', link: '/search?search=마스크' },
      ],
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
                <form action="/search" method="get">
                  <input name="search" />
                </form>
              </>
            )}
            <ul>
              {(upperMenus[firstRequest] || []).map((menu, index) => (
                <li
                  key={menu.menu_id}
                  className="categoryList"
                  style={{
                    animationDelay: `${index * 0.1 + 0.2}s`,
                    borderColor: menu.menu_name === secondRequest && '#333',
                  }}
                  onMouseOver={() => {
                    handleSecondRequest(menu.menu_name);
                  }}
                  onClick={() => {
                    menu.menu_id ? goToList(menu.menu_id) : goToLink(menu.link);
                  }}
                >
                  {menu.menu_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MenuColumn>
    );
  }
}

export default withRouter(FirstMenu);
