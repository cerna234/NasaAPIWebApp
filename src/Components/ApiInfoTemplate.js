import React from 'react'

function ApiInfoTemplate(props) {
  return (
    <div className='ApiInfoSection'>
      <div className='ApiInfoSectionInner'>
      <h2 className='ApiInfoTitle'>{props.ApiTitle}</h2>
      <p className='ApiSubtext'>{props.ApiSubtitle}</p>
      <div className='maintainers'>
        <p className='ApiInfoInnerTitle'>MAINTAINERS</p>
        <div className='apiSection'>
          <p className='ApiSubtext'> David Greenfield, Arezu Sarvestani, Jason English and Peter Baunach.</p>
         
         
        </div>
      </div>
     

      </div>
     
      
    </div>
  )
}

export default ApiInfoTemplate