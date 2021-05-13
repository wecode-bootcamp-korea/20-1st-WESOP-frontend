import React from 'react';
import Inventory from '../../Components/Inventory/Inventory';
import ProductCard from '../../Components/ProductCard/ProductCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventoryData1: [], inventoryData2: [] };
  }

  componentDidMount() {
    fetch('/data/mockdata.json')
      .then(res => res.json())
      .then(inventoryData => this.setState({ inventoryData1: inventoryData }));
    fetch('/data/mockdata2.json')
      .then(res => res.json())
      .then(inventoryData => this.setState({ inventoryData2: inventoryData }));
  }

  render() {
    const { inventoryData1, inventoryData2 } = this.state;
    return (
      <>
        <Inventory>
          {inventoryData1.map((product, index) => (
            <ProductCard key={index} product={product} hoverColor={'#f0efe1'} />
          ))}
        </Inventory>
        <Inventory bgColor={'#EBEBDE'}>
          {inventoryData2.map((product, index) => (
            <ProductCard key={index} product={product} hoverColor={'#E5E5D8'} />
          ))}
        </Inventory>
      </>
    );
  }
}

export default Main;
