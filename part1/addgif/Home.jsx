import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './Home.css';

function Home14() {
  const [gifts, setGifts] = useState([]);
  const [newGiftFormData, setNewGiftFormData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.newGift) {
      const newGift = location.state.newGift;
      setGifts((prevGifts) => [...prevGifts, newGift]);
      setNewGiftFormData(location.state.formData);
    } else {
      fetchGifts();
    }
  }, [location]);

  const fetchGifts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:8080/gift/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setGifts(response.data);
    } catch (error) {
      console.error("Error fetching gifts:", error);
    }
  };

  const deleteGift = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/gift/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setGifts(gifts.filter((gift) => gift.id !== id));
    } catch (error) {
      console.error("Error deleting gift:", error);
    }
  };

  return (
    <>
    <div className="adhome">
    <div className="home-containerrr">
    <br></br><br></br><br></br>
    <center><h1>All Gifts</h1></center><br></br>
    {gifts.length > 0 ? (
        <div className="gifts-list">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Order Date</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Mail ID</th>
                <th>Selected Gift</th>
                <th>Selected Theme</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {gifts.map((gift) => (
              <tr key={gift.id}>
                  <td>{gift.name}</td>
                  <td>{gift.age}</td>
                  <td>{gift.orderDate}</td>
                  <td>{gift.address}</td>
                  <td>{gift.phoneNumber}</td>
                  <td>{gift.mailId}</td>
                  <td>{gift.selectedGift}</td>
                  <td>{gift.selectedTheme}</td>
                  
                  <td>
                    <Link to={`/edit/${gift.id}`}>
                      <Button variant="info">Edit</Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => deleteGift(gift.id)}
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
        <p>No gifts found</p>
        )}
      {newGiftFormData && (
        <div>
          <h2>New Gift Details:</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Image URL:</td>
                <td>{newGiftFormData.get("image")}</td>
                </tr>
              <tr>
                <td>Name:</td>
                <td>{newGiftFormData.get("name")}</td>
                </tr>
                <tr>
                <td>Age:</td>
                <td>{newGiftFormData.get("age")}</td>
                </tr>
              <tr>
                <td>Order Date:</td>
                <td>{newGiftFormData.get("orderDate")}</td>
                </tr>
              <tr>
                <td>Address:</td>
                <td>{newGiftFormData.get("address")}</td>
                </tr>
              <tr>
              <td>Phone Number:</td>
              <td>{newGiftFormData.get("phoneNumber")}</td>
              </tr>
              <tr>
                <td>Mail ID:</td>
                <td>{newGiftFormData.get("mailId")}</td>
              </tr>
              <tr>
                <td>Selected Gift:</td>
                <td>{newGiftFormData.get("selectedGift")}</td>
              </tr>
              <tr>
                <td>Selected Theme:</td>
                <td>{newGiftFormData.get("selectedTheme")}</td>
                </tr>
                </tbody>
                </table>
                </div>
                )}
                <Link to="/create">
                <Button className="create-gift-button" variant="primary">Create New Gift</Button>
      </Link>
      </div>
      </div>
      </>
      );
}

export default Home14;
