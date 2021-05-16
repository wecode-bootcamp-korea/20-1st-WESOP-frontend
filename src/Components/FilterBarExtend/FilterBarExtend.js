import React from 'react';
import './FilterBarExtend.scss';

class FilterBarExtend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="filterBarNavExpend">
        <div className="filterSkinType">
          <header className="themeSkinType">피부타입</header>
          <ul className="listSkinType">
            <li>
              <input type="checkbox" value="모든타입" />
              모든 피부타입
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              중성 피부
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              복합성 피부
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              민감성 피부
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              건성 피부
            </li>
          </ul>
        </div>
        <div className="filterUse">
          <header className="themeUse">사용감</header>
          <ul className="listUse">
            <li>
              <input type="checkbox" value="모든타입" />
              산뜻한
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              수분공급
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              시원한
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              가벼운
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              진정된
            </li>
          </ul>
        </div>
        <div className="filterSmell">
          <header className="themeSmell">향</header>
          <ul className="listSmell">
            <li>
              <input type="checkbox" value="모든타입" />
              허브
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              시트러스
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              우드
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              코코넛
            </li>
            <li>
              <input type="checkbox" value="모든타입" />
              플로럴
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FilterBarExtend;
