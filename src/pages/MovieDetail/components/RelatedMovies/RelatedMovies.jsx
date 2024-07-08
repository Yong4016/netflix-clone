import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import './RelatedMovies.style.css';

const RelatedMovies = ({ relatedMovies }) => {
  return (
    <Container>
      <Row>
        {relatedMovies.map((movie) => (
          <Col
            key={movie.id}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className='related-movie-card'
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RelatedMovies;
