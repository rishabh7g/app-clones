import axios from '../../shared/axios/axios';
import React, { useEffect, useState } from 'react';
import './banner.css';
import requests from '../../shared/axios/requests';

export const Banner = () => {
   const [movie, setMovie] = useState([]);

   useEffect(() => {
      const fetchMovie = async () => {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
            request.data.results[
               Math.floor(Math.random() * request.data.results.length - 1)
            ]
         );
         return request;
      };

      fetchMovie();
   }, []);

   console.log(movie);

   const truncate = (string, n) => {
      return string?.length > n ? string.substr(0, n - 1) + '...' : string;
   };
   return (
      <header
         className='banner'
         style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
            backgroundColor: '#111',
         }}
      >
         <div className='banner__contents'>
            <h1 className='banner__title'>
               {movie?.title || movie?.name || movie?.orginal_name}
            </h1>
            <div className='banner__buttons'>
               <button className='banner__button'>Play</button>
               <button className='banner__button'>My List</button>
            </div>
            <div className='banner__description'>
               {truncate(movie?.overview, 450)}
            </div>
         </div>
         <div className='banner--fade-bottom' />
      </header>
   );
};
