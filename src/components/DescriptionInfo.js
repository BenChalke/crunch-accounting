import React from 'react';

const DescriptionInfo = () => (
  <div className="description">
    <h3 className="description__title">Description Information</h3>

    <div className="description__group">
      <label className='description__label' htmlFor='description'>Description</label>
      <textarea className='description__textarea' name='description' id='description'></textarea>
    </div>
  </div>
);

export default DescriptionInfo;