import React from 'react'
import AsteroidComponent from "../Components/AsteroidsComponent"
import AsteroidApiInfo from '../Components/ApiInfoTemplate'




function AsteroidsPage() {





  return (

    
    <div style={{backgroundColor:"rgb(18, 18, 18)"}}>
      

     <AsteroidComponent/>
     <AsteroidApiInfo
      ApiTitle="WHAT IS THE BNLAH API?"
      ApiSubtitle="NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with its NASA JPL small body id, as well as browse the overall data-set."
      />
    

    
    </div>
  )
}

export default AsteroidsPage