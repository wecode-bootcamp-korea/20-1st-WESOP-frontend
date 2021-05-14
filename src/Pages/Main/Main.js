import React from 'react';
import Inventory from '../../Components/Inventory/Inventory';
import ProductCard from '../../Components/ProductCard/ProductCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventoryData: [] };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(res => res.json())
      .then(inventoryData =>
        this.setState({ inventoryData: inventoryData['result'] })
      );
  }

  render() {
    const { inventoryData } = this.state;
    return (
      <>
        <Inventory>
          {inventoryData.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              productSelections={product.product_selections[0]}
              hoverColor={'#f0efe1'}
            />
          ))}
        </Inventory>
        <Inventory bgColor={'#EBEBDE'}>
          {inventoryData.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              productSelections={product.product_selections[0]}
              hoverColor={'#E5E5D8'}
            />
          ))}
        </Inventory>
      </>
    );
  }
}

export default Main;
