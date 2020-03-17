import React from 'react';

const FormHeader = (props) => (
  <div className="form__header">
    <h1 className="form__title">Create Contact</h1>

    <div className="form__action-buttons">
      <button type="button" className="button button--white" onClick={props.clearInputs}>Cancel</button>
      <button type="submit" className="button button--orange">Save</button>
    </div>
  </div>
);

export default FormHeader;