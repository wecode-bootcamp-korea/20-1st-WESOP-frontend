import React from 'react';
import '../HowToUse/HowToUse.scss';

class HowToUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="howToUse">
        <section className="aboutProduct">
          <div className="leftProductImage">
            <figure>
              <img src="." alt="" />
            </figure>
          </div>
        </section>
      </div>
    );
  }
}

export default HowToUse;
