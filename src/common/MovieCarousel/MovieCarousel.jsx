import React from 'react';
import './MovieCarousel.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { responsive } from '../../constants/responsive';
import MaximizeIcon from '@mui/icons-material/Maximize';

const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={active ? 'active' : 'inactive'}
      onClick={() => {
        onClick();
      }}
    >
      <MaximizeIcon />
    </li>
  );
};

const MovieCarousel = ({ title, movies }) => {
  return (
    <div>
      <h3 className='Carousel-title text-white'>{title} Movies</h3>
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={true}
        draggable={true}
        centerMode={true}
        infinite={true}
        customDot={<CustomDot />}
        containerClass='carousel-container'
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
