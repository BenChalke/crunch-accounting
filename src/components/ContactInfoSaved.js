import React from 'react';
import FormInput from './FormInput';
import ContactInfo from './ContactInfo';

const ContactInfoSaved = (props) => {
  return (
    <div className="contactSaved">
      <h3 className="contactSaved__title">Contact Information</h3>

      <div className="contactSaved__group">
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>First Name</p>
          </div>
          <div className="contactSaved__value">
            <p>{`${props.contactInfo.firstNameTitle} ${props.contactInfo.firstName}`}</p>
          </div>
        </div>

        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Last Name</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.lastName}</p>
          </div>
        </div>
      </div>

      <div className="contactSaved__group">
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Account Name</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.accountName}</p>
          </div>
        </div>

        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Company Name</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.companyName}</p>
          </div>
        </div>
      </div>

      <div className="contactSaved__group">
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Phone</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.phone}</p>
          </div>
        </div>
        
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Fax</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.fax}</p>
          </div>
        </div>
      </div>

      <div className="contactSaved__group">
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Title</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.title}</p>
          </div>
        </div>
        
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Email</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.email}</p>
          </div>
        </div>
      </div>

      <div className="contactSaved__group">
        <div className="contactSaved__result">
          <div className="contactSaved__label">
            <p>Email Opt Out</p>
          </div>
          <div className="contactSaved__value">
            <p>{props.contactInfo.subscribeEmail && 'Yes'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoSaved;