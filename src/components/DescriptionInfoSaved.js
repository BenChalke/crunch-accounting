import React from 'react';
// import FormInput from './FormInput';

export default class DescriptionInfoSaved extends React.Component {
  render() {
    return (
      <div className="descriptionSaved">
        <h3 className="descriptionSaved__title">Description Information</h3>

        <div className="descriptionSaved__group">          
          <div className="descriptionSaved__result">
            <div className="descriptionSaved__label">
              <p>Description</p>
            </div>
            <div className="descriptionSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}