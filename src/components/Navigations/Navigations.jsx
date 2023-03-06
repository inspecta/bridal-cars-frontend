/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaCopyright,
} from 'react-icons/fa';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

const Navigation = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
      {sideNav === false && (
        <button
          type="button"
          className="hamburger_menu"
          onClick={() => setSideNav('show_nav')}
        >
          <GiHamburgerMenu />
        </button>
      )}
      <Nav className={`nav_container ${sideNav}`}>
        {sideNav === 'show_nav' && (
          <button
            type="button"
            className="cancel_menu"
            onClick={() => setSideNav(false)}
          >
            <GiCancel />
          </button>
        )}
        <h3 className="nav_logo">
          Bridal Car <br /> Rental
        </h3>
        <div className="nav_links">
          <Nav.Link href="/cars">LIST ALL CARS</Nav.Link>
          <Nav.Link href="#1">RESERVE CAR</Nav.Link>
          <Nav.Link href="/add-car">ADD CAR</Nav.Link>
          <Nav.Link href="/delete-car">DELETE CAR</Nav.Link>
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
};

export default Navigation;
