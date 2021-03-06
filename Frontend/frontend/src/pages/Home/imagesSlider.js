
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './slider.css';

function Carousels() {
  return (
    <div className='carousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First image</h3>
          <p>Welcome!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousels;