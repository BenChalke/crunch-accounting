import React from 'react';
import FormInput from './FormInput';

export default class AddressInfoSaved extends React.Component {
  render() {
    return (
      <div className="addressSaved">
        <h3 className="addressSaved__title">Address Information</h3>

        <div className="addressSaved__group">
          <div className="addressSaved__result">
            <div className="addressSaved__label">
              <p>Street No. & Street</p>
            </div>
            <div className="addressSaved__value">
              <p>Value</p>
            </div>
          </div>
          
          <div className="addressSaved__result">
            <div className="addressSaved__label">
              <p>City</p>
            </div>
            <div className="addressSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className="addressSaved__group">
          <div className="addressSaved__result">
            <div className="addressSaved__label">
              <p>State</p>
            </div>
            <div className="addressSaved__value">
              <p>Value</p>
            </div>
          </div>
          
          <div className="addressSaved__result">
            <div className="addressSaved__label">
              <p>Postcode</p>
            </div>
            <div className="addressSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}