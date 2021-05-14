import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="formRow">
        <div className="formText">
          <label htmlFor="#">
            <input
              onChange={this.handleValueEmail}
              aria-required="true"
              type="email"
              className={this.props.isEmail ? 'formTextInput' : 'isEmailError'}
              name="email"
            />
            <span className={this.props.email ? 'typing' : 'formTextLabel'}>
              이메일 주소
            </span>
          </label>
        </div>
      </div>
    );
  }
}

export default Form;
