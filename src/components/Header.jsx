import { toast } from "react-toastify";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import searchPizza from "../utils/searchPizza";
import logo from "../assets/our-logo.png";

const Header = ({ setSearchResults, inputRef, lastInputRef }) => {
  const navigate = useNavigate();

  const handleSearch = async () => {
    const searchedQuery = inputRef.current.value.trim().toLowerCase();
    if (!searchedQuery) return toast.warn("Please enter a search term!");

    lastInputRef.current = searchedQuery;

    let results = [];
    if (!searchedQuery.includes("pizza")) {
      setSearchResults([]);
      navigate("/search-pizza");
      inputRef.current.value = "";
      return;
    }

    results = await searchPizza(searchedQuery);
    setSearchResults(results);
    inputRef.current.value = ""
    navigate("/search-pizza");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width={50} height={50} alt="logo" loading="lazy" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/pizzas">
              Pizza Mania
            </Nav.Link>
            <Nav.Link as={Link} to="/add-pizza">
              Add Pizza
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <InputGroup>
              <Form.Control
                type="search"
                ref={inputRef}
                placeholder="Search pizzas..."
                aria-label="Search"
              />

              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
