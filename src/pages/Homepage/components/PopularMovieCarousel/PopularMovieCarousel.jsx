import { usePopularMovies } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';
import { Spinner } from 'react-bootstrap';

const PopularMovieCarousel = () => {
  const { data, isLoading, isError, error } = usePopularMovies();

  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{ width: '5rem', height: '5rem' }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }

  return (
    <>
      <MovieCarousel
        title='Popular'
        movies={data.results}
      />
    </>
  );
};

export default PopularMovieCarousel;
