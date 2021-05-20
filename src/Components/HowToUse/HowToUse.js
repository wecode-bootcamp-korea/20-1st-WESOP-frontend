import React from 'react';
import { withRouter } from 'react-router-dom';
import { PRODUCTS_BASE_URL } from '../../config';
import '../HowToUse/HowToUse.scss';

class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBox: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pid !== this.props.match.params.pid) {
      this.getData();
    }
  }

  getData = () => {
    fetch(
      PRODUCTS_BASE_URL
        ? `${PRODUCTS_BASE_URL}/products/${this.props.match.params.pid}`
        : `/data/product:${this.props.match.params.pid}.json`
    )
      .then(res => res.json())
      .then(jsonData =>
        this.setState({
          dataBox: jsonData.result,
        })
      );
  };

  render() {
    const { dataBox } = this.state;

    const infoMap =
      dataBox &&
      dataBox.product_features.map((feature, index) => (
        <li key={index}>
          <dt>{feature.feature_category_name}</dt>
          <dd>{feature.features.join(', ')}</dd>
        </li>
      ));
    return (
      <div className="howToUse">
        <section className="aboutProduct">
          <div className="leftProductImage">
            <figure>
              <img
                alt="leftProductImage"
                src={dataBox.product_content_image_url}
              />
            </figure>
          </div>
          <div className="rightPart">
            <div className="rightProduct">
              <header>
                <span>사용법</span>
                <h1>{dataBox.product_content}</h1>
              </header>
              <div className="productInfo">
                <dl>{infoMap}</dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(HowToUse);
