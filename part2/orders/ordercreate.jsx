import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./order.css"; // Import the CSS file

function CreatePage() {
  const [quantity, setQuantity] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const requestData = {
        quantity: quantity,
        orderDate: orderDate,
        orderPrice: orderPrice
      };
  
      const response = await axios.post("http://localhost:8080/order/", requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
    
  
      navigate("/orderhome", {
        state: {
          formData: formDataObject
        }
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <Form className="d-grid gap-2 order" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3 order">
          <Form.Control
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 order">
          <Form.Control
            type="date"
            onChange={(e) => setOrderDate(e.target.value)}
            placeholder="Order Date"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 order">
          <Form.Control
            type="number"
            onChange={(e) => setOrderPrice(e.target.value)}
            placeholder="Order Price"
            required
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit" className="btn-submit order">
          Submit
        </Button>
        <Link className="d-grid gap-2 order" to="/orderhome">
          <Button variant="info" size="lg" className="btn-home order">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default CreatePage;
