import React from 'react';
import FirstMenu from './FirstMenu/FirstMenu';
import './MainMenu.scss';
import SecondMenu from './SecondMenu.js/SecondMenu';
import ThirdMenu from './ThirdMenu/ThirdMenu';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRequest: this.props.firstRequest,
      secondRequest: '',
      thirdRequest: '',
      menus: [],
      categories: [],
      products: '',
      animation: 'openAnimation',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: '' });
    }, 1000);

    fetch('/data/menuMockdata.json')
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
  }

  handleFirstRequest = upperMenu => {
    this.setState(
      {
        firstRequest: '',
        secondRequest: '',
        thirdRequest: '',
        products: '',
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
        products: '',
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
        products: '',
      },
      () => {
        this.setState({ thirdRequest: category.category_name });
      }
    );

    fetch(`./data/category_id=${category.category_id}.json`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(products => this.setState({ products: products.result }));
    console.log(this.state.products);
    //나중에 이부분 동적으로 수정해줘야 세 번째 칸 데이터를 제대로 받을 수 있음
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
        />
      </div>
    );
  }
}

export default MainMenu;
