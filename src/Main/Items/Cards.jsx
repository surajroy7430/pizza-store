import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cards = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isFallback, setIsFallback] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const result = await axios.get('http://localhost:5000/pizzas');
        setPizzas(result.data);
        setIsFallback(false);
      } catch (error) {
        console.error('Failed to fetch from localhost, trying alternative API:', error);
        try {
          const fallbackResult = await axios.get('https://surajroy7430.github.io/jsondata/db.json');
          setPizzas(fallbackResult.data.pizzas);
          setIsFallback(true);
        } catch (fallbackError) {
          console.error('Failed to fetch from alternative API:', fallbackError);
        }
      }
    };
    fetchPizzas();
  }, []);

  const handleDelete = async (id) => {
    if (!isFallback) {
      try {
        await axios.delete(`http://localhost:5000/pizzas/${id}`);
        setPizzas(pizzas.filter(pizza => pizza.id !== id));
      } catch (error) {
        console.error('Failed to delete the pizza:', error);
      }
    } else {
      console.log('Delete function is disabled when using fallback API.');
    }
  };

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Pizzas</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="mb-4">Our Pizzas</h2>
      <Row>
        {pizzas.map(pizza => (
          <Col key={pizza.id} md={4} className="mb-4">
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
              <Card.Img style={{borderRadius: '0.375rem'}} variant="top" src={pizza.image} height={300} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                  <span className='pizzaDescription' title={pizza.description}>
                    {pizza.description}
                  </span>
                  <span>₹{pizza.price} for {pizza.size}</span>
                </Card.Text>
                {!isFallback ? (
                  <Link to={`/update-pizza/${pizza.id}`}>
                    <Button variant="primary" className="me-2">Update</Button>
                  </Link>
                ) : (
                  <Button variant="primary" className="me-2" disabled>Update</Button>
                )}
                <Button variant="danger" onClick={() => handleDelete(pizza.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cards
