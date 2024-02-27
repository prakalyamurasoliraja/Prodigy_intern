import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './createtheme.css'

function CreatePage() {
  const [themeImage, setThemeImage] = useState("");
  const [themeName, setThemeName] = useState("");
  const [themePrice, setThemePrice] = useState("");
  const [themeDetails, setThemeDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const requestData = {
        imageUrl: themeImage,
        themeName: themeName,
        themePrice: themePrice,
        themeDetails: themeDetails
      };
  
      const response = await axios.post("http://localhost:8080/theme/", requestData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const formDataObject = {
        themeName: themeName,
        themePrice: themePrice,
        themeDetails: themeDetails,
        themeImage: themeImage
      };
  
      navigate("/themehome", {
        state: {
          formData: formDataObject
        }
      });
    } catch (error) {
      console.error("Error creating theme:", error);
    }
  };

  return (
    <>
    <div className="bo"></div>
    <div className="containerth">
      <div className="form-containerth">
      <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => setThemeImage(e.target.value)}
              placeholder="Image URL"
              required
              />
              </Form.Group>
          <Form.Group className="mb-3">
          <Form.Control
          type="text"
          onChange={(e) => setThemeName(e.target.value)}
          placeholder="Theme Name"
          required
          />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              onChange={(e) => setThemePrice(e.target.value)}
              placeholder="Theme Price"
              required
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Control
              type="text"
              onChange={(e) => setThemeDetails(e.target.value)}
              placeholder="Theme Details"
              required
              />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
              </Button>
              <Link to="/themehome">
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
