import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`/movie?q=${keyword}`);
    setKeyword('');
  };

  return (
    <Navbar
      expand='lg'
      bg='dark'
      data-bs-theme='dark'
    >
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            alt='logo'
            width='100px'
            height='40px'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/movie'>Movies</Nav.Link>
          </Nav>
          <Form
            className='d-flex'
            onSubmit={searchByKeyword}
          >
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button
              variant='outline-danger'
              type='submit'
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppLayout;
