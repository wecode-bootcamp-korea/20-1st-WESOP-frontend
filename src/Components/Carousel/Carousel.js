import React from 'react';
import './Carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    //슬라이드의 위치를 옮기기 위한 변수
    this.state = { position: 0 };
  }
  render() {
    const { position } = this.state;

    //amount는 슬라이드 안에 있는 상품의 개수, children은 슬라이드 안 내용물
    const { amount, children } = this.props;

    return (
      <div className="carousel">
        <div className="list" style={{ right: `${position}px` }}>
          {children}
        </div>
        <button
          className="prev"
          //위치가 0이면 (아직 next 버튼 한 번도 누르지 않은 시작상태) prev 버튼은 숨기기
          style={{ left: position <= 0 && '-80px' }}
          //버튼을 클릭할 때마다 슬라이드 내용물의 위치가 -340(px)씩(340: PostCard 한 개의 width) 이동 (단, 위치가 0보다 클 때만)
          onClick={() => {
            position > 0 && this.setState({ position: position - 340 });
          }}
        >
          <i className="fas fa-chevron-left" />
        </button>
        <button
          className="next"
          //위치가 상품의 마지막에 다다르면 next 버튼 숨기기 (PostCard width가 340이고, 한 번에 총 4개의 상품이 보여지기 때문에 (amount - 4)*340
          style={{
            right: position >= (amount - 4) * 340 && '-80px',
          }}
          //버튼 클릭 시마다 +340 (단, 상품이 끝나는 위치 전까지만)
          onClick={() => {
            position < (amount - 3) * 340 &&
              this.setState({ position: position + 340 });
          }}
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default Carousel;
