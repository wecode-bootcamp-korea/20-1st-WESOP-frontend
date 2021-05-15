import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onChange, type, check, name, text } = this.props;
    console.log(this.props.onChange);
    return (
      <div className="formRow">
        <div className="formText">
          <label htmlFor="#">
            <input
              onChange={onChange}
              aria-required="true"
              type={type}
              className={check ? 'formTextInput' : 'isEmailError'}
              name={name}
            />
            <span className={name ? 'typing' : 'formTextLabel'}>{text}</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Form;
