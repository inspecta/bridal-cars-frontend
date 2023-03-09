import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const handleSignOut = () => {
    const user = JSON.parse(localStorage.getItem('user')).token;
    dispatch(logoutUser(user)).then((result) => {
      if (
        result.payload !== undefined
        && Object.keys(result.payload).length > 0
        && result.payload.status === 200
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
          Bridal Car
          {' '}
          <br />
          {' '}
          Rental
        </h3>
        <div className="nav_links">
          <Nav.Link
            as={Link}
            to="/cars"
            className={location.pathname === '/cars' && 'active'}
            onClick={() => setSideNav(false)}
          >
            CARS
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/reserve-car"
            onClick={() => setSideNav(false)}
          >
            RESERVE CAR
          </Nav.Link>
          <Nav.Link as={Link} to="/add-car" onClick={() => setSideNav(false)}>
            ADD CAR
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/delete-car"
            onClick={() => setSideNav(false)}
          >
            DELETE CAR
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/my-reservations"
            onClick={() => setSideNav(false)}
          >
            MY RESERVATIONS
          </Nav.Link>
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
