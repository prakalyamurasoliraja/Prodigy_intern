import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Create.css'

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailId, setMailId] = useState("");
  const [selectedGift, setSelectedGift] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchGiftDetails(id);
  }, [id]);

  const fetchGiftDetails = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/gift/${id}`,{ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
      const { name, age, orderDate, address, phoneNumber, mailId, selectedGift, selectedTheme, image } = response.data;
      setName(name);
      setAge(age);
      setOrderDate(orderDate);
      setAddress(address);
      setPhoneNumber(phoneNumber);
      setMailId(mailId);
      setSelectedGift(selectedGift);
      setSelectedTheme(selectedTheme);
    } catch (error) {
      console.error("Error fetching gift details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const updatedGift = {
        name: name,
        age: age,
        orderDate: orderDate,
        address: address,
        phoneNumber: phoneNumber,
        mailId: mailId,
        selectedGift: selectedGift,
        selectedTheme: selectedTheme
      };
  
      await axios.put(`http://localhost:8080/gift/${id}`, updatedGift, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      navigate("/home3");
    } catch (error) {
      console.error("Error updating gift:", error);
    }
  };

  return (
    <>
    <div className="gi"></div>
    <div className="containerad">
    <div className="form-containerad">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Age"
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
        <Form.Label>Address</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
            required
          />
        </Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Label>Mail ID</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
            type="email"
            placeholder="Mail ID"
            required
          />
        </Form.Group>
        <Form.Label>Selected Gift</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={selectedGift}
            onChange={(e) => setSelectedGift(e.target.value)}
            as="select"
            placeholder="Selected Gift"
            required
          >
            <option value="">Select Gift</option>
            <option>Gift 1</option>
            <option>Gift 2</option>
          </Form.Control>
        </Form.Group>
        <Form.Label>Selected Theme</Form.Label>
        <Form.Group className="mb-3">
          <Form.Control
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
            as="select"
            placeholder="Selected Theme"
            required
          >
            <option value="">Select Theme</option>
            <option>Theme 1</option>
            <option>Theme 2</option>
          </Form.Control>
        </Form.Group>
        
        <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
          Update Gift
        </Button>
        <Link className="d-grid gap-2" to="/home3">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
    </div>
    </>
  );
}

export default Edit;
