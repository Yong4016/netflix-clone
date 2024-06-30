import './Banner.style.css';
import { usePopularMovies } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/${data?.results[0].poster_path})`,
      }}
    >
      <div className='text-white banner-text-area'>
        <h1 className='banner-title'>{data?.results[0].title}</h1>
        <p className='banner-overview'>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
