import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuColumn from '../MenuColumn/MenuColumn';
import './SecondMenu.scss';

class SecondMenu extends React.Component {
  //메뉴 컴포넌트 닫고, giftpage로 이동하고, 스크롤 최상단으로 이동하는 메서드
  goToList = category_id => {
    this.props.close();
    this.props.history.push(`/giftpage/${category_id}`);
    window.scrollTo(0, 0);
  };

  render() {
    const {
      categories,
      animation,
      secondRequest,
      thirdRequest,
      handleThirdRequest,
    } = this.props;

    const { goToList } = this;

    return (
      //아래에 계속 나오는 categories[secondRequest]는 secondeRequest가 없는 상태(=FirstMenu에서 뭔가에 mouseOver하지 않아서 handleSecondRequest가 호출되지 않은 상태를 말합니다)
      <MenuColumn
        zIndex={1}
        //secondRequest가 없으면 style의 left속성(위치)가 -34vw가 되도록 (=FirstMenu에 가려서 안 보이도록) 조건부로 props 전달
        left={!categories[secondRequest] && '-34vw'}
        animation={animation}
      >
        {/* secondeRequest가 있을 때만 조건부 렌더링 */}
        {secondRequest && (
          <div className="secondMenu">
            <ul className="category">
              {(categories[secondRequest] || []).map((category, index) => (
                <li
                  key={category.category_id}
                  className="categoryList"
                  style={{
                    //각 리스트마다 0.1초씩 뒤에 애니메이션이 실행되도록 index*0.1 (+0.3초 딜레이는 공통!)
                    animationDelay: `${index * 0.1 + 0.3}s`,
                    borderColor:
                      //li 태그에 mouseOver해서 thirdRequest를 선택하면, 선택한 li에 밑줄이 생기도록 borderColor를 조건부로 전달
                      //hover로 하지 않은 이유는 마우스를 li 밖으로 이동해도 thirdRequest를 갱신하지 않으면 밑줄이 사라지지 않도록 하기 위해서
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
