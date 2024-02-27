import React from 'react';
import './Payment.css'; // Import the CSS file

const paymentHistory = [
  {
    paymentId: 1,
    userId: 123,
    status: "Successful",
    totalAmount: 100.00,
    paymentDate: "2024-01-31",
    modeOfPayment: "Credit Card"
  },
  {
    paymentId: 2,
    userId: 123,
    status: "Successful",
    totalAmount: 100.00,
    paymentDate: "2024-01-31",
    modeOfPayment: "Credit Card"
  },
  {
    paymentId: 3,
    userId: 456,
    status: "Failed",
    totalAmount: 50.00,
    paymentDate: "2024-01-30",
    modeOfPayment: "PayPal"
  },
  {
    paymentId: 4,
    userId: 456,
    status: "Failed",
    totalAmount: 50.00,
    paymentDate: "2024-01-30",
    modeOfPayment: "PayPal"
  },
  {
    paymentId: 5,
    userId: 456,
    status: "Failed",
    totalAmount: 50.00,
    paymentDate: "2024-01-30",
    modeOfPayment: "PayPal"
  },
  // Add more payment objects as needed
];

function PaymentHistory() {
  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th className="payment-header">Payment ID</th>
            <th className="payment-header">User ID</th>
            <th className="payment-header">Status</th>
            <th className="payment-header">Total Amount</th>
            <th className="payment-header">Payment Date</th>
            <th className="payment-header">Mode of Payment</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map(payment => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.userId}</td>
              <td>{payment.status}</td>
              <td>{payment.totalAmount}</td>
              <td>{payment.paymentDate}</td>
              <td>{payment.modeOfPayment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistory;