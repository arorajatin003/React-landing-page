import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage1 from '../images/feature_1.png'
import featureimage2 from '../images/feature_2.png'
import featureimage3 from '../images/feature_3.png'

function Feature(){
  return(
    <div id='features'>
      <div className='a-container'>
        <FeatureBox image={featureimage1} title='Development Course'
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureBox image={featureimage2} title='Money Saving Services'
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureBox image={featureimage3} title='Usability Interface'
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </div>
  )
}

export default Feature;
