import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./curdhome.css";
import CrudArray from "./crudarray";

function Crudhome() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function setID(id, giftURL, quantity, giftDetails, giftPrice, Image) {
    localStorage.setItem("id", id);
    localStorage.setItem("giftURL", giftURL);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("giftDetails", giftDetails);
    localStorage.setItem("giftPrice", giftPrice);
    localStorage.setItem("giftImage", Image);
  }

  function deleted(id) {
    let index = CrudArray.findIndex((item) => item.id === id);

    if (index !== -1) {
      CrudArray.splice(index, 1);
    }

    navigate("/home5");
  }

  const filteredArray = CrudArray.filter((item) =>
    item.giftURL.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sun1">
    <div className="sun-container">

    <input
        type="text"
        placeholder="Search by Gift URL"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="sun-search-bar"
        />

        <div className="sun-records">
        {filteredArray.map((item) => (
          <div key={item.id} className="sun-record">
            <div className="sun-record-content">
            <div>
            {/* Displaying the uploaded image if available, otherwise use a static image */}
            <img
                  src={item.Image || "path_to_static_image"}
                  alt="Gift"
                  className="sun-image"
                  />
                  </div>
                  <div>
                <strong>Gift URL:</strong> {item.giftURL}
              </div>
              <div>
                <strong>Quantity:</strong> {item.quantity}
              </div>
              <div>
              <strong>Gift Details:</strong> {item.giftDetails}
              </div>
              <div>
              <strong>Gift Price:</strong> {item.giftPrice}
              </div>
              <div>
                  </div>
                  </div>
                  </div>
                  ))}
                  </div>
    </div>
    </div>
    );
  }
  
  export default Crudhome;