import './MovieCard.style.css';
import Badge from 'react-bootstrap/Badge';


const MovieCard = ({ movieId, movie }) => {
  console.log(movieId, movie);
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})`,
      }}
      className='movie-card'
    >
      <div className='movie-card-overlay'>
        <h1 className='movie-title'>{movie.title}</h1>
        <div className='genre-container'>
          {movie.genre_ids.map((genre_id) => (
            <Badge
              key={genre_id}
              bg='danger'
              className='genre-badge'
            >
              {genre_id}
            </Badge>
          ))}
        </div>
        <div className='movie-misc'>
          <div className='movie-misc-items'>
            <img
              src='https://img.icons8.com/?size=100&id=12246&format=png&color=000000'
              alt='imdb rating'
              width={20}
              height={20}
            />
            <span>{movie.vote_average}</span>
          </div>
          <div className='movie-misc-items'>
            <img
              src='https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000'
              alt='likes'
              width={15}
              height={15}
            />
            <span>{movie.popularity.toFixed(0)}</span>
          </div>
          <div className='movie-misc-items'>
            {movie.adult ? (
              <img
                src='https://img.icons8.com/?size=100&id=o3iN2IEeyqAq&format=png&color=000000'
                alt='18+'
                width={20}
                height={20}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
