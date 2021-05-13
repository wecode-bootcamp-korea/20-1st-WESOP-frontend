import React from 'react';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheel: 0,
      firstRequest: '제품보기',
      secondRequest: '',
      menus: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch('/data/menuMockdata.json')
      .then(res => res.json())
      .then(res => {
        const menus = res['MENU & CATEGORY INFO']
          .filter(obj => !obj['category_name'])
          .map(obj => obj['menu_name']);
        this.setState({ menus: menus });

        const categories = {};
        res['MENU & CATEGORY INFO']
          .filter(obj => obj['category_name'])
          .forEach(obj => {
            categories[obj['menu_name']]
              ? categories[obj['menu_name']].push(obj['category_name'])
              : (categories[obj['menu_name']] = [obj['category_name']]);
          });
        this.setState({ categories: categories });
      });
    window.addEventListener('wheel', this.handleWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  }

  handleWheel = e => {
    this.setState({ wheel: this.state.wheel + e.deltaY * 0.001 });
  };

  handleFirstRequest = upperMenu => {
    this.setState(
      {
        firstRequest: '',
        secondRequest: '',
      },
      () => {
        this.setState({ firstRequest: upperMenu });
      }
    );
  };

  handleSecondRequest = menu => {
    this.setState(
      {
        secondRequest: [],
      },
      () => {
        this.setState({
          secondRequest: menu,
        });
      }
    );
  };

  render() {
    const { wheel, firstRequest, secondRequest, menus, categories } =
      this.state;
    const { handleFirstRequest, handleSecondRequest } = this;

    let upperMenus = {
      제품보기: this.state.menus,
      읽기: ['더 아테네움', '회사 소개', '철학', 'Taxonomy of Design'],
      검색: ['인기검색어', '클렌저', '페뷸러스', '향수'],
    };

    return (
      <div className="MainMenu">
        <div className="menuNav">
          <ul>
            {Object.keys(upperMenus).map(upperMenu => (
              <li
                onMouseOver={() => {
                  handleFirstRequest(upperMenu);
                }}
              >
                {upperMenu}
                <hr style={{ width: firstRequest === upperMenu && `100%` }} />
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
                {(upperMenus[firstRequest] || []).map((menu, index) => (
                  <li
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      borderColor: menu === secondRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleSecondRequest(menu);
                    }}
                  >
                    {menu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {secondRequest && (
            <div className="secondMenu">
              <ul className="category">
                {(categories[secondRequest] || []).map((category, index) => (
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
