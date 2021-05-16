import React from 'react';
import { Link } from 'react-router-dom';
import MenuColumn from '../../MenuColumn/MenuColumn';
import './SecondMenu.scss';

class SecondMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      categories,
      closeAnimation,
      secondRequest,
      thirdRequest,
      handleThirdRequest,
      close,
    } = this.props;

    return (
      <MenuColumn
        zIndex={1}
        left={!secondRequest && '-34vw'}
        closeAnimation={closeAnimation}
      >
        {secondRequest && (
          <div className="secondMenu">
            <ul className="category">
              {(categories[secondRequest] || []).map((category, index) => (
                <Link to="/products">
                  <li
                    className="categoryList"
                    key={index}
                    style={{
                      animationDelay: `${index * 0.1 + 0.2}s`,
                      borderColor: category === thirdRequest && '#333',
                    }}
                    onMouseOver={() => {
                      handleThirdRequest(category);
                    }}
                    onClick={close}
                  >
                    {category}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </MenuColumn>
    );
  }
}

export default SecondMenu;
