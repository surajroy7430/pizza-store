import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Row,
  Alert,
} from "react-bootstrap";

const SearchedCards = ({ recipes, searchQuery }) => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Search</Breadcrumb.Item>
      </Breadcrumb>

      {recipes.length > 0 ? (
        <>
          <h4 className="mb-4">Search results for {searchQuery}</h4>

          <Row className="justify-content-center">
            {recipes.map((recipe, index) => (
              <Col key={index} xs={12} sm={10} md={6} lg={4} className="mb-4">
                <Card
                  style={{
                    padding: "7px",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="h-100"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.01)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Card.Img
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                    title={recipe.recipe.label}
                    variant="top"
                    loading="lazy"
                    height={300}
                    style={{ borderRadius: "0.375rem" }}
                  />

                  <Card.Body>
                    <Card.Title className="searched-pizza text-truncate">
                      {recipe.recipe.label}
                    </Card.Title>

                    <Card.Text>
                      Calories: {Math.round(recipe.recipe.calories)} kcal
                    </Card.Text>

                    <Button
                      as={Link}
                      variant="primary"
                      to={recipe.recipe.url}
                      target="_blank"
                    >
                      View Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <Alert variant="warning" className="text-center">
          No results found for your search 😔
        </Alert>
      )}
    </Container>
  );
};

export default SearchedCards;
