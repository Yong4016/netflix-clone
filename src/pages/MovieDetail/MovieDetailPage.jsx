import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import './MovieDetailPage.style.css';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Reviews from './components/Reviews/Reviews';
import { useReview } from '../../hooks/useReview';
import RelatedMovies from './components/RelatedMovies/RelatedMovies';
import { useRelatedMovies } from '../../hooks/useRelatedMovies';
import { useTrailer } from '../../hooks/useTrailer';

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movie, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = useMovieDetails(id);

  const { data: reviews, isLoading: isReviewsLoading, isError: isReviewsError, error: reviewsError } = useReview(id);

  const { data: relatedMovies, isLoading: isRelatedMoviesLoading, isError: isRelatedMoviesError, error: relatedMoviesError } = useRelatedMovies(id);

  const { data: trailer, isLoading: isTrailerLoading, isError: isTrailerError, error: trailerError } = useTrailer(id);

  const [showContent, setShowContent] = useState('reviews');

  if (isMovieLoading || isReviewsLoading || isRelatedMoviesLoading || isTrailerLoading) {
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

  if (isMovieError || isReviewsError || isRelatedMoviesError || isTrailerError) {
    return <Alert variant='danger'>Error: {movieError?.message || reviewsError?.message || relatedMoviesError?.message || trailerError?.message}</Alert>;
  }

  return (
    <Container>
      <MovieDetail
        movie={movie}
        trailer={trailer}
      />

      <Button
        variant={showContent === 'reviews' ? 'danger' : 'outline-danger'}
        onClick={() => setShowContent('reviews')}
        className='selector-button'
      >
        Reviews ({reviews.results.length})
      </Button>
      <Button
        variant={showContent === 'relatedMovies' ? 'danger' : 'outline-danger'}
        onClick={() => setShowContent('relatedMovies')}
        className='selector-button'
      >
        Related Movies ({relatedMovies.length})
      </Button>

      {showContent === 'reviews' ? <Reviews reviews={reviews} /> : <RelatedMovies relatedMovies={relatedMovies} />}
    </Container>
  );
};

export default MovieDetailPage;
