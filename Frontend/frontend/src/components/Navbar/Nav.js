import React from 'react';
import { Container } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import './Nav.css';
function Nav (){
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container fluid>
        <Image
          src="https://i.pinimg.com/564x/d4/0c/2a/d40c2a4b7250497223673f592349ac05.jpg"
          width="100"
          height="70"
          className="d-inline-block align-top"
          alt="Fast service logo"
        />
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQF8mY1qCkRPbSwMpwH_QowfQV6BfZWYUcw&usqp=CAU"
          width="50"
          height="40"
          className="d-inline-block align-top"
          alt="Cart icon"
        />
      </Container>
    </Navbar>
  )
}

export default Nav
