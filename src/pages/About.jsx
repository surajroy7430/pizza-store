import image from "../assets/pizza-hallen.jpg";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";

const About = () => {
  const navigate = useNavigate();
  return (
    <Container className="my-5" style={{ textAlign: "justify" }}>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>About</Breadcrumb.Item>
      </Breadcrumb>

      {/* Welcome Section */}
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={image} width="100%" loading="lazy" rounded fluid />
        </Col>
        <Col md={6}>
          <h1>Welcome to Pizza Hallen</h1>
          <p>
            At Pizza Hallen, we believe that pizza is more than just food; it's
            an experience. Located in the heart of the city, we bring you the
            finest ingredients, traditional techniques, and a passion for
            perfection in every slice. Whether you prefer a classic Margherita
            or something a little more adventurous, we've got something to
            satisfy every palate.
          </p>
          <p>
            Our story began with a love for pizza and a dream to create a place
            where people could gather, enjoy, and share in the simple pleasure
            of a great meal. We've grown over the years, but our commitment to
            quality and community has remained the same.
          </p>
          <p>
            Join us at Pizza Hallen for a taste of tradition, a touch of
            innovation, and a lot of love. We can't wait to serve you!
          </p>
          <Button variant="primary" onClick={() => navigate("/pizzas")}>
            Check Out Our Menu
          </Button>
        </Col>
      </Row>

      {/* Our Values Section */}
      <Row className="mb-5 mt-5">
        <Col md={6}>
          <Image
            src="https://plus.unsplash.com/premium_photo-1675103910606-8c65800739b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy"
            rounded
            fluid
          />
        </Col>
        <Col md={6}>
          <h3>Our Values</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Quality:</strong> We use only the freshest ingredients,
              sourced locally whenever possible.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Tradition:</strong> Our recipes are rooted in the rich
              culinary heritage of Italy.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Innovation:</strong> We constantly experiment with new
              flavors and techniques to keep our menu exciting.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Community:</strong> We believe in giving back and being a
              positive force in our neighborhood.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Customer Testimonials Section */}
      <Row className="mb-5">
        <Col>
          <h2>What Our Customers Say</h2>
          <p>
            Here's what some of our loyal customers have to say about Pizza
            Hallen:
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>
                "Pizza Hallen is my go-to spot for pizza. The flavors are
                incredible, and the staff is always so friendly!"
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">- Alex B.</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Text>
                "I love the variety of pizzas they offer. There's always
                something new and delicious to try."
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">- Maria K.</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center my-5">
        <Col>
          <h2>Ready to Experience Pizza Hallen?</h2>
          <p>
            Visit us today or order online to enjoy our delicious pizzas from
            the comfort of your home.
          </p>
          <Button
            size="lg"
            variant="primary"
            onClick={() => navigate("/pizzas")}
          >
            Order Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
