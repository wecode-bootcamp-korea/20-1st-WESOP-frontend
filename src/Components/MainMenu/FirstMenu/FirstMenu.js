import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MenuColumn from '../MenuColumn/MenuColumn';
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

  //MainIllust와 동일
  handleWheel = e => {
    this.setState({ wheel: this.state.wheel + e.deltaY * 0.001 });
  };

  goToList = menu_id => {
    //메뉴 클릭 시 동적라우팅+열려있던 메뉴 닫혀야 함!
    this.props.close();
    //menu_id에 맞는 페이지 나오도록 동적 라우팅
    this.props.history.push(`/products/${menu_id}`);
    //스크롤 젤 위로 이동
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
        //menu_id가 다 0인 이유는 해당 메뉴에 대해 보여줄 서브 카테고리(SecondMenu)가 없어서.. 조건부로 goToList 대신 goToLink가 되도록 임의로 설정했습니다
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
        {
          menu_id: 0,
          menu_name: '클렌저',
          //클릭 시 각 키워드에 대한 검색 결과 나오도록
          //products/search/item?search_name까지는 미화님과 맞춘 키워드고, 그 페이지에서 뒤에 붙은 쿼리스트링을 추출해 해당 데이터를 fetch합니다
          link: '/products/search/item?search_name=클렌저',
        },
        {
          menu_id: 0,
          menu_name: '트리트먼트',
          link: '/products/search/item?search_name=트리트먼트',
        },
        {
          menu_id: 0,
          menu_name: '마스크',
          link: '/products/search/item?search_name=마스크',
        },
      ],
    };

    return (
      //MenuColumn은 메뉴 프레임 같은 컴포넌트고, 그 안에 children으로 들어갈 내용을 넣었습니다
      //zIndex, animaion은 MenuColumn에서 받아서 적용할 스타일 속성
      <MenuColumn zIndex={2} animation={animation}>
        <div className="firstMenu">
          <div className="menuNav">
            <ul>
              {/* upperMenus에서 nav에 위치한 메뉴인 키값만 추출해서 map */}
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
            {/* nav 메뉴가 검색일 때만 input창이 떠야 해서 조건부 렌더링을 걸었습니다 */}
            {firstRequest === '검색' && (
              <>
                <i className="fas fa-arrow-right" />
                <form action="/products/search/item" method="get">
                  <input name="search_name" />
                </form>
              </>
            )}
            <ul>
              {/* upperMenu(nav에서 선택한 메뉴)가 무엇인지(=firstRequest)에 따라 보여지는 그 아래 메뉴 (설명을 잘 못하겠는데.. 모르시겠으면 dm주세요ㅜ.ㅠ) */}
              {(upperMenus[firstRequest] || []).map((menu, index) => (
                <li
                  key={menu.menu_id}
                  className="categoryList"
                  style={{
                    //각각 list 순서에 따라 하나씩 순차적으로 나타나도록 animation-delay 값을 부여했습니다
                    animationDelay: `${index * 0.1 + 0.2}s`,
                    borderColor: menu.menu_name === secondRequest && '#333',
                  }}
                  //마우스만 올려도 두 번째 메뉴 펼쳐지도록 이벤트
                  onMouseOver={() => {
                    handleSecondRequest(menu.menu_name);
                  }}
                  //클릭하면 이동하도록 동적라우팅! (goToList는 동적라우팅하는 메서드고, goToLink는 그냥 외부 aesop 페이지로 이동하는 메서드)
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
