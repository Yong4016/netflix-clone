import React from 'react';
import './MovieCarousel.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { responsive } from '../../constants/responsive';

const MovieCarousel = ({ title, movies }) => {
  return (
    <div>
      <h3 className='text-white'>{title} Movies</h3>
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={true}
        centerMode={true}
        infinite={true}
        containerClass='carousel-container'
      >
        {movies.map((movie) => (
          <MovieCard
            movieId={movie.id}
            movie={movie}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
