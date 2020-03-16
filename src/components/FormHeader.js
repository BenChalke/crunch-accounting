import React from 'react';

export default class FormHeader extends React.Component {
  render() {
    return (
      <div className="form__header">
        <h1 className="form__title">Create Contact</h1>

        <div className="form__action-buttons">
          <button className="button button--white">Cancel</button>
          <button className="button button--orange" onClick={this.props.saveInformation}>Save</button>
        </div>
      </div>
    );
  }
}