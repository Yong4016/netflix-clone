import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TimeAgo from 'timeago-react';
import './Reviews.style.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState({});

  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3);
  };
  const showLessReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews - 3);
  };

  const toggleReadMore = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container className='movie-reviews-container'>
      {reviews?.results.length === 0 ? (
        <Row>
          <Col>
            <p className='no-reviews-message'>No reviews available.</p>
          </Col>
        </Row>
      ) : (
        <>
          {reviews?.results.slice(0, visibleReviews).map((review) => (
            <Row
              key={review.id}
              className='mb-4'
            >
              <Col>
                <div className='user-info'>
                  <img
                    src={
                      review.author_details.avatar_path === null
                        ? 'https://img.icons8.com/?size=100&id=7819&format=png&color=808080'
                        : `https://media.themoviedb.org/t/p/w90_and_h90_face/${review.author_details.avatar_path}`
                    }
                    alt='Avatar'
                    className='avatar-img'
                  />
                  <h3 className='username'>{review.author_details.username}</h3>
                </div>
                <p className={`review-content ${expandedReviews[review.id] ? '' : 'clamp-text'}`}>{cleanText(review.content)}</p>
                {review.content.length > 300 && (
                  <p
                    className='review-toggle-button'
                    onClick={() => toggleReadMore(review.id)}
                  >
                    {expandedReviews[review.id] ? 'Show less' : 'Read more'}
                  </p>
                )}
                <TimeAgo
                  className='review-timestamp'
                  datetime={review.updated_at}
                />
              </Col>
            </Row>
          ))}
        </>
      )}

      <Row>
        <Col className='text-center mb-3'>
          {visibleReviews < reviews.results.length && (
            <Button
              variant='outline-danger'
              onClick={showMoreReviews}
              className='review-button'
            >
              Show More
            </Button>
          )}
          {visibleReviews > 3 && (
            <Button
              variant='outline-secondary'
              onClick={showLessReviews}
            >
              Show Less
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;

function cleanText(str) {
  if (str === null || str === '') {
    return false;
  } else {
    str = str.toString();
    str = str.replace(/<[^>]*>/g, '');
    str = str.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n');
    return str;
  }
}
