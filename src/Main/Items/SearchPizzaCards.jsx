import React from 'react';
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SearchPizzaCards = ({ recipes }) => {
    const navigate = useNavigate();

  return (
    <Container className="mt-5">
        <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Search</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="mb-4">Search Results</h2>
        <Row className="justify-content-center">
        {recipes.map((recipe, index) => (
            <Col key={index} md={4} className="mb-4">
                <Card style={{ 
                    padding: '7px',
                    transition: 'all 0.3s ease-in-out',
                    }}
                    className="h-100"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.01)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <Card.Img 
                        style={{borderRadius: '0.375rem'}} 
                        variant="top" 
                        src={recipe.recipe.image} 
                        alt={recipe.recipe.label} 
                        height={300} 
                    />
                    <Card.Body>
                        <Card.Title className='searched-pizza'>{recipe.recipe.label}</Card.Title>
                        <Card.Text>
                            Calories: {Math.round(recipe.recipe.calories)} kcal
                        </Card.Text>
                        <Button as={Link} variant='primary' to={recipe.recipe.url} target="_blank">
                            View Recipe
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPizzaCards;
