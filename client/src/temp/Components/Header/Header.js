import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../UI/Button';

import { img01, shape01, branch, star } from './images';
import classes from './Header.module.css';
const Header = () => {
  return (
    <Row
      className={`align-items-center my-3 position-relative  text-center text-md-start ${classes.header}`}
    >
      <Col xs={12} md={7} lg={6}>
        <h1 className='lh-2 fs-1 fw-bolder'>
          Experience The Craft Of <br /> Survey Creation
        </h1>
        <p
          className={`text-black-50 fw-semibold my-4 ${classes['indexing-z']}`}
        >
          Easily design survey in a matter of minutes. Access your audience on
          all platforms. <br />
          Observe results visually and in real-time
        </p>
        <Button className={classes['indexing-z']}>Request a Demo</Button>
      </Col>
      <Col>
        <img className={classes['header__img']} src={img01} alt='img01' />
        <img
          className={classes['header-shapeOne']}
          src={shape01}
          alt='shape01'
        />
      </Col>
      <img className={classes.header__branch} src={branch} alt='branch' />
      <img className={classes.header__star} src={star} alt='star' />
    </Row>
  );
};

export default Header;
