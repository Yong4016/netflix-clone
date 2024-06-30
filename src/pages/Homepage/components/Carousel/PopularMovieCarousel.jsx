import './PopularMovieCarousel.style.css';
import { usePopularMovies } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularMovieCarousel = () => {
  const { data, isLoading, isError, error } = usePopularMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        responsive={responsive}
        swipeable={false}
        showDots={true}
        centerMode={true}
        infinite={true}
        containerClass='carousel-container'
        itemClass='carousel-item-padding-40-px'
      >
        {data?.results.map((movie) => (
          <MovieCard
            movieId={movie.id}
            movie={movie}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieCarousel;
