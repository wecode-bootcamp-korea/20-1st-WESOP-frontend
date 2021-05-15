import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onChange, type, check, name, text, isError, errorMsg } = this.props;

    console.log([type]);

    return (
      <div className="formRow">
        <div className="formText">
          <label htmlFor="#">
            <input
              onChange={onChange}
              aria-required="true"
              type={type}
              className={check ? 'formTextInput' : isError}
              name={name}
            />
            <span className={this.props.password ? 'typing' : 'formTextLabel'}>
              {text}
            </span>
          </label>
        </div>
        <div className={name && !check ? 'errorMessage' : 'opacity'}>
          {errorMsg}
        </div>
      </div>
    );
  }
}

export default Form;
