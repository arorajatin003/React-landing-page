import React from 'react';

function About(props){
  return(
    <div id='about'>
      <div className='about-images'>
        <img src={props.image}></img>
      </div>
      <div className='about-text'>
        <h2>{props.title}</h2>
        <p>
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}
export default About
