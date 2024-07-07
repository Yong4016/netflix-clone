import React from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieDetail.style.css';

const MovieDetail = ({ movie }) => {
  return (
    <Container style={{ marginTop: '1.5rem' }}>
      <Row>
        <Col>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
          </div>
        </Col>
        <Col>
          <h1>{movie.title}</h1>
          <p style={{ paddingLeft: '0.2rem' }}>{movie.tagline}</p>
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
          <p className='movie-overview'>{movie.overview}</p>

          <div className='genre-container'>
            {movie.genres.map((genre) => (
              <Badge
                key={genre.id}
                bg='danger'
                className='genre-badge'
              >
                {genre.name}
              </Badge>
            ))}
          </div>
          <div className='additional-desc'>
            <ul className='additional-desc-list'>
              <li>
                <strong>Release Date</strong> {new Date(movie.release_date).toLocaleDateString('en-AU')}
              </li>
              <li>
                <strong>Runtime</strong> {movie.runtime} minutes
              </li>
              <li>
                <strong>Budget</strong> ${movie.budget.toLocaleString()}
              </li>
              <li>
                <strong>Revenue</strong> ${movie.revenue.toLocaleString()}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
