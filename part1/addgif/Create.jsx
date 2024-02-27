import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Create.css';

function CreatePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailId, setMailId] = useState("");
  const [selectedGift, setSelectedGift] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const requestData = {
        name: name,
        age: age,
        orderDate: orderDate,
        address: address,
        phoneNumber: phoneNumber,
        mailId: mailId,
        selectedGift: selectedGift,
        selectedTheme: selectedTheme
      };
  
      const response = await axios.post("http://localhost:8080/gift/", requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      navigate("/home3");
    } catch (error) {
      console.error("Error creating theme:", error);
    }
  };

  return (
    <>
    <div className="gi"></div>
    <div className="containerad">
    <div className="form-containerad">
    <Form>
    <Form.Group className="mb-3">
    <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            />
            </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
          type="number"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
          />
          </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
        type="date"
        onChange={(e) => setOrderDate(e.target.value)}
        placeholder="Order Date"
        required
        />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
        />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control
            type="tel"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control
          type="email"
          onChange={(e) => setMailId(e.target.value)}
          placeholder="Email"
          required
          />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control
          as="select"
          onChange={(e) => setSelectedGift(e.target.value)}
          placeholder="Select Gift"
          required
          >
          <option value="">Select Gift</option>
          <option>Gift 1</option>
          <option>Gift 2</option>
          </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control
          as="select"
          onChange={(e) => setSelectedTheme(e.target.value)}
          placeholder="Select Theme"
          required
          >
          <option value="">Select Theme</option>
          <option>Theme 1</option>
          <option>Theme 2</option>
          </Form.Control>
          </Form.Group>
          
          <Button onClick={handleSubmit} variant="primary" type="submit">
          Add Gift
          </Button>
          <Link className="d-grid gap-2" to="/home3">
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
        