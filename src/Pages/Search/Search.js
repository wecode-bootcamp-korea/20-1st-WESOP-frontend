import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Inventory from '../../Components/Inventory/Inventory';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { PRODUCTS_BASE_URL } from '../../config';
import './Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: 0 };
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
    console.log(`${PRODUCTS_BASE_URL}/products${this.props.location.search}`);
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products/search/item${this.props.location.search}`
        : `/data/category_id=1.json`
    )
      .then(productData => productData.json())
      .then(productData => {
        this.setState({
          products: productData['result'],
        });
      });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="search">
        <div className="upperBar">
          <Link to="/">
            <img alt="wesop logo" src="/images/wesop.png" className="logo" />
            <h1>
              {products
                ? `${decodeURI(
                    this.props.location.search
                      .split('=')[1]
                      .split('+')
                      .join(' ')
                  )} 검색결과`
                : 'Wesop'}
            </h1>
          </Link>
        </div>
        {products.length ? (
          <>
            <Carousel amount={products && products.length}>
              {products &&
                products.map(product => (
                  <ProductCard
                    key={product[0].product_id}
                    product={product[0]}
                    productSelections={product[0].product_selections[0]}
                  />
                ))}
            </Carousel>
          </>
        ) : (
          <p className="none">검색 결과가 없습니다.</p>
        )}
        <div className="space" />
      </div>
    );
  }
}

export default withRouter(Search);
