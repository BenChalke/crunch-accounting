import React from 'react';

const AddressInfoSaved = (props) => (
  <div className="addressSaved">
    <h3 className="addressSaved__title">Address Information</h3>

    <div className="addressSaved__group">
      <div className="addressSaved__result">
        <div className="addressSaved__label">
          <p>Street No. & Street</p>
        </div>
        <div className="addressSaved__value">
          <p>{props.addressInfo.street}</p>
        </div>
      </div>
      
      <div className="addressSaved__result">
        <div className="addressSaved__label">
          <p>City</p>
        </div>
        <div className="addressSaved__value">
          <p>{props.addressInfo.city}</p>
        </div>
      </div>
    </div>

    <div className="addressSaved__group">
      <div className="addressSaved__result">
        <div className="addressSaved__label">
          <p>State</p>
        </div>
        <div className="addressSaved__value">
          <p>{props.addressInfo.state}</p>
        </div>
      </div>
      
      <div className="addressSaved__result">
        <div className="addressSaved__label">
          <p>Postcode</p>
        </div>
        <div className="addressSaved__value">
          <p>{props.addressInfo.postcode}</p>
        </div>
      </div>
    </div>

  </div>
);

export default AddressInfoSaved;