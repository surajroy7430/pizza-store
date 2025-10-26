import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_API_URL;

const Cards = () => {
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const result = await axios.get(BASE_URL);
        setPizzas(result.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchPizzas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setPizzas(pizzas.filter((pizza) => pizza.id !== id));
    } catch (error) {
      console.error("Failed to delete the pizza:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Pizzas</Breadcrumb.Item>
      </Breadcrumb>
      <h4 className="mb-4">Our Pizzas</h4>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id} xs={12} sm={10} md={6} lg={4} className="mb-4">
            <Card
              style={{
                padding: "7px",
                transition: "all 0.3s ease-in-out",
              }}
              className="h-100"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.01)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Card.Img
                src={pizza.image}
                height={300}
                variant="top"
                loading="lazy"
                style={{ borderRadius: "0.375rem" }}
              />

              <Card.Body>
                <Card.Title className="pizza-title">{pizza.name}</Card.Title>

                <Card.Text className="pizza-desc">
                  {pizza.description}
                </Card.Text>
                <Card.Text className="pizza-price">
                  ₹{pizza.price} for {pizza.size}
                </Card.Text>

                <div>
                  <Link to={`/update-pizza/${pizza.id}`}>
                    <Button variant="primary" className="me-2">
                      Update
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(pizza.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
