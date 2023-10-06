import React from 'react'
import Login from './Login'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import './logsign.css';
function Both() {
  return (
    <div className='cation'>
      <div className="auth-wrapper">
          <div className="auth-inner">
        <Login></Login></div></div>
       <div className='sliding'>
       <ImageSlider slides={SliderData} />;
       </div>
    </div>
  )
}

export default Both