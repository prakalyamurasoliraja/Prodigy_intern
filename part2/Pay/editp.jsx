import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import './editp.css';

function Edit() {
  const [status, setStatus] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);
  const [paymentDate, setPaymentDate] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPaymentDetails(id);
  }, [id]);

  const fetchPaymentDetails = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/payment/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const { status, modeOfPayment, amountPaid, paymentDate } = response.data;
      setStatus(status);
      setModeOfPayment(modeOfPayment);
      setAmountPaid(amountPaid);
      setPaymentDate(paymentDate);
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const updatedPayment = {
        status: status,
        modeOfPayment: modeOfPayment,
        amountPaid: amountPaid,
        paymentDate: paymentDate
      };

      await axios.put(`http://localhost:8080/payment/${id}`, updatedPayment, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      navigate("/copyp");
    } catch (error) {
      console.error("Error updating payment:", error);
    }
  };

  return (
    <>
      <div className="edit-containerp">
        <h1>Edit Payment</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Payment
          </Button>
          <Link to="/homep" className="btn btn-warning ml-2">
            Cancel
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Edit;
