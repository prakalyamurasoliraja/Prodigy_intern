import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './createp.css';

function CreatePage() {
  const [status, setStatus] = useState("ordered");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]); // Initialize with today's date
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const requestData = {
        status: status,
        modeOfPayment: modeOfPayment,
        amountPaid: amountPaid,
        paymentDate: paymentDate
      };

      const response = await axios.post("http://localhost:8080/payment", requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      navigate("/homep");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from the server");
      } else {
        // Something else happened while setting up the request
        setError("Error creating payment: " + error.message);
      }
    }
  };

  return (
    <>
      <div className="gip"></div>
      <div className="containeradp">
        <div className="form-containeradp">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Mode of Payment</Form.Label>
              <Form.Control
                type="text"
                value={modeOfPayment}
                onChange={(e) => setModeOfPayment(e.target.value)}
                placeholder="Mode of Payment"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount Paid</Form.Label>
              <Form.Control
                type="number"
                value={amountPaid}
                onChange={(e) => setAmountPaid(parseInt(e.target.value))}
                placeholder="Amount Paid"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Date</Form.Label>
              <Form.Control
                type="date"
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                placeholder="Payment Date"
                required
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="primary" type="submit">
              Add Payment
            </Button>
            <Link className="d-grid gap-2" to="/homep">
              <Button variant="info" size="lg">
                Home
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
