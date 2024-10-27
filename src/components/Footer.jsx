import React from 'react';
import { Container, Row, Col, Image, Nav, NavItem, NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-container" style={{ backgroundColor: '#000' }}>
      <Container fluid className='mt-5'>
        <Row>
          <Col md={3}>
            <Image src="logo.png" alt="Logo" className="logo" />
            <div className="social-media-icons">
              <Nav>
                <NavItem>
                  <NavLink href="https://facebook.com" target="_blank">
                    <i className="fa fa-facebook" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://twitter.com" target="_blank">
                    <i className="fa fa-twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://instagram.com" target="_blank">
                    <i className="fa fa-instagram" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?..."
                width="100%"
                height="150"
                
                allowFullScreen
              />
            </div>
            <p className="copyright-text" style={{ color: '#fff' }}>
              &copy; 2024 Company Name. All rights reserved.
            </p>
            
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#fff' }}>Quick Links</h5>
            <ul>
              <li>
                <NavLink href="/" style={{ color: '#fff' }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/services" style={{ color: '#fff' }}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink href="/portfolio" style={{ color: '#fff' }}>
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#fff' }}>Our Services</h5>
            <ul>
              <li>
                <NavLink href="/service1" style={{ color: '#fff' }}>
                  Service 1
                </NavLink>
              </li>
              <li>
                <NavLink href="/service2" style={{ color: '#fff' }}>
                  Service 2
                </NavLink>
              </li>
              <li>
                <NavLink href="/service3" style={{ color: '#fff' }}>
                  Service 3
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: '#fff' }}>Get in Touch</h5>
            <ul>
              <li>
                <NavLink href="mailto:info@example.com" style={{ color: '#fff' }}>
                  Email Us
                </NavLink>
              </li>
              <li>
                <NavLink href="tel:+1234567890" style={{ color: '#fff' }}>
                  Call Us
                </NavLink>
              </li>
              <li>
                <NavLink href="/visit" style={{ color: '#fff' }}>
                  Visit Us
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;