import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Filter.style.css';

const Filter = ({ genres, onFilter }) => {
  const handleGenreClick = (genreId) => {
    onFilter(genreId);
  };

  return (
    <>
      <h4 className='text-white'>Filter by Genre</h4>
      <Container>
        <Row
          xs={2}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          className='g-1'
        >
          {genres &&
            genres.map((genre, index) => (
              <Col key={index}>
                <Button
                  variant='secondary'
                  className='genre-buttons'
                  onClick={() => handleGenreClick(genre.id)}
                >
                  {genre.name}
                </Button>
              </Col>
            ))}
        </Row>
      </Container>
      <ButtonGroup vertical></ButtonGroup>
    </>
  );
};
export default Filter;
