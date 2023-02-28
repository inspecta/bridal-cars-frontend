/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaCopyright,
} from 'react-icons/fa';

const Navigation = () => (
  <>
    <Nav className="nav_container">
      <h3 className="nav_logo">
        Bridal Car <br /> Rental
      </h3>
      <div className="nav_links">
        <Nav.Link href="#">LIST ALL CARS</Nav.Link>
        <Nav.Link href="#1">RESERVE CAR</Nav.Link>
        <Nav.Link href="#2">ADD CAR</Nav.Link>
        <Nav.Link href="#3">DELETE CAR</Nav.Link>
        <Nav.Link href="#4">LIST ALL RESERVATIONS</Nav.Link>
      </div>
      <div className="nav_socials_container">
        <div className="nav_socials">
          <FaFacebookF />
          <FaGithub />
          <FaTwitter />
          <FaGooglePlusG />
          <FaPinterestP />
        </div>
        <div className="nav_copyright">
          <FaCopyright />
          <span>Copyright 2023</span>
        </div>
      </div>
    </Nav>
  </>
);

export default Navigation;
