/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import Button from 'react-bootstrap/Button';
import { logoutUser } from '../../redux/features/user';
import { triggerAlert } from '../../redux/features/alert';

const Navigation = () => {
  const [sideNav, setSideNav] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const user = JSON.parse(localStorage.getItem('user')).token;
    dispatch(logoutUser(user)).then((result) => {
      if (
        result.payload !== undefined &&
        Object.keys(result.payload).length > 0 &&
        result.payload.status === 200
      ) {
        navigate('/');
        localStorage.removeItem('user');
      } else {
        dispatch(
          triggerAlert({
            heading: 'Error Signing Out',
            message: "Please check if you're signed in and try again!",
            variant: 'warning',
          }),
        );
      }
    });
  };
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
          <Button
            variant="outline-danger"
            className="log_out_btn"
            onClick={handleSignOut}
          >
            LOG OUT
          </Button>

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
