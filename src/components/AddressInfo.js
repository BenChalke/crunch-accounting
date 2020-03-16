import React from 'react';
import FormInput from './FormInput';

export default class AddressInfo extends React.Component {
  render() {
    return (
      <div className="address">
        <h3 className="address__title">Address Information</h3>

        <div className="address__group">
          <FormInput inputName='street' inputType='text' inputLabel='Street No. & Street' inputPlaceholder="1, Elizabeth Street" />
          <FormInput inputName='city' inputType='text' inputLabel='City' inputPlaceholder="Sydney" />
        </div>

        <div className="address__group">
          <FormInput inputName='state' inputType='text' inputLabel='State' inputPlaceholder='New South Wales' />
          <FormInput inputName='postcode' inputType='text' inputLabel='Postcode' inputPlaceholder="2000" />
        </div>

      </div>
    );
  }
}