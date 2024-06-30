import { usePopularMovies } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';

const PopularMovieCarousel = () => {
  const { data, isLoading, isError, error } = usePopularMovies();

  if (isLoading) {
    return <div>Loading...</div>;
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
