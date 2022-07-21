import React,{useState,useEffect} from 'react'


import axios from 'axios'

function MarsImagesComponent() {

    const [Marsdata,setMarsData] = useState({});
    const [CameraOption,setCameraOption] = useState("FHAZ");
    

   
    
    

const SubmitName = () => {
    getData();
    console.log(CameraOption)
}

       

    const getData = async () => {
        const { data } = await axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${CameraOption}&api_key=${process.env.REACT_APP_KEY}`);
        setMarsData(data);
       
      };

      useEffect( () => {
        getData();
      },[])
   

   
   
  return (
    <div className='MarsPage'>
    

    <div className='form'>
        <div>
        <input type="text" placeholder='ROVER NAME ABBREVIATION' className='marsInput' onChange={ (event) => {setCameraOption(event.target.value)}}></input>
    

    <button onClick={SubmitName} className="submitButton">SUBMIT</button>

        </div>
       
          <p className='results'>SHOWING RESULTS FOR "{CameraOption}"</p>

     </div>
        <div className='dataContainer'>

            

            {Marsdata.photos?.map((value,key) => {

                   


                   
                    
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

                
               
                
                
            })}
         

        </div>
      

       
        
       
    </div>
  )
}

export default MarsImagesComponent