import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AiOutlineLeftSquare,AiOutlineRightSquare } from 'react-icons/ai';



function AsteroidComponent() {

const [asteroidData,setAsteroidData]= useState([]);
const [page,setPage] = useState(1);


const navigate = useNavigate();

const getData = async () => {
  const { data } = await axios(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=${page}&size=9&api_key=${process.env.REACT_APP_KEY}`);
  setAsteroidData(data);
};



useEffect( () => {
  getData();
},[])










  return (

    
    <div className="asteroidPageContainer">
        <p className='pageNumberAsteroid' >{page}/1468</p>

    <div className='dataContainer'>
        {asteroidData.near_earth_objects?.map((value,key) => {
      return(
        <div className='asteroidData' onClick= {() => {navigate(`/asteroid/${value.id}`)}} >
    
        
        
        <div className='asteroidHeader'>
            <p className='asteroidId' >{value.id}</p>
            <p className='asteroidHazardIndicator' style={{backgroundColor: value.is_potentially_hazardous_asteroid === true ? "rgb(180, 35, 6)": "rgb(4, 67, 4)"}}> {value.is_potentially_hazardous_asteroid === true ? "THREAT" : "NON-THREAT"}</p>
        </div>
        <div className='asteroidContainerData'>
            <p className='asteroidText'>{value.name}</p>
            <p className='asteroidText'> MAGNITUDE: {value.absolute_magnitude_h}</p>
            <p className='asteroidText'> ESTIMATED DIAMETER: {value.estimated_diameter.miles.estimated_diameter_max}</p>
        


        </div>
       
      
       
        

        </div>
        
       
      )
     })}



    </div>
     
     <div className='paginationAsteroids'>
     <p className='paginationButton' style={{opacity: page < 2 ? "0%":"100%"}} onClick={ () => {
     if(page > 1){
            setPage( page - 1)
            console.log(page);
            getData();
     }
            
        }}><AiOutlineLeftSquare/></p>
        <p className='paginationButton' style={{opacity: page > 1468 ? "0%":"100%"}}  onClick={ () => {
           if(page < 1469)
                setPage( page + 1)
                console.log(page);
                getData();

            
            
        
            
        }}><AiOutlineRightSquare/></p>



     </div>
    
    </div>
  )
}

export default AsteroidComponent