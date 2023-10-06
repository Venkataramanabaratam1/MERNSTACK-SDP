import React from 'react'
import Signup from './Signup'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './logsign.css';
function Two() {
  return (
    <div className='cation'>
      <div className="auth-wrapper">
          <div className="auth-inner">
        <Signup></Signup></div></div>
       <div className='sliding'>
       <ImageSlider slides={SliderData} />;
       </div>
    </div>
  )
}

export default Two