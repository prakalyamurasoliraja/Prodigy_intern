import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [quantity, setQuantity] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [orderPrice, setOrderPrice] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderDetails(id);
  }, [id]);

  const fetchOrderDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/order/${id}`);
      const { quantity, orderDate, orderPrice } = response.data;
      setQuantity(quantity);
      setOrderDate(orderDate);
      setOrderPrice(orderPrice);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const updatedOrder = {
        quantity: quantity,
        orderDate: orderDate,
        orderPrice: orderPrice
      };
  
      await axios.put(`http://localhost:8080/order/${id}`, updatedOrder, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      navigate("/orderhome");
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            type="number"
            placeholder="Quantity"
            required
          />
        </Form.Group>
        <Form.Label>Order Date</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            type="date"
            placeholder="Order Date"
            required
          />
        </Form.Group>
        <Form.Label>Order Price</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={orderPrice}
            onChange={(e) => setOrderPrice(parseInt(e.target.value))}
            type="number"
            placeholder="Order Price"
            required
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
          Update
        </Button>
        <Link className="d-grid gap-2" to="/orderhome">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
