import React from 'react'
import PageTemplate from '../Components/pageTemplate'


function HomePage() {
  return (
    <div className='templateContainer'>
        <PageTemplate
            name="Asteroids NeoWs API"
            subText="NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information.All the data is provided by the NASA JPL Asteroid team"
            buttonUrl="/AsteroidPage" 
            linkTitle="ASTEROIDS" 
            backgroundImageUrl="https://images.unsplash.com/photo-1638716000957-e0e0e32817b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
        />

<PageTemplate
            name="Mars Rover Photos API"
            subText="Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date"
            buttonUrl="/marsPage" 
            linkTitle="MARS" 
            backgroundImageUrl="https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2090&q=80"
        />

        
    </div>
  )
}

export default HomePage