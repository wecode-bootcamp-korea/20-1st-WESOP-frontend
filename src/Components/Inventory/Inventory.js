import React from 'react';
import Carousel from '../Carousel/Carousel';
import ProductCard from '../ProductCard/ProductCard';
import './Inventory.scss';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bgColor, hoverColor, inventoryData, productsData } = this.props;

    return (
      <div className="inventory" style={{ backgroundColor: bgColor }}>
        <div className="categoryDesc">
          <h2>{inventoryData.category_name}</h2>
          <p>{inventoryData.description}</p>
          <span>
            {inventoryData.category_name} (16){' '}
            <i className="fas fa-arrow-right" />
          </span>
        </div>
        <Carousel amount={productsData && productsData.length}>
          {productsData &&
            productsData.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                productSelections={product.product_selections[0]}
                hoverColor={hoverColor}
              />
            ))}
        </Carousel>
      </div>
    );
  }
}

export default Inventory;
