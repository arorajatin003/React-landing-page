import React from 'react'

function FeatureBox(props){
  return(
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image}></img>
      </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default FeatureBox;
