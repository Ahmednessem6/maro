import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { feat01, feat02, feat03, star } from './images';
import classes from './Features.module.css';
const Features = () => {
  return (
    <>
      <Row className='py-4'>
        <div className='feature__text text-center text-lg-start'>
          <h1 className='fw-bold'>
            You can Create a survey quick and easy process{' '}
          </h1>
          <p className=' text-black-50 fw-semibold'>
            Create a survey in just minutes and analyze responses in secondes
            with ease
          </p>
        </div>
      </Row>
      <Row className='gap-4 gap-sm-0 position-relative'>
        <Col>
          <Card
            className='m-auto border-0 text-center text-lg-start align-items-center align-items-lg-start'
            style={{ width: '18rem' }}
          >
            <Card.Img
              variant='top'
              src={feat01}
              className={classes['img__resize-ms']}
            />
            <Card.Body className='px-1'>
              <Card.Title>Mobile Surveys</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className='m-auto border-0 text-center text-lg-start align-items-center align-items-lg-start'
            style={{ width: '18rem' }}
          >
            <Card.Img
              variant='top'
              src={feat02}
              className={classes.img__resize}
            />
            <Card.Body className='px-1'>
              <Card.Title>Acquire Feedback</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className='m-auto border-0 text-center text-lg-start align-items-center align-items-lg-start'
            style={{ width: '18rem' }}
          >
            <Card.Img
              variant='top'
              src={feat03}
              className={classes.img__resize}
            />
            <Card.Body className='px-1'>
              <Card.Title>Collaborations</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <img className={classes.feat__star} src={star} alt='star' />
      </Row>
    </>
  );
};

export default Features;
