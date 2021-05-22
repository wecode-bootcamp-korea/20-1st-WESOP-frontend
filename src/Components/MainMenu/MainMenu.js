import React from 'react';
import { PRODUCTS_BASE_URL } from '../../config';
import FirstMenu from './FirstMenu/FirstMenu';
import SecondMenu from './SecondMenu.js/SecondMenu';
import ThirdMenu from './ThirdMenu/ThirdMenu';
import './MainMenu.scss';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    //여기서 first,second,thirdMenu 다 조건부로 관리해 줘야 해서 state값이 많습니다
    //firstRequest는 이미 nav에서 MainMenu 열 때 받아 오기 때문에 props로 전달 받고, 나머지는 비어있음!
    this.state = {
      firstRequest: this.props.firstRequest,
      secondRequest: '',
      thirdRequest: '',
      menus: [],
      categories: [],
      products: '',
      //mount시 애니메이션 담은 클래스명 (나중에 unmout시 애니메이션 담은 'closeAnimation'으로 바꿔줌)
      animation: 'openAnimation',
    };
  }

  componentDidMount() {
    //mount 애니메이션 실행 끝나면 삭제
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 1000);

    //헬이었던 데이터 분해하는 부분......
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products/meta`
        : `/data/menuMockdata.json`
    )
      .then(res => res.json())
      .then(res => {
        const menus = res['result'].map(obj => ({
          menu_id: obj.menu_id,
          menu_name: obj.menu_name,
        }));
        this.setState({ menus: menus });

        const categories = {};
        res.result.forEach(menu => {
          categories[menu.menu_name] = menu.category_list.map(obj => ({
            category_id: obj.category_id,
            category_name: obj.category_name,
          }));
          this.setState({ categories: categories });
        });
      });

    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  //firstRequest(상단 메뉴에서 고르는 것) 하나 선택하면 second, third request도 초기화해 줘야 second, third Menu가 닫힙니다
  handleFirstRequest = upperMenu => {
    this.setState(
      {
        firstRequest: '',
        secondRequest: '',
        thirdRequest: '',
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
        thirdRequest: '',
      },
      () => {
        this.setState({
          secondRequest: menu,
        });
      }
    );
  };

  handleThirdRequest = category => {
    this.setState(
      {
        thirdRequest: [],
      },
      () => {
        this.setState({ thirdRequest: category.category_name });
        fetch(
          PRODUCTS_BASE_URL
            ? `${PRODUCTS_BASE_URL}/products?category_id=${category.category_id}`
            : `./data/category_id=${category.category_id}.json`
        )
          .then(res => res.json())
          .then(products => this.setState({ products: products.result }));
      }
    );
  };

  close = () => {
    this.setState({
      secondRequest: '',
      thirdRequest: '',
      animation: 'closeAnimation',
    });
    setTimeout(this.props.menuToggle, 500);
  };

  render() {
    const {
      firstRequest,
      secondRequest,
      thirdRequest,
      menus,
      categories,
      products,
      animation,
    } = this.state;

    const {
      handleFirstRequest,
      handleSecondRequest,
      handleThirdRequest,
      close,
    } = this;

    return (
      <div className="mainMenu">
        <div className="background" onClick={close} />
        <FirstMenu
          firstRequest={firstRequest}
          secondRequest={secondRequest}
          handleFirstRequest={handleFirstRequest}
          handleSecondRequest={handleSecondRequest}
          close={close}
          animation={animation}
          menus={menus}
        />
        <SecondMenu
          categories={categories}
          secondRequest={secondRequest}
          thirdRequest={thirdRequest}
          animation={animation}
          handleThirdRequest={handleThirdRequest}
          close={close}
        />
        <ThirdMenu
          products={products}
          thirdRequest={thirdRequest}
          animation={animation}
          close={close}
        />
      </div>
    );
  }
}

export default MainMenu;
