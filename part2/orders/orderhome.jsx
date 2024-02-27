import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const [orders, setOrders] = useState([]);
  const [newOrderFormData, setNewOrderFormData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.newOrder) {
      const newOrder = location.state.newOrder;
      setOrders((prevOrders) => [...prevOrders, newOrder]);
      setNewOrderFormData(location.state.formData);
    } else {
      fetchOrders();
    }
  }, [location]);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:8080/order/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/order/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setOrders(orders.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="home-container">
      <center><h1>All Orders</h1></center><br></br>
      {orders.length > 0 ? (
        <div className="orders-list">
          <table className="table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Order Date</th>
                <th>Order Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.quantity}</td>
                  <td>{order.orderDate}</td>
                  <td>${order.orderPrice}</td>
                  <td>
                    <Link to={`/orderedit/${order.id}`}>
                      <Button variant="info">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => deleteOrder(order.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found</p>
      )}
      {newOrderFormData && (
        <div>
          <h2>New Order Details:</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Quantity:</td>
                <td>{newOrderFormData.get("quantity")}</td>
              </tr>
              <tr>
                <td>Order Date:</td>
                <td>{newOrderFormData.get("orderDate")}</td>
              </tr>
              <tr>
                <td>Order Price:</td>
                <td>${newOrderFormData.get("orderPrice")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <Link to="/ordercreate">
        <Button variant="primary">Create New Order</Button>
      </Link>
    </div>
  );
}

export default Home;
