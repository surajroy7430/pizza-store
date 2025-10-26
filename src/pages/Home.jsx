import { useNavigate } from "react-router-dom";
import { Button, Carousel, Container } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel fade className="m-5">
        <Carousel.Item
          onClick={() => navigate("/pizzas")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://images.unsplash.com/photo-1567349077939-101215abd8ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 carousel-img"
            loading="lazy"
            height={600}
            alt="Slide-1"
          />
          <Carousel.Caption>
            <h1
              style={{
                color: "transparent",
                fontWeight: "700",
                backgroundImage:
                  "linear-gradient(to bottom right, red, yellow)",
                WebkitBackgroundClip: "text",
              }}
            >
              Welcome to Pizza Hallen
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/pizzas")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1675103909671-5b8ab65f8b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 carousel-img"
            loading="lazy"
            height={600}
            alt="Slide-2"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "transparent",
                fontWeight: "700",
                backgroundImage:
                  "linear-gradient(to bottom right, red, yellow)",
                WebkitBackgroundClip: "text",
              }}
            >
              Enjoy our delicious pizzas made with fresh ingredients!
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/pizzas")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://images.unsplash.com/photo-1597075349517-0deb1e127c37?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 carousel-img"
            loading="lazy"
            height={600}
            alt="Slide-3"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "transparent",
                fontWeight: "700",
                backgroundImage:
                  "linear-gradient(to bottom right, red, yellow)",
                WebkitBackgroundClip: "text",
              }}
            >
              Crafted with Passion
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/pizzas")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1679436987530-ee11b5600161?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 carousel-img"
            loading="lazy"
            height={600}
            alt="Slide-4"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "transparent",
                fontWeight: "700",
                backgroundImage:
                  "linear-gradient(to bottom right, red, yellow)",
                WebkitBackgroundClip: "text",
              }}
            >
              Serve with Love
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/pizzas")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1682430745677-5b2508aa8c8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100 carousel-img"
            loading="lazy"
            height={600}
            alt="Slide-5"
          />
          <Carousel.Caption>
            <h3
              style={{
                color: "transparent",
                fontWeight: "700",
                backgroundImage: "linear-gradient(to bottom right, red, green)",
                WebkitBackgroundClip: "text",
              }}
            >
              Enjoy better food for more people
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="text-center my-4">
        <Button variant="primary" onClick={() => navigate("/about")}>
          Learn More About Us
        </Button>
      </Container>
    </>
  );
};

export default Home;
