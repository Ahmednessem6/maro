import React from 'react';
import { resPic, arrow, shape, tick, flower, shape2 } from './images';
import { Row, Col } from 'react-bootstrap';
import Button from '../UI/Button';
import classes from './Research.module.css';
const Research = () => {
  return (
    <Row className='py-5 align-items-center position-relative gap-2'>
      <img src={flower} alt='flower' className={classes.flower__img} />
      <Col>
        <img src={arrow} alt='arrow' className={classes.research__arrow} />
        <img src={resPic} alt='resPic' />
      </Col>
      <Col xs={12} md={7} lg={6} className=' position-relative'>
        <img src={shape} alt='shape' className={classes.shape__img} />
        <img src={shape2} alt='shape' className={classes.shapeTwo__img} />
        <div className='research__text'>
          <h1 className='fw-bold'>Craft Research Surveys</h1>
          <p className='fw-semibold text-secondary'>
            Looking For a surveys Tool that lets you customize your surveys ?
            with our <br />
            customizable themes and easy-to-use interface, you can create a
            customize survey that looks feel like you
          </p>
        </div>
        <ul className='p-0'>
          <li className=' d-flex align-items-center gap-2 mb-2'>
            <img className={classes.tick__img} src={tick} alt='' />
            <p className='m-0'>Explore a vast selection of question formats</p>
          </li>
          <li className=' d-flex align-items-center gap-2'>
            <img className={classes.tick__img} src={tick} alt='' />
            <p className='m-0'>
              Quickly Arrange Questions with Drag-and-Drop Feature
            </p>
          </li>
        </ul>
        <Button>Learn More</Button>
      </Col>
    </Row>
  );
};

export default Research;
