import React from 'react';

const DescriptionInfoSaved = (props) => (
  <div className="descriptionSaved">
    <h3 className="descriptionSaved__title">Description Information</h3>

    <div className="descriptionSaved__group">          
      <div className="descriptionSaved__result">
        <div className="descriptionSaved__label">
          <p>Description</p>
        </div>
        <div className="descriptionSaved__value">
          <p>{props.descriptionInfo.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default DescriptionInfoSaved;