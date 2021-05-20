import React from 'react';

class BaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, text, type, errorMsg, isCheck, handleValue, value } =
      this.props;

    return (
      <>
        <div className="formRow">
          <div className="formText">
            <label htmlFor={name}>
              <input
                className={isCheck ? 'formTextInput' : 'isError'}
                name={name}
                type={type}
                aria-required="true"
                onChange={handleValue}
              />
              <span className={!value ? 'formTextLabel' : 'typing'}>
                {text}
              </span>
            </label>
          </div>
        </div>
        <div className={value && !isCheck ? 'errorMessage' : 'opacity'}>
          {errorMsg}
        </div>
      </>
    );
  }
}

export default BaseForm;
