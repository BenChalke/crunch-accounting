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
      <p className="modal__subtitle">The contact details have been saved</p>
      <ContactInfoSaved />  
      <AddressInfoSaved />
      <DescriptionInfoSaved />
    </div>
  </div>
);

export default SavedModal;