import React from 'react';
import GiftList from '../../Components/GiftList/GiftList';
import MainIllust from '../../Components/MainIllust/MainIllust';

class GiftPage extends React.Component {
  render() {
    return (
      <div className="giftPage">
        <MainIllust img={'/images/illust2.png'}>
          <div className="contents" style={{ top: '30px', left: '250px' }}>
            <h1>어버이날과 스승의 날</h1>
            <p>
              사랑하는 분들에게 깊은 감명을 줄 수 있도록 모든 제품과 엄선된
              기프트에 마음을 담았습니다. 선생님과 부모님을 위한 기프트 키트는
              휴식을 전하는 아이템에서 생기와 활력을 전해주는 제품에 이르기까지
              다채롭게 구성되어 있습니다.
            </p>
          </div>
        </MainIllust>
        <GiftList />
      </div>
    );
  }
}

export default GiftPage;
