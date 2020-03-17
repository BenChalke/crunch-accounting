import React from 'react';

const FormInput = (props) => (
  <div className="formInput">
    <label className="formInput__label" htmlFor={props.inputName}>{props.inputLabel}</label>
    {props.children}
    <input className='formInput__input' type={props.inputType} id={props.inputName} name={props.inputName} placeholder={props.inputPlaceholder} />
  </div>
);

export default FormInput;