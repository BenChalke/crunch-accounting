import React from 'react';
import FormInput from './FormInput';

const ContactInfo = (props) => (
  <div className="contact">
    <h3 className="contact__title">Contact Information</h3>

    <div className="contact__group">
      <FormInput inputName='firstName' inputType='text' inputLabel='First Name' inputPlaceholder='John'>
      <select className="contact__select" id="firstNameTitle" name="firstNameTitle">
        <option className="select-disabled" value=''>- None</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      </FormInput>

      <FormInput inputName='lastName' inputType='text' inputLabel='Last Name' inputPlaceholder='Smith' />
    </div>

    <div className="contact__group">
      <FormInput inputName='accountName' inputType='text' inputLabel='Account Name' inputPlaceholder="John's Joinery" />
      <FormInput inputName='companyName' inputType='text' inputLabel='Company Name (optional)' />
    </div>

    <div className="contact__group">
      <FormInput inputName='phone' inputType='text' inputLabel='Phone' inputPlaceholder='02 123 456 78' />
      <FormInput inputName='fax' inputType='text' inputLabel='Fax (optional)' inputPlaceholder="John's Joinery" />
    </div>

    <div className="contact__group">
      <FormInput inputName='title' inputType='text' inputLabel='Title (optional)' inputPlaceholder='Owner' />
      <FormInput inputName='email' inputType='text' inputLabel='Email' inputPlaceholder='sample@email.com' />
    </div>

    <div className="contact__group">
      <label htmlFor="subscribeEmail">Email Opt Out</label>
      <input className='contact__checkbox' type="checkbox" id="subscribeEmail" name="subscribeEmail" value="subscribeEmail" />
    </div>
  </div>
);

export default ContactInfo;
