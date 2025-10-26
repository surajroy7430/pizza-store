import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";

const BASE_URL = import.meta.env.VITE_API_URL;

const PizzaSchema = Yup.object().shape({
  image: Yup.string()
    .url("Must be a valid URL")
    .matches(
      /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/,
      "Must be a valid image URL"
    )
    .required("Image URL is required"),
  name: Yup.string()
    .min(5, "Name must be 5 charaters")
    .required("Name is required"),
  description: Yup.string()
    .min(10, "Description must be 10 charaters")
    .required("Description is required"),
  price: Yup.number()
    .min(3, "Price must be 3 digits")
    .required("Price is Required")
    .positive("Must be positive"),
  size: Yup.string()
    .oneOf(["Small", "Medium", "Large"], "Size must be small, medium, or large")
    .required("Size is required"),
});

function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setPizza(response.data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
        toast.error("Failed to fetch pizza data. Please try again.");
      }
    };

    fetchPizza();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.put(`${BASE_URL}/${id}`, values);
      toast.success("Pizza updated successfully!");
      navigate("/pizzas");
    } catch (error) {
      console.error("Error updating pizza:", error);
      toast.error("Failed to update pizza. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/pizzas")}>
          Pizzas
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Edit Pizza Details</Breadcrumb.Item>
      </Breadcrumb>

      <h2>Update Pizza</h2>

      <Formik
        initialValues={{
          image: pizza?.image || "",
          name: pizza?.name || "",
          description: pizza?.description || "",
          price: pizza?.price || "",
          size: pizza?.size || "",
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
                  placeholder="Add image"
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
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default UpdateItem;
