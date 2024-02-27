import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import './crudcreate.css';
import CrudArray from "./crudarray";

function Crudcreate() {
  const [giftURL, setGiftURL] = useState("");
  const [quantity, setQuantity] = useState("");
  const [giftDetails, setGiftDetails] = useState("");
  const [giftPrice, setGiftPrice] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const defaultImage = 'default_image_url'; // Replace with your default image URL

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (giftURL === "" || quantity === "" || giftDetails === "" || giftPrice === "" || image === null) {
      alert("Invalid input");
      return;
    }
  
    const id = uuid().slice(0, 8);
    const newGift = {
      id,
      giftURL: giftURL,
      quantity: quantity,
      giftDetails: giftDetails,
      giftPrice: giftPrice,
      Image: URL.createObjectURL(image), // Ensure this line uses createObjectURL
    };
  
    CrudArray.push(newGift);
    navigate("/home5");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="create55">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <form className="moon-form">
        <div className="moon-form-group" controlId="formBasicGiftURL">
          <input
            onChange={(e) => setGiftURL(e.target.value)}
            type="text"
            placeholder="Enter Gift URL"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicQuantity">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="Enter Quantity"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicGiftDetails">
          <input
            onChange={(e) => setGiftDetails(e.target.value)}
            type="text"
            placeholder="Enter Gift Details"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicGiftPrice">
          <input
            onChange={(e) => setGiftPrice(e.target.value)}
            type="number"
            placeholder="Enter Gift Price"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicImage">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="moon-button primary"
          type="submit"
        >
          Submit
        </button>

        <Link className="moon-form-link" to="/home5">
          <button className="moon-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Crudcreate;
