import React from 'react';
import { Row, Col } from 'react-bootstrap';
import exchangePic from '../../assets/Untitled04.png';
import arrow from '../../assets/arrow02.png'
import classes from './Exchange.module.css'
import Button from '../UI/Button';
const Exchange = () => {
  return (
    <section className='py-5 position-relative'>
      <img src={arrow} alt='' className={classes.arrow} />
      <Row className='align-items-center'>
        <Col className='text-center mb-4 mt-md-0'>
          <img src={exchangePic} alt='feedPic' />
        </Col>
        <Col xs={12} md={7}>
          <h1>Team Up - Exchange Surveys and Reports</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dicta praesentium, eaque eos nam dolorum similique distinctio
            deleniti qui. Eveniet est ducimus itaque laboriosam esse tenetur
            ullam consectetur voluptatibus explicabo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            mollitia dolores repellat earum atque. Labore similique dolorum
            totam repellat enim recusandae voluptate
          </p>
          <Button> Learn more </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Exchange;
