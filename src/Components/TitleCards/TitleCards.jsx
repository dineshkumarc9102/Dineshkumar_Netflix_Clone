import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cardData from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGQ3ZWMyM2NlZGIxOWI5MzdkN2IyNzE4MTBiOWIyNCIsIm5iZiI6MTczNjc2NzE0NS45MDYsInN1YiI6IjY3ODRmNmE5YzVkMmU5NmUyNjdiYjViOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O_M8sh_0rcwK9TGfKy8q95YLhoy2HYp6361rNgMKN9U'
    }
  };
  

  const handleWheel =(event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
