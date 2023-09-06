import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { facebook, instagram, linkedin, twitter, youtube } from './images';
import classes from './Footer.module.css';
const Footer = () => {
  return (
    <footer className='py-5'>
      <Row>
        <Col xs={12} sm={6}>
          <ul className='p-0'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Resources</li>
            <li>Engineering</li>
            <li>View Pricing</li>
            <li>Uses for Startup</li>
          </ul>
        </Col>
        <Col>
          <ul className='p-0'>
            <li>Contact Us</li>
            <li>Try it Free</li>
            <li>Help Center</li>
            <li>Country site map</li>
          </ul>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={6} lg={4} className='mb-3 mb-md-0'>
          CopyRight
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3 mb-md-0'>
          <ul className=' d-flex gap-4 p-0 flex-wrap'>
            <li className={`${classes['center-item']} position-relative`}>
              Termn of Services
            </li>
            <li className={`${classes['center-item']} position-relative`}>
              Privacy Policy
            </li>
            <li className={`${classes['center-item']} position-relative`}>
              Cookies
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div
            className={`${classes['social-media']} d-flex justify-content-start justify-content-md-end align-items-center gap-2`}
          >
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='' />
            <img src={linkedin} alt='' />
            <img src={twitter} alt='' />
            <img src={youtube} alt='' />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
