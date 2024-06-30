import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieCarousel from './components/PopularMovieCarousel/PopularMovieCarousel';
import TopRatedMoviesCarousel from './components/TopRatedMoviesCarousel/TopRatedMoviesCarousel';
import UpComingMoviesCarousel from './components/UpComingMoviesCarousel/UpComingMoviesCarousel';

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopularMovieCarousel />
      <TopRatedMoviesCarousel />
      <UpComingMoviesCarousel />
    </>
  );
};

export default Homepage;
