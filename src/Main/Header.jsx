import React from 'react'
import { Button, Container, Form, InputGroup, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/our-logo.png'
import searchPizza from '../Utils/searchPizza'

const Header = ({ setSearchResults }) => {
  const navigate = useNavigate();

  const handleSearch = async () => {
    const pizzaRecipes = await searchPizza();
    setSearchResults(pizzaRecipes);
    navigate('/search-pizza');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo}
            width={50}
            height={50}
            alt='logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/pizzas'>Pizza Mania</Nav.Link>
            <Nav.Link as={Link} to='/add-pizza'>Add Pizza</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
