import React from 'react'
import AsteroidApiInfo from '../Components/ApiInfoTemplate'
import MarsImagesComponent from '../Components/MarsImagesComponent'

function MarsPage() {
  return (
    <div>
        <MarsImagesComponent/>
        <AsteroidApiInfo
      ApiTitle="WHAT IS THE BNLAH API?"
      ApiSubtitle="NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set."
      />
    </div>
    
  )
}

export default MarsPage