import React from 'react';
import Button from '../UI/Button';
import feedPic from '../../assets/UntitledTest.png';
import { Row, Col } from 'react-bootstrap';

const Feedback = () => {
  return (
    <section className='py-5'>
      <Row className='align-items-center flex-column-reverse flex-md-row'>
        <Col xs={12} md={7}>
          <h1>Gather Feedback Participants</h1>
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
        <Col className='text-center mb-4 mt-md-0'>
          <img src={feedPic} alt='feedPic' />
        </Col>
      </Row>
    </section>
  );
};

export default Feedback;
