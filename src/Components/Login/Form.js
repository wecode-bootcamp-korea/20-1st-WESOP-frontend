import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, type, text, errorMsg, handleValue, isCheck, value } =
      this.props;

    return (
      <form className="loginForm">
        <div className="formRow">
          <label htmlFor={this.props.name}>
            <input
              className={isCheck ? 'formTextInput' : 'isError'}
              name={name}
              type={type}
              error={errorMsg}
              onChange={handleValue}
            />

            <span className={value ? 'typing' : 'formTextLabel'}>{text}</span>
          </label>
        </div>
        <div className={value && !isCheck ? 'errorMessage' : 'opacity'}>
          {errorMsg}
        </div>
      </form>
    );
  }
}

export default Form;
