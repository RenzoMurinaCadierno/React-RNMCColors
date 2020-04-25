import React, { Component } from 'react';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'

export default props => {

  const { level, changeLevel } = props

  return (
    <header className='Navbar'>
      <div className='logo'>
        <a href='#'>rnmccolors</a>
      </div>
      <div className='slider-container'>
        <span> Level: {level} </span>
      </div>
      <div className='slider'>
        <Slider 
          defaultValue={level} min={100} max={900} step={100}
          onAfterChange={changeLevel}   
        />
      </div>
    </header>
  );
}