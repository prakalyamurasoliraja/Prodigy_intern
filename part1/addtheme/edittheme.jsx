import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import './edittheme.css'

function Edit() {
  const [imageUrl, setImage] = useState("");
  const [themeName, setThemeName] = useState("");
  const [themePrice, setThemePrice] = useState("");
  const [themeDetails, setThemeDetails] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchThemeDetails(id);
  }, [id]);

  const fetchThemeDetails = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/theme/${id}`,
      {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}`
        }
      });
      const { imageUrl,themeName, themePrice, themeDetails } = response.data;
      setImage(imageUrl);
      setThemeName(themeName);
      setThemePrice(themePrice);
      setThemeDetails(themeDetails);
    } catch (error) {
      console.error("Error fetching theme details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token');
      const updatedTheme = {
        imageUrl: imageUrl,
        themeName: themeName,
        themePrice: themePrice,
        themeDetails: themeDetails
      };
  
      await axios.put(`http://localhost:8080/theme/${id}`, updatedTheme, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      navigate("/themehome");
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  };

  return (
    <div>
    <div className="bo"></div>
    <div className="containerth">
    <Form className="form-containerth" style={{ margin: "5rem" }}>
    <Form.Group className="mb-3">
    <Form.Label>Image URL</Form.Label>
    <Form.Control
            value={imageUrl}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Image URL"
            required
            />
        </Form.Group>
        <Form.Label>Theme Name</Form.Label>
        <Form.Group className="mb-3">
        <Form.Control
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
            type="text"
            placeholder="Theme Name"
            required
            />
        </Form.Group>
        <Form.Label>Theme Price</Form.Label>
        <Form.Group className="mb-3">
        <Form.Control
        value={themePrice}
        onChange={(e) => setThemePrice(e.target.value)}
        type="number"
        placeholder="Theme Price"
        required
        />
        </Form.Group>
        <Form.Label>Theme Details</Form.Label>
        <Form.Group className="mb-3">
        <Form.Control
        value={themeDetails}
        onChange={(e) => setThemeDetails(e.target.value)}
        type="text"
        placeholder="Theme Details"
        required
        />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit" size="lg">
        Update
        </Button>
        <Link className="d-grid gap-2" to="/themehome">
        <Button variant="warning" size="lg">
        Home
        </Button>
        </Link>
        </Form>
        </div>
        </div>
        );
      }
      
export default Edit;