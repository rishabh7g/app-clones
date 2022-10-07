import React, { useEffect, useState } from 'react';
import axios from '../../shared/axios/axios';
import './row.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

export const Row = ({ title, fetchUrl, isLargeRow }) => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const fetchMovies = async () => {
         const request = await axios.get(fetchUrl);
         setMovies(request.data.results);
         return request;
      };
      fetchMovies();
   }, [fetchUrl]);

   return (
      <div className='row'>
         <h1 className='row__title'>{title}</h1>
         <div className='row__posters'>
            {movies?.map((movie) => {
               const isPosterAvailable =
                  (isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path);

               if (!isPosterAvailable) return null;

               return (
                  <img
                     key={movie.id}
                     className={`row__poster ${
                        isLargeRow && 'row__poster--large'
                     }`}
                     src={`${IMAGE_BASE_URL}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                     }`}
                     alt={movie.name}
                  />
               );
            })}
         </div>
      </div>
   );
};
