import React from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../../Components/Inventory/Inventory';
import './Products.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventoryData: 0, productsData: 0 };
  }

  componentDidMount() {
    fetch('/data/allCategory.json')
      .then(res => res.json())
      .then(categoryAndProducts =>
        this.setState({
          inventoryData: categoryAndProducts['result'].map(
            category => category[0]
          ),
          productsData: categoryAndProducts['result'].map(products =>
            products.slice(1)
          ),
        })
      );
  }

  render() {
    const { inventoryData, productsData } = this.state;
    console.log(inventoryData);
    console.log(productsData);
    return (
      <div className="products">
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="images/wesop.png" className="logo" />
            <h1>스킨</h1>
          </Link>
        </div>
        <Inventory
          hoverColor="#f0efe1"
          inventoryData={inventoryData && inventoryData[0]}
          productsData={productsData && productsData[0]}
        />
        <Inventory
          bgColor="#EBEBDE"
          hoverColor="#E5E5D8"
          inventoryData={inventoryData && inventoryData[1]}
          productsData={productsData && productsData[1]}
        />
        <Inventory
          hoverColor="#f0efe1"
          inventoryData={inventoryData && inventoryData[2]}
          productsData={productsData && productsData[2]}
        />
        <Inventory
          bgColor="#EBEBDE"
          hoverColor="#E5E5D8"
          inventoryData={inventoryData && inventoryData[3]}
          productsData={productsData && productsData[3]}
        />
        <Inventory
          hoverColor="#f0efe1"
          inventoryData={inventoryData && inventoryData[4]}
          productsData={productsData && productsData[4]}
        />
        <Inventory
          bgColor="#EBEBDE"
          hoverColor="#E5E5D8"
          inventoryData={inventoryData && inventoryData[5]}
          productsData={productsData && productsData[5]}
        />
      </div>
    );
  }
}

export default Products;
