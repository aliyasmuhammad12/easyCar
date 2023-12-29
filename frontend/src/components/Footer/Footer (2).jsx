import React from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const quickLinks = [
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '#',
    display: 'Privacy Policy',
  },
  {
    path: '/cars',
    display: 'Cars Listing',
  },
  {
    path: '/blogs',
    display: 'Cars Listing',
  },
  {
    path: '/contact',
    display: 'Blog',
  },
];
const Footer = () => {

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
              <Link to="/home" className="d-flex align-items-center gap-2">
                     <i className="ri-car-line"></i>
                     <h4 className="logoMini m-0">Easy Car Rent</h4>
              </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Easy Car Rent is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sequi.
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="quick__link p-0 mt-3 ">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Business Details</h5>
              <p className="office__info">Jutial Gilgit 15100</p>
              <p className="office__info">Phone: +923 5548 12417</p>
              <p className="office__info">Email: sajidalishah0011@gmail.com</p>
              <p className="office__info">Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="text-light">Subscibe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer__bottom">
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
