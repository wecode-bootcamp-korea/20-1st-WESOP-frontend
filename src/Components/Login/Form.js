import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: '',
    };
  }
  render() {
    const { name, type, text, errorMsg, handleValue, isCheck } = this.props;
    return (
      <form className="loginForm">
        <div className="formRow">
          <label htmlFor={this.props.name}>
            <input
              className={isCheck ? 'formTextInput' : 'isEmailError'}
              name={name}
              type={type}
              error={errorMsg}
              onChange={handleValue}
            />

            <span className={name ? 'formTextLabel' : 'typing'}>{text}</span>
          </label>
        </div>
        <div className={name && !isCheck ? 'errorMessage' : 'opacity'}>
          {errorMsg}
        </div>
      </form>
    );
  }
}

export default Form;
