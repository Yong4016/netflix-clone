import React, { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useSearchParams } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MoviePage.style.css';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');

  const { data, isLoading, isError, error } = useSearch({ keyword, page });
  const pageCount = data?.total_pages > 100 ? 100 : data?.total_pages; // Limit displayed pages to 1000
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  if (isLoading) {
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

  if (isError) {
    return <Alert variant='danger'>Error: {error.message}</Alert>;
  }
  return (
    <Container style={{ marginTop: '1.5rem' }}>
      <Row>
        <Col
          lg={4}
          xs={12}
        >
          filter
        </Col>
        <Col
          lg={8}
          xs={12}
        >
          <Row>
            {data?.results.map((movie, index) => (
              <Col
                key={index}
                lg={4}
                xs={12}
              >
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel='<'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
