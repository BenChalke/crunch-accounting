import React from 'react';

export default class FormInput extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="formInput">
        <label className="formInput__label" htmlFor={this.props.inputName}>{this.props.inputLabel}</label>
        {this.props.children}
        <input className="formInput__input" type={this.props.inputType} id={this.props.inputName} name={this.props.inputName} placeholder={this.props.inputPlaceholder} />
      </div>
    );
  }
}