import React from 'react';
import FormInput from './FormInput';

const AddressInfo = () => (
  <div className="address">
    <h3 className="address__title">Address Information</h3>

    <div className="address__group">
      <FormInput inputName='street' inputType='text' inputLabel='Street No. & Street' inputPlaceholder="1, Elizabeth Street" />
      <FormInput inputName='city' inputType='text' inputLabel='City' inputPlaceholder="Sydney" />
    </div>

    <div className="address__group">
      <div className="formInput">
        <label className="formInput__label" htmlFor='state'>State</label>
        <select className="formInput__input" id="state" name="state">
          <option value="New South Wales">New South Wales</option>
          <option value="Queensland">Queensland</option>
          <option value="South Australia">South Australia</option>
          <option value="Western Australia">Western Australia</option>
          <option value="Northern Territory">Northern Territory</option>
        </select>
      </div>
      <FormInput inputName='postcode' inputType='text' inputLabel='Postcode' inputPlaceholder="2000" />
    </div>

  </div>
);

export default AddressInfo;