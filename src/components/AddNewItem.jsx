import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_API_URL;

const PizzaSchema = Yup.object().shape({
  image: Yup.string()
    .url("Must be a valid URL")
    .matches(
      /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif)(\?.*)?$/,
      "Must be a valid image URL"
    )
    .required("Image URL is required"),
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .required("Name is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Discription is required"),
  price: Yup.number()
    .min(3, "Price must be at least 3 digits")
    .required("Price is required")
    .positive("Must be positive"),
  size: Yup.string()
    .oneOf(["Small", "Medium", "Large"], "Size must be small, medium, or large")
    .required("Size is required"),
});

const AddNewItem = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post(BASE_URL, values);
      resetForm();

      toast.success("Pizza added successfully!");
      navigate("/pizzas");
    } catch (error) {
      console.error("Error adding pizza:", error);
      toast.error("Failed to add pizza!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/pizzas")}>
          Pizzas
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add Pizza Details</Breadcrumb.Item>
      </Breadcrumb>

      <h2>Add New Pizza</h2>

      <Formik
        initialValues={{
          image: "",
          name: "",
          description: "",
          price: "",
          size: "",
        }}
        validationSchema={PizzaSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Row className="mb-3">
              <Col>
                <Field
                  name="image"
                  className="form-control"
                  placeholder="Add image URL"
                />
                {errors.image && touched.image ? (
                  <div className="text-danger">{errors.image}</div>
                ) : null}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Field
                  name="name"
                  className="form-control"
                  placeholder="Pizza Name"
                />
                {errors.name && touched.name ? (
                  <div className="text-danger">{errors.name}</div>
                ) : null}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Field
                  name="description"
                  className="form-control"
                  placeholder="Description"
                />
                {errors.description && touched.description ? (
                  <div className="text-danger">{errors.description}</div>
                ) : null}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Field
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
                {errors.price && touched.price ? (
                  <div className="text-danger">{errors.price}</div>
                ) : null}
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Field as="select" name="size" className="form-control">
                  <option value="">Select Size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </Field>
                {errors.size && touched.size ? (
                  <div className="text-danger">{errors.size}</div>
                ) : null}
              </Col>
            </Row>

            <Button variant="success" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddNewItem;
