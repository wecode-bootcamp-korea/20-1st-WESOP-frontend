import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MenuColumn from '../../MenuColumn/MenuColumn';
import './SecondMenu.scss';

class SecondMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToList = category_id => {
    this.props.close();
    this.props.history.push(`/products/category_id/${category_id}`);
  };

  render() {
    const {
      categories,
      animation,
      secondRequest,
      thirdRequest,
      handleThirdRequest,
      close,
    } = this.props;

    const { goToList } = this;

    return (
      <MenuColumn
        zIndex={1}
        left={!categories[secondRequest] && '-34vw'}
        animation={animation}
      >
        {secondRequest && (
          <div className="secondMenu">
            <ul className="category">
              {(categories[secondRequest] || []).map((category, index) => (
                <li
                  key={category.category_id}
                  className="categoryList"
                  style={{
                    animationDelay: `${index * 0.1 + 0.3}s`,
                    borderColor:
                      category.category_name === thirdRequest && '#333',
                  }}
                  onMouseOver={() => {
                    handleThirdRequest(category);
                  }}
                  onClick={() => {
                    goToList(category.category_id);
                  }}
                >
                  {category.category_name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </MenuColumn>
    );
  }
}

export default withRouter(SecondMenu);
