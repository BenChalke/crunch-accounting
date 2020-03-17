import React from 'react';
import FormHeader from './FormHeader';
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import DescriptionInfo from './DescriptionInfo';

const Form = (props) => (
  <div className='form'>
    <FormHeader clearInputs={props.clearInputs}/>
    <div className='form__inner'>
      {props.errorMessage && <p className="error">{props.errorMessage}</p>}
      <ContactInfo />
      <AddressInfo />
      <DescriptionInfo />
    </div>
  </div>
);

export default Form;