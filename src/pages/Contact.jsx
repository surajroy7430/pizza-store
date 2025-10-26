import * as Yup from "yup";
import Terms from "../components/Terms";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form as FormikForm } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Card,
  Breadcrumb,
} from "react-bootstrap";

// Form validation schema using Yup
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be more than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contact = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load existing feedbacks from localStorage when component mounts
    const storedFeedbacks = localStorage.getItem("pizzaStoreFeedbacks");
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Create a new feedback object with the form values and a timestamp
      const newFeedback = {
        ...values,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };

      // Add the new feedback to the existing feedbacks
      const updatedFeedbacks = [...feedbacks, newFeedback];

      // Update state
      setFeedbacks(updatedFeedbacks);

      // Store the updated feedbacks in localStorage
      localStorage.setItem(
        "pizzaStoreFeedbacks",
        JSON.stringify(updatedFeedbacks)
      );

      setSubmitting(false);
      resetForm();
      toast.info("Thank you for your feedback! It has been submitted.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleDelete = (id) => {
    const updatedFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem(
      "pizzaStoreFeedbacks",
      JSON.stringify(updatedFeedbacks)
    );
  };

  return (
    <>
      <Container className="my-5">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Please fill out the form below to send
              us your feedback or ask any questions.
            </p>

            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <FormikForm>
                  <Row className="mb-3">
                    <Col>
                      <Field
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      {errors.name && touched.name ? (
                        <div className="text-danger">{errors.name}</div>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Field
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Field
                        name="message"
                        as="textarea"
                        className="form-control"
                        rows="4"
                        placeholder="Your Message"
                      />
                      {errors.message && touched.message ? (
                        <div className="text-danger">{errors.message}</div>
                      ) : null}
                    </Col>
                  </Row>
                  
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </FormikForm>
              )}
            </Formik>

            <Alert variant="info" className="mt-4">
              We respect your privacy and will never share your personal
              information with others.
            </Alert>

            {/* Display stored feedbacks */}
            <h2 className="mt-5">Recent Feedbacks</h2>
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <Card key={feedback.id} className="mb-3">
                  <Card.Body>
                    <Button
                      variant="danger"
                      size="sm"
                      className="float-end"
                      onClick={() => handleDelete(feedback.id)}
                    >
                      &times;
                    </Button>
                    <Card.Title>{feedback.name}</Card.Title>
                    <Card.Text>{feedback.message}</Card.Text>
                    <Card.Footer className="text-muted">
                      Submitted on:{" "}
                      {new Date(feedback.timestamp).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>No feedbacks yet.</p>
            )}
          </Col>
        </Row>
      </Container>

      {/* Terms of Services */}
      <Terms />
    </>
  );
};

export default Contact;
