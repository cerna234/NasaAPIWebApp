import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"

function ApodComponent() {

    const [apodData,setApodData] = useState({});

    const getData = async () => {
        const { data } = await axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_KEY}`);
        setApodData(data);
      };


      useEffect( () => {
        getData();
        },[])



    

    
    
    console.log(apodData)

  return (
    <div className='apodContainer'>
      

    
            

        <div className='apodContainerInner'>
            <div className='apodSection'>
                <h2 className='apodTitle'>{apodData.title}</h2>
                <div className='apodImg' style={{backgroundImage:`url(${apodData.url})`}}>

                </div>
                <p className='apodSubtext'>{apodData.copyright}</p>
            </div>
            <div className='apodSection'>
               
                <p className='apodExplanation'>{apodData.explanation}</p>

               
               
                <p className='apodSubtext'>{apodData.date}</p>
            </div>
       </div>
            
        

           
    </div>
  )
}

export default ApodComponent