import React from 'react'
import AsteroidApiInfo from '../Components/ApiInfoTemplate'
import MarsImagesComponent from '../Components/MarsImagesComponent'

function MarsPage() {
  return (
    <div>
        <MarsImagesComponent/>
        <AsteroidApiInfo
      ApiTitle="WHAT IS THE MARS ROVER API?"
      ApiSubtitle="API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars"
      maintainers="Chris Cerami"
      />
    </div>
    
  )
}

export default MarsPage