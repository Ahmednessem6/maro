// import React from 'react';

// const TheNavBar = () => {
//   return (
//     <nav className=' d-flex justify-content-between align-items-center'>
//       <ul className='nav__container d-flex gap-4 align-items-center '>
//         <li className='nav__list'>
//           <a href='#' className='nav__link'>
//             Templates
//           </a>
//         </li>
//         <li className='nav__list'>
//           <a href='#' className='nav__link'>
//             Product
//           </a>
//         </li>
//         <li className='nav__list'>
//           <a href='#' className='nav__link'>
//             pricing
//           </a>
//         </li>
//       </ul>
//       <div className='nav__buttons'>
//         <button>Login</button>
//         <button>Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default TheNavBar;

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import Button from '../UI/Button';
// import classes from './TheNavBar.module.css';
import './TheNavBar.css';
const TheNavBar = () => {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand href='#home'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto gap-3'>
          <NavDropdown title='Templates' id='basic-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#home'>Product</Nav.Link>
          <Nav.Link href='#link'>Pricing</Nav.Link>
        </Nav>
        <div className='d-flex gap-3'>
          <Button className='bg-transparent fw-semibold border-0 text-dark'>
            Login
          </Button>
          <Button className=' text-bg-dark p-2 rounded-3'>Get Started</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavBar;
