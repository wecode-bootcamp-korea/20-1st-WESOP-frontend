import React from 'react';

import HowToUse from '../../Components/HowToUse/HowToUse';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="productDetail">
        <HowToUse />
      </div>
    );
  }
}

export default ProductDetail;
