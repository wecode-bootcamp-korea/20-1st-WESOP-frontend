import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Inventory from '../../Components/Inventory/Inventory';
import { PRODUCTS_BASE_URL } from '../../config';
import './Products.scss';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inventoryData: 0, productsData: 0 };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(pervProps) {
    if (pervProps.match.params.mid !== this.props.match.params.mid) {
      this.getData();
    }
  }

  getData = () => {
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products?menu_id=${this.props.match.params.mid}`
        : `/data/menu_id=${this.props.match.params.mid}.json`
    )
      .then(res => res.json())
      .then(menuProducts => {
        const categories = {};
        menuProducts['result'].forEach(category => {
          categories[category[0].category_id] = categories[
            category[0].category_id
          ] || {
            category_id: category[0].category_id,
            category_name: category[0].category_name,
            category_description_title: category[0].category_description_title,
            category_description: category[0].category_description,
            menu_id: category[0].menu_id,
            menu_name: category[0].menu_name,
          };
        });

        const inventoryData = Object.values(categories);

        const productsData = {};
        menuProducts['result'].forEach(product => {
          productsData[product[0].category_id] = productsData[
            product[0].category_id
          ]
            ? [
                ...productsData[product[0].category_id],
                {
                  product_id: product[0].product_id,
                  product_name: product[0].product_name,
                  product_selections: product[0].product_selections,
                },
              ]
            : [
                {
                  product_id: product[0].product_id,
                  product_name: product[0].product_name,
                  product_selections: product[0].product_selections,
                },
              ];
        });

        this.setState({
          inventoryData: inventoryData,
          productsData: productsData,
        });
      })
      .catch(() => {
        this.setState({ inventoryData: 0, productsData: 0 });
      });
  };

  render() {
    const { inventoryData, productsData } = this.state;

    console.log(Object.values(productsData));

    return (
      <div className="products">
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="/images/wesop.png" className="logo" />
            <h1>{productsData ? inventoryData[0].menu_name : 'Wesop'}</h1>
          </Link>
        </div>
        {productsData ? (
          <>
            <FilterBar />
            <Inventory
              hoverColor="#f0efe1"
              inventoryData={inventoryData[0]}
              productsData={productsData && productsData[1]}
            />
            <Inventory
              bgColor="#EBEBDE"
              hoverColor="#E5E5D8"
              inventoryData={inventoryData[1]}
              productsData={productsData && productsData[2]}
            />
            <Inventory
              hoverColor="#f0efe1"
              inventoryData={inventoryData[2]}
              productsData={productsData && productsData[3]}
            />
            <Inventory
              bgColor="#EBEBDE"
              hoverColor="#E5E5D8"
              inventoryData={inventoryData[3]}
              productsData={productsData && productsData[4]}
            />
            <Inventory
              hoverColor="#f0efe1"
              inventoryData={inventoryData[4]}
              productsData={productsData && productsData[5]}
            />
            <Inventory
              bgColor="#EBEBDE"
              hoverColor="#E5E5D8"
              inventoryData={inventoryData[5]}
              productsData={productsData && productsData[6]}
            />
            <Inventory
              hoverColor="#f0efe1"
              inventoryData={inventoryData[6]}
              productsData={productsData && productsData[7]}
            />
            <Inventory
              bgColor="#EBEBDE"
              hoverColor="#E5E5D8"
              inventoryData={inventoryData[7]}
              productsData={productsData && productsData[8]}
            />
            <Inventory
              hoverColor="#f0efe1"
              inventoryData={inventoryData[8]}
              productsData={productsData && productsData[9]}
            />
          </>
        ) : (
          <p className="preparing">상품 준비중입니다.</p>
        )}
      </div>
    );
  }
}

export default withRouter(Products);
