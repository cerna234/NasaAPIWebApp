import React,{useState,useEffect} from 'react'
import { ThreeCircles } from 'react-loader-spinner';

import axios from 'axios'

function MarsImagesComponent() {

    const [Marsdata,setMarsData] = useState({});
    const [CameraOption,setCameraOption] = useState("FHAZ");
    const [result,setResults] = useState("FHAZ");
    

   
    
    



       

    const getData = async () => {
        const { data } = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${CameraOption}&api_key=${process.env.REACT_APP_KEY}`);
        setMarsData(data);
       
      };

      useEffect( () => {
        getData();
      },[])

      const SubmitData = (option) => {
        getData();
        setResults(option)

      }

      
   
  return (
    <div className='MarsPage'>
    

    <div className='form'>

        <div>

        
        <select className='marsSelect' onChange={(e) => setCameraOption(e.target.value)}>
            
            <option>FHAZ</option>
            <option>RHAZ</option>
            <option>MAST</option>
            <option>CHEMCAM</option>
            <option>NAVCAM</option>
        </select>
        <input className='submitButton' type="submit" onClick={() => {
            SubmitData(CameraOption)
        }}></input>

        </div>
        <p className='results'>Showing results for "{result}"</p>
       
       
   

     </div>
     
     
        <div className='dataContainer'>

            {Marsdata.photos ?
            

            Marsdata.photos?.map((value,key) => {

                   


                   
                    
                return (
                
                    <div className='MarsDataContainer'>

                       
                        <div style={{backgroundImage:`url(${value.img_src})`}}  className="marsImage"  >

                        </div>
                        <div className='MarsImageData'>
                            <p className='marsDataValue'><span>ROVER NAME:</span>   {value.rover.name}</p>
                            <p className='marsDataValue'><span>STATUS:</span>   {value.rover.status}</p>
                            <p className='marsDataValue'><span>LANDING DATE:</span>   {value.rover.landing_date}</p>
                        </div>

                        
                    </div>
                    
                )

            
           
            
            
        })

            : 
            
                <div className='loading'>

                    <ThreeCircles
                        height="100"
                        width="100"
                        color="#FF0000"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
            </div>
            }

         
         

        </div>
      

       
        
       
    </div>
  )
}

export default MarsImagesComponent