import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './copytheme.css'

function Home() {
  const [themes, setThemes] = useState([]);
  const [newThemeFormData, setNewThemeFormData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.newTheme) {
      const newTheme = location.state.newTheme;
      setThemes((prevThemes) => [...prevThemes, newTheme]);
      setNewThemeFormData(location.state.formData);
    } else {
      fetchThemes();
    }
  }, [location]);

  const fetchThemes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get("http://localhost:8080/theme/", {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setThemes(response.data);
    } catch (error) {
      console.error("Error fetching themes:", error);
    }
  };

  const deleteTheme = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/theme/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setThemes(themes.filter((theme) => theme.id !== id));
    } catch (error) {
      console.error("Error deleting theme:", error);
    }
  };

  return (
    <>
    <div className="thhome">
    <div className="home-container">
    <center><h1>All Themes</h1></center><br></br>
    {themes.length > 0 ? (
        <div className="themes-list">
        <table className="table">
          <thead>
              <tr>
              <th>Image URL</th>
              <th>Theme Name</th>
              <th>Theme Details</th>
              <th>Theme Price</th>
              <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {themes.map((theme) => (
                <tr key={theme.id}>
                <td><img src={theme.imageUrl} alt="Gift" style={{ width: "190px", height: "130px", paddingTop: "10px" }} /></td>
                <td>{theme.themeName}</td>
                <td>{theme.themeDetails}</td>
                <td>${theme.themePrice}</td>
                    </tr>
              ))}
            </tbody>
            </table>
            </div>
            ) : (
        <p>No themes found</p>
        )}
        {newThemeFormData && (
          <div>
          <h2>New Theme Details:</h2>
          <table className="table">
          <tbody>
          <tr>
          <td>Image URL:</td>
          <td>{newThemeFormData.get("imageUrl")}</td>
          </tr>
          <tr>
          <td>Theme Name:</td>
          <td>{newThemeFormData.get("themeName")}</td>
          </tr>
          <tr>
          <td>Theme Price:</td>
          <td>${newThemeFormData.get("themePrice")}</td>
          </tr>
          <tr>
          <td>Theme Details:</td>
          <td>{newThemeFormData.get("themeDetails")}</td>
            </tr>
            </tbody>
            </table>
            </div>
            )}
            <Link to="/themecreate">
            
            </Link>
            </div>
            </div>
            </>
            );
          }
          
          export default Home;