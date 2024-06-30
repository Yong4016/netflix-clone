import { useUpComingMovies } from '../../../../hooks/useUpComingMovies';
import Alert from 'react-bootstrap/Alert';
import MovieCarousel from '../../../../common/MovieCarousel/MovieCarousel';

const UpComingMoviesCarousel = () => {
  const { data, isLoading, isError, error } = useUpComingMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }
  return (
    <>
      <MovieCarousel
        title='Upcoming'
        movies={data.results}
      />
    </>
  );
};

export default UpComingMoviesCarousel;
