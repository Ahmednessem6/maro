import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../UI/Button';
import { shape } from '../Research/images';
import classes from './Connect.module.css';
const Connect = () => {
  return (
    <section className={`py-5 px-3 position-relative ${classes.connect}`}>
      <div className='connect_text text-center text-lg-start'>
        <h1 className='fw-bold h2'>
          Connect beautiful, interactive forms to your favorite apps
        </h1>
        <p className=' text-secondary-50 fw-semibold'>
          Sync responses to Google Sheets, Ping people in Slack when someone
          fills out your survey. Sit back and watch your work flow.
        </p>
      </div>
      <Row>
        <Col xs={3}>
          <h2 className='h3 fw-semibold'>Categories</h2>
          <ul className={`p-0 ${classes['connect-list']}`}>
            <li>
              <a
                href='#'
                className={`${classes['connect-list__link']} ${classes.active}`}
              >
                Most Popular
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Analytics & Reporting
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Automation
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Payment & E-commerce
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                CMS
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Collaboration
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Customer Support
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Developer Tools
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Documents
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Email Marketing
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                File Management
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                lead generation
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Online Learning
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Productivity
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Scheduling
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Sales
              </a>
            </li>
            <li>
              <a href='#' className={classes['connect-list__link']}>
                Research CX
              </a>
            </li>
          </ul>
          <img src={shape} className={classes.shape__img} alt='shape' />
        </Col>
      </Row>
      <Row className=' justify-content-center'>
        <Button
          className={`${classes.connect_btn} bg-light text-dark fw-semibold`}
        >
          {' '}
          Load more
        </Button>
      </Row>
    </section>
  );
};

export default Connect;
