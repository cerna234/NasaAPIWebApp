import React from 'react'
import { Link } from "react-router-dom";

import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className='Footer'>
        <div className='FooterInner'>
            <div className='Section'>
                   <Link to="/" className='Logo'><p className='Logo'>NASA <span>&#123;</span> API <span>&#125;</span></p></Link>
                
            </div>
           

            <div className='logoContainers'>
                    <a href="https://api.nasa.gov/"><FaExternalLinkAlt/></a>
                    <a href="https://github.com/cerna234/NasaWebApp"><FaGithub/></a>
            </div>

        
       

        </div>
       
    </footer>
  )
}

export default Footer