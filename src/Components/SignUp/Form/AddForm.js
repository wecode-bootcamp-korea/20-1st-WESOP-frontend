import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, text, type, isCheck, handleValue } = this.props;
    return (
      <>
        <div className="formText">
          <label htmlFor="#">
            <input
              onChange={handleValue}
              aria-required="true"
              type={type}
              className={isCheck ? 'formTextInput' : 'isError'}
              name={name}
            />
            <span className={name ? 'formTextLabel' : 'typing'}>{text}</span>
          </label>
        </div>
      </>
    );
  }
}

export default AddForm;
