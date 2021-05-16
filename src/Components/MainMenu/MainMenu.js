import React from 'react';
import FirstMenu from './FirstMenu/FirstMenu';
import './MainMenu.scss';
import SecondMenu from './SecondMenu.js/SecondMenu';
import ThirdMenu from './ThirdMenu/ThirdMenu';

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRequest: '제품보기',
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
        const menus = res['result']
          .filter(obj => !obj['category_name'])
          .map(obj => obj['menu_name']);
        this.setState({ menus: menus });

        const categories = {};
        res['result']
          .filter(obj => obj['category_name'])
          .forEach(obj => {
            categories[obj['menu_name']]
              ? categories[obj['menu_name']].push(obj['category_name'])
              : (categories[obj['menu_name']] = [obj['category_name']]);
          });
        this.setState({ categories: categories });
      });
  }

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
        this.setState({ thirdRequest: category });
      }
    );

    fetch('./data/productMockdata.json')
      .then(res => res.json())
      .then(products => this.setState({ products: products.result }));
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
