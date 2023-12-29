import React, { useRef } from 'react';

import { Container } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/cars',
    display: 'Cars',
  },

  {
    path: '/blogs',
    display: 'Blog',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header">

      <div className="main__navbar">
        <Container>
          
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
                <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                     <i className="ri-car-line"></i>
                     <h4 className="logoMini m-0">Easy Car Rent</h4>
                </Link>
                </h1>
              </div>
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                    }
                    key={index}>
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
          
              <div className="header__top__right d-flex align-items-center flex gap-3">
                <Link to="/LoginSignup" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> Login/Register
                </Link>
              </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
