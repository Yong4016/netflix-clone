import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieCarousel from './components/Carousel/PopularMovieCarousel';

const Homepage = () => {
  return (
    <>
      <Banner />
      <PopularMovieCarousel />
    </>
  );
};

export default Homepage;
