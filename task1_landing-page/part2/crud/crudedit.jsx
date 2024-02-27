import React, { useEffect, useState } from "react";
import CrudArray from "./crudarray";
import { Link, useNavigate } from "react-router-dom";
import './crudcreate.css';

function Crudedit() {
  const [giftURL, setGiftURL] = useState("");
  const [quantity, setQuantity] = useState("");
  const [giftDetails, setGiftDetails] = useState("");
  const [giftPrice, setGiftPrice] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const defaultImage = 'default_image_url'; // Replace with your default image URL

  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity === "" || giftDetails === "" || giftPrice === "") {
      alert("Invalid input");
      return;
    }

    const index = CrudArray.findIndex(item => item.id === id);
    if (index !== -1) {
      CrudArray[index].giftURL = defaultImage;
      CrudArray[index].quantity = quantity;
      CrudArray[index].giftDetails = giftDetails;
      CrudArray[index].giftPrice = giftPrice;
      CrudArray[index].Image = image;
    }

    navigate("/home5");
  };

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedGiftURL = localStorage.getItem("giftURL");
    const storedQuantity = localStorage.getItem("quantity");
    const storedGiftDetails = localStorage.getItem("giftDetails");
    const storedGiftPrice = localStorage.getItem("giftPrice");
    const storedImage = localStorage.getItem("giftimage");

    setId(storedId);
    setGiftURL(storedGiftURL);
    setQuantity(storedQuantity);
    setGiftDetails(storedGiftDetails);
    setGiftPrice(storedGiftPrice);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="create55">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <form className="moon-form" onSubmit={handleSubmit}>
        <div className="moon-form-group" controlId="formBasicGiftURL">
          <input
            value={giftURL}
            onChange={(e) => setGiftURL(e.target.value)}
            type="text"
            placeholder="Enter Gift URL"
          />
        </div>

        <div className="moon-form-group" controlId="formBasicQuantity">
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="Enter Quantity"
          />
        </div>

        <div className="moon-form-group" controlId="formBasicGiftDetails">
          <input
            value={giftDetails}
            onChange={(e) => setGiftDetails(e.target.value)}
            type="text"
            placeholder="Enter Gift Details"
          />
        </div>

        <div className="moon-form-group" controlId="formBasicGiftPrice">
          <input
            value={giftPrice}
            onChange={(e) => setGiftPrice(e.target.value)}
            type="number"
            placeholder="Enter Gift Price"
          />
        </div>

        <div className="moon-form-group" controlId="formBasicImage">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <button
          className="moon-button primary"
          type="submit"
          size="lg"
        >
          Update
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

export default Crudedit;
