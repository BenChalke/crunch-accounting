import React from 'react';
import FormHeader from './FormHeader';
import ContactInfo from './ContactInfo';
import AddressInfo from './AddressInfo';
import DescriptionInfo from './DescriptionInfo';

export default class Form extends React.Component {
  render() {
    return (
      <div className='form'>
        <FormHeader saveInformation={this.props.saveInformation} />
        <div className='form__inner'>
          <ContactInfo />
          <AddressInfo />
          <DescriptionInfo />
        </div>
      </div>
    );
  }
}