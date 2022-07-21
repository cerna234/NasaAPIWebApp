

import React from 'react'
import { Link } from "react-router-dom";





function pageTemplate(props) {
  return (
    <div style={{backgroundImage: `url(${props.backgroundImageUrl})`}} className='templatePageContainer'>

    
        <div className='pageTemplateInner'>
            <h2 className='templateTitle'>{props.name}</h2>
            <p className='templateSubtext'>{props.subText}</p>
            <Link className='templateButton' to={props.buttonUrl}>{props.linkTitle}</Link>

        </div>
       
        



    </div>
  )
}

export default pageTemplate