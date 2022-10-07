import React from 'react';
import requests from '../../shared/axios/requests';
import { Banner } from '../../components/banner/banner';
import { Nav } from '../../components/nav/nav';
import { Row } from '../../components/row/row';
import './home-screen.css';

export const HomeScreen = () => {
   return (
      <div className='home-screen'>
         <Nav />
         <Banner />

         <Row
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
         />
         <Row title='Trending now' fetchUrl={requests.fetchTrending} />
         <Row title='Top rated' fetchUrl={requests.fetchTopRated} />
         <Row title='Action movies' fetchUrl={requests.fetchActionMovies} />
         <Row title='Comedy movies' fetchUrl={requests.fetchComedyMovies} />
         <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies} />
         <Row title='Romance movies' fetchUrl={requests.fetchRomanceMovies} />
         <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      </div>
   );
};
