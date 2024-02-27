import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import './homep.css';

function Home14() {
  const [payments, setPayments] = useState([]);
  const [newPaymentFormData, setNewPaymentFormData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.newPayment) {
      const newPayment = location.state.newPayment;
      setPayments((prevPayments) => [...prevPayments, newPayment]);
      setNewPaymentFormData(location.state.formData);
    } else {
      fetchPayments();
    }
  }, [location]);

  const fetchPayments = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:8080/payment", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setPayments(response.data);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  const deletePayment = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/payment/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setPayments(payments.filter((payment) => payment.id !== id));
    } catch (error) {
      console.error("Error deleting payment:", error);
    }
  };

  return (
    <>
      <div className="adhomep">
        <div className="home-containerrrp">
          <br/><br/><br/>
          <center><h1>All Payments</h1></center><br/>
          {payments.length > 0 ? (
            <div className="payments-listp">
              <table className="tablep">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Mode of Payment</th>
                    <th>Amount Paid</th>
                    <th>Payment Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.status}</td>
                      <td>{payment.modeOfPayment}</td>
                      <td>{payment.amountPaid}</td>
                      <td>{payment.paymentDate}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => deletePayment(payment.id)}
                        >
                          Remove 
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No payments found</p>
          )}
          {newPaymentFormData && (
            <div>
              <h2>New Payment Details:</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Status:</td>
                    <td>{newPaymentFormData.get("status")}</td>
                  </tr>
                  <tr>
                    <td>Mode of Payment:</td>
                    <td>{newPaymentFormData.get("modeOfPayment")}</td>
                  </tr>
                  <tr>
                    <td>Amount Paid:</td>
                    <td>{newPaymentFormData.get("amountPaid")}</td>
                  </tr>
                  <tr>
                    <td>Payment Date:</td>
                    <td>{newPaymentFormData.get("paymentDate")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <Link to="/createp">
            <Button className="create-payment-buttonp" variant="primary">Create New Payment</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home14;
