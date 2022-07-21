import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';




function NavBar() {

   let [isOpen,setIsOpen] = useState(false)
    let [navPosition,setNavPosition] = useState("100%");

    const openNav = () => {
        setIsOpen(
            isOpen = false
        )
        setNavPosition(
            navPosition = "100%"
        )
    }

    const CloseNav = () => {
        setIsOpen(
            isOpen = true
        )
        setNavPosition(
            navPosition = "50%"
        )
    }

  return (
    <nav className='navBar'>
        <div className='NavBarInner'>
            <div className='navSectionLogo'>
            <Link to="/" className='Logo'> <p  className='Logo'>NASA <span>&#123;</span> API <span>&#125;</span></p></Link>
            </div>
            

            <div className='navSection'>
            <button onClick={() => {
                if(isOpen === false){
                    CloseNav();
            
                    
                }
                else{
                    openNav();
                  
                }
                
            }} className='closeButton' style={{zIndex:"100"}} >MENU</button>
               
                <div style={{left:navPosition}} className="navMenu">
                        
                <Link onClick={() => {if(isOpen === false){ CloseNav()}else{openNav();}}} className='navLinks' to="/">HOME</Link>
                <Link onClick={() => {if(isOpen === false){ CloseNav()}else{openNav();}}} className='navLinks' to="/AsteroidPage">ASTEROIDS API</Link>
                <Link onClick={() => {if(isOpen === false){ CloseNav()}else{openNav();}}} className='navLinks' to="/marsPage">MARS API</Link>

                        

                  
               

                </div>
              
            </div>

            <div className='DesktopMenu'>
                                    
            <Link className='navLinks' to="/">HOME</Link>
                <Link className='navLinks' to="/AsteroidPage">ASTEROIDS</Link>
                <Link  className='navLinks' to="/marsPage">MARS</Link>
            </div>


        </div>
     
      

    </nav>
  )
}

export default NavBar