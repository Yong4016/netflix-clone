import { useTopRatedMovies } from '../../../../hooks/useTopRatedMovies';
import Alert from 'react-bootstrap/Alert';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';

const TopRatedMoviesCarousel = () => {
  const { data, isLoading, isError, error } = useTopRatedMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }
  return (
    <>
      <MovieCarousel
        title='Top Rated'
        movies={data.results}
      />
    </>
  );
};

export default TopRatedMoviesCarousel;
