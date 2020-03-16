import React from 'react';
// import FormInput from './FormInput';

export default class DescriptionInfo extends React.Component {
  render() {
    return (
      <div className="description">
        <h3 className="description__title">Description Information</h3>

        <div className="description__group">
          <label className='description__label' htmlFor='description'>Description</label>
          <textarea className='description__textarea' name='description' id='description'></textarea>
        </div>
      </div>
    );
  }
}