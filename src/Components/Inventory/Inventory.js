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
    ) : null;
  }
}

export default Inventory;
