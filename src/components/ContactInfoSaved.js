import React from 'react';
import FormInput from './FormInput';

export default class ContactInfoSaved extends React.Component {
  render() {
    return (
      <div className="contactSaved">
        <h3 className="contactSaved__title">Contact Information</h3>

        <div className="contactSaved__group">
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>First Name</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>

          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Last Name</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className="contactSaved__group">
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Account Name</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>

          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Company Name</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className="contactSaved__group">
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Phone</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
          
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Fax</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className="contactSaved__group">
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Title</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
          
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Email</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>

        <div className="contactSaved__group">
          <div className="contactSaved__result">
            <div className="contactSaved__label">
              <p>Email Opt Out</p>
            </div>
            <div className="contactSaved__value">
              <p>Value</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}