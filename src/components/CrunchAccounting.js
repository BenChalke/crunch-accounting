import React from 'react';
import Header from './main/Header';
import Footer from './main/Footer';
import Form from './Form';
import SavedModal from './SavedModal';

export default class CrunchAccounting extends React.Component {
  constructor(props) {
    super(props);

    this.saveInformation = this.saveInformation.bind(this);
    this.closeSavedModal = this.closeSavedModal.bind(this);
  }
  state = {
    savedInformation: false,
  }
  saveInformation() {
    console.log('ya done it');

    this.setState(() => ({savedInformation: true}));
  }
  closeSavedModal() {
    this.setState(() => ({savedInformation: false}));
  }
  render() {
    return (
      <div>
        {!this.state.savedInformation && <Header />}
        {!this.state.savedInformation && <Form saveInformation={this.saveInformation} />}
        {!this.state.savedInformation && <Footer />}
        {this.state.savedInformation && <SavedModal closeSavedModal={this.closeSavedModal} />}
      </div>
    );
  }
}