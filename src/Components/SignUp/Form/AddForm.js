import React from 'react';

class AddForm extends React.Component {
  render() {
    const { name, text, type, isCheck, handleValue, value } = this.props;

    return (
      <div className="formText">
        <label htmlFor={name}>
          <input
            onChange={handleValue}
            aria-required="true"
            type={type}
            className={isCheck ? 'formTextInput' : 'isError'}
            name={name}
          />
          <span className={!value ? 'formTextLabel' : 'typing'}>{text}</span>
        </label>
      </div>
    );
  }
}

export default AddForm;
