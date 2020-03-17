import React from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import Form from './Form';
import SavedModal from './SavedModal';

export default class CrunchAccounting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedInformation: false,
      contactInfo: {},
      addressInfo: {},
      descriptionInfo: {},
      errorMessage: '',
    }

    this.saveInformation = this.saveInformation.bind(this);
    this.closeSavedModal = this.closeSavedModal.bind(this);
  }
  isEmpty(value) {
    if(!value) {
      return true;
    } else {
      return false;
    }
  }
  clearInputs() {
    document.querySelector('#createContact').reset();
  }
  validEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  isNumber(value) {
    if (/^[0-9]*$/.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  saveInformation(e) {
    e.persist()
    e.preventDefault();

    let error = false;

    const contactInfo = {
      firstNameTitle: e.target.elements.firstNameTitle.value.trim() || '',
      firstName: e.target.elements.firstName.value.trim() || '',
      lastName: e.target.elements.lastName.value.trim() || '',
      accountName: e.target.elements.accountName.value.trim() || '',
      companyName: e.target.elements.companyName.value.trim() || '',
      phone: e.target.elements.phone.value.trim() || '',
      fax: e.target.elements.fax.value.trim() || '',
      title: e.target.elements.title.value.trim() || '',
      email: e.target.elements.email.value.trim() || '',
      subscribeEmail: e.target.elements.subscribeEmail.checked
    }
    
    const addressInfo = {
      street: e.target.elements.street.value.trim() || '',
      city: e.target.elements.city.value.trim() || '',
      state: e.target.elements.state.value.trim() || '',
      postcode: e.target.elements.postcode.value.trim() || ''
    }

    const descriptionInfo = {
      description: e.target.elements.description.value.trim() || ''
    }

    //Check for missing description in the description info section
    if(descriptionInfo['description'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter a description' }));
      error = true;
    }

    //Check for missing inputs in the address info section
    if(addressInfo['postcode'] === '' || !this.isNumber(addressInfo['postcode']) || addressInfo['postcode'].length !== 4) {
      this.setState(() => ({ errorMessage: 'Please enter a valid postcode' }));
      error = true;
    }

    if(addressInfo['state'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter a state' }));
      error = true;
    }

    if(addressInfo['city'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter a city' }));
      error = true;
    }

    if(addressInfo['street'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter a street' }));
      error = true;
    }

    //Check for missing inputs in the contact info section
    if(contactInfo['email'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter your email address' }));
      error = true;
    }

    if(!this.validEmail(contactInfo['email'])) {
      this.setState(() => ({ errorMessage: 'Please enter a valid email address' }));
      error = true;
    }

    if(contactInfo['phone'] === '' || !this.isNumber(contactInfo['phone']) || contactInfo['phone'].length < 8) {
      this.setState(() => ({ errorMessage: 'Please enter a valid phone number' }));
      error = true;
    }

    if(contactInfo['accountName'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter your account name' }));
      error = true;
    }

    if(contactInfo['lastName'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter your last name' }));
      error = true;
    }

    if(contactInfo['firstName'] === '') {
      this.setState(() => ({ errorMessage: 'Please enter your first name' }));
      error = true;
    }

    if(!error) {
      this.setState(() => ({
        savedInformation: true,
        contactInfo: contactInfo,
        addressInfo: addressInfo,
        descriptionInfo: descriptionInfo,
      }));
    }

    console.log('this is working');
  }
  closeSavedModal() {
    this.setState(() => ({savedInformation: false}));
  }
  render() {
    return (
      <div>
        <form id="createContact" name="createContact" onSubmit={this.saveInformation}>
          {!this.state.savedInformation && <Header />}
          {!this.state.savedInformation && <Form errorMessage={this.state.errorMessage} clearInputs={this.clearInputs}/>}
          {!this.state.savedInformation && <Footer />}
          {this.state.savedInformation && <SavedModal closeSavedModal={this.closeSavedModal} contactInfo={this.state.contactInfo}  addressInfo={this.state.addressInfo} descriptionInfo={this.state.descriptionInfo} />}
        </form>
      </div>
    );
  }
}