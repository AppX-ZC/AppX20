import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__navigation">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="footer__navigationLine">HOME</h2>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h2 className="footer__navigationLine">ABOUT</h2>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <h2 className="footer__navigationLine">BLOG</h2>
        </Link>
        <Link to="/gift-shop" style={{ textDecoration: "none" }}>
          <h2 className="footer__navigationLine">GIFT SHOP</h2>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <h2 className="footer__navigationLine">CONTACT</h2>
        </Link>
      </div>
      <div className="footer__info">
        <div className="footer__infoLine">
          <LocationOnIcon className="footer__info__Icon" />
          <p className="footer__info__Text">
            Zewail City of Science and Technology , Sheikh Zayed District , 6th
            of October City , 12588 , Giza, Egypt
          </p>
        </div>
        <div className="footer__infoLine">
          <PhoneIcon className="footer__info__Icon" />
          <p className="footer__info__Text">123456796 - 123456789</p>
        </div>
        <div className="footer__infoLine">
          <EmailIcon className="footer__info__Icon" />
          <p className="footer__info__Text">appx@appx.com</p>
        </div>
        <div className="footer_info__social">
          <div className="footer__info__socialIcon">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>in</h3>
            </Link>
          </div>
          <div className="footer__info__socialIcon">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <h3>f</h3>
            </Link>
          </div>
          <div className="footer__info__socialIcon">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <EmailIcon />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="footer__image"
        style={{ backgroundImage: "url('images/ZCmap.png')" }}
      >
        <LocationOnIcon className="footer__imageIcon" />
      </div>
    </div>
  );
}

export default Footer;
