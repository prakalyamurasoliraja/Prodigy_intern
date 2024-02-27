import React from "react";
import "./Upro.css"; // Updated CSS file name
import Pro from "./pro.jpg";
import {Link} from "react-router-dom";
const ProfileCard = () => {
  return (
    <div className="profile-body">
    <div className="profile-card-wrapper"> {/* Updated class name */}
    <div className="profile-card__header">
    <div className="profile-card__header__pic">
    <img className="img-pro" src={Pro} alt="" />
    </div>
    <h2 className="call">John Doe</h2>
    <p className="call1">EMAIL : 727721EUIT110</p>
    <p className="call2">MOBILE : 8976543552</p>
    <p className="call3">USERNAME : JOHN</p>
    <p className="call4">ABOUT : Developer & Designer</p>
    <div className="profile-card__header__link-social">
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <a href="#" className="profile-card-fab fa-twitter"></a>
    <a href="#" className="profile-card-fab fa-github"></a>
          <a href="#" className="profile-card-fab fa-youtube"></a>
        </div>
        <Link to="/coll" className="profile-card-btn">
        Contact Me
        </Link>
          </div>
          </div>
          </div>
          );
        };
        
export default ProfileCard;
