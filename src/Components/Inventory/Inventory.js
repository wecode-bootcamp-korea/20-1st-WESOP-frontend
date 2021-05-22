import React from 'react';
import Carousel from '../Carousel/Carousel';
import ProductCard from '../ProductCard/ProductCard';
import './Inventory.scss';

class Inventory extends React.Component {
  render() {
    //bgColor, hoverColor: 같은 컴포넌트라도 props에서 배경 색깔, hover 색깔 값을 받아서 다양하게 활용할 수 있도록 만들었습니다
    const { bgColor, hoverColor, inventoryData, productsData } = this.props;

    //inventoryData와 productsData 둘 다 있을 때 조건부 렌더링
    return inventoryData && productsData ? (
      <div className="inventory" style={{ backgroundColor: bgColor }}>
        <div className="categoryDesc">
          <h2>{inventoryData.category_name}</h2>
          <p>{inventoryData.category_description}</p>
          <span>
            {inventoryData.category_name} ({productsData.length}){' '}
            <i className="fas fa-arrow-right" />
          </span>
        </div>
        {/* Carousel 컴포넌트와 거기 들어갈 children
        children으로 만들어 products 데이터를 Inventory => Carousel => ProductCard가 아니라 Inventory => ProductCard에서 바로 줄 수 있도록 했습니다  */}
        <Carousel amount={productsData && productsData.length}>
          {productsData &&
            productsData.map(product => (
              <ProductCard
                key={product.product_id}
                product={product}
                productSelections={product.product_selections[0]}
                hoverColor={hoverColor}
              />
            ))}
        </Carousel>
      </div>
    ) : null;
  }
}

export default Inventory;
