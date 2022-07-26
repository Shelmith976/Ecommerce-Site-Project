import React from 'react';
import { Container } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () =>{
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container fluid>
        <Image
          src="https://i.pinimg.com/564x/d4/0c/2a/d40c2a4b7250497223673f592349ac05.jpg"
          width="50"
          height="70"
          className="d-inline-block align-top me-3"
          alt="Fast service logo"
        />
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="me-3" variant="outline-success">Search</Button>
        </Form>
        <div className="cart">
        <Link to={"/Cart"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link>
        <span>0</span></div>
        <div className="d-grid">
        <Link to="/register"><button className="btn btn-sm btn-outline-success mb-2">Register</button></Link>
        <Link to="/login"><button className="btn btn-sm btn-outline-success">Login</button></Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Nav
