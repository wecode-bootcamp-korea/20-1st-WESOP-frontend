import React from 'react';

class Gift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }
  getInfo = () => {
    fetch('/data/mockdata.json', {
      method: 'GET',
    })
      .then(products => products.json())
      .then(products =>
        this.setState({
          product: products,
        })
      );
  };
  componentDidMount() {
    this.getInfo();
  }

  render() {
    const { product } = this.state;
    return <div></div>;
  }
}

export default Gift;
