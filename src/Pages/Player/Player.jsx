import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_icon from "../../assets/back.svg"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const navigate = useNavigate();

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  }); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGQ3ZWMyM2NlZGIxOWI5MzdkN2IyNzE4MTBiOWIyNCIsIm5iZiI6MTczNjc2NzE0NS45MDYsInN1YiI6IjY3ODRmNmE5YzVkMmU5NmUyNjdiYjViOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O_M8sh_0rcwK9TGfKy8q95YLhoy2HYp6361rNgMKN9U'
    }
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
 


  return (
    <div className='player'>
      <img src={back_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe 
      width="90%" 
      height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' 
      frameBorder= '0' 
      allowFullScreen
      >
      </iframe>

      <div className="info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
