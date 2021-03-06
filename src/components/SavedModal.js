import React from 'react';
import ContactInfoSaved from './ContactInfoSaved';
import AddressInfoSaved from './AddressInfoSaved';
import DescriptionInfoSaved from './DescriptionInfoSaved';

const SavedModal = (props) => (
  <div className="modal">
    <div className="modal__inner">
      <div className="modal__close"  onClick={props.closeSavedModal}>
        <div className="modal__cross">
          <div className="cross-one"></div>
          <div className="cross-two"></div>
        </div>
      </div>
      <p className="modal__title">Saved</p>
      <img className="modal__tick" src="/images/tick.png" alt="Success Tick" />
      <p className="modal__subtitle">The contact details have been saved</p>
      <ContactInfoSaved contactInfo={props.contactInfo} />  
      <AddressInfoSaved addressInfo={props.addressInfo} />
      <DescriptionInfoSaved descriptionInfo={props.descriptionInfo} />
    </div>
  </div>
);

export default SavedModal;