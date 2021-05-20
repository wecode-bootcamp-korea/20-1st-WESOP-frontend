import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { PRODUCTS_BASE_URL } from '../../config';
import Carousel from '../../Components/Carousel/Carousel';
import FilterBar from '../../Components/FilterBar/FilterBar';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Filter.scss';

class Filter extends React.Component {
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
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products?${this.props.location.search}`
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
                    this.props.location.search.split('=')[1]
                  )} 검색결과`
                : 'Wesop'}
            </h1>
          </Link>
        </div>
        <FilterBar />
        {products ? (
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
            <div className="space" />
          </>
        ) : (
          <p className="none">검색 결과가 없습니다.</p>
        )}
      </div>
    );
  }
}

export default withRouter(Filter);
