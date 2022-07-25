// import { useState, useEffect } from "react";
// import SliderData from './sliderData'
// import './slider.css'


// function ImagesSlider ({ slides }) 
// {
//   const [currentSlide, setCurrentSlide] = useState(0)
//     useEffect(() => {
//         const slideInterval = setInterval(() => {

//             setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)

//         }, 3000)

//         return () => clearInterval(slideInterval)
//     }, [])


//   return (
//     <div className="carousel">
//       <div className="carousel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)`}}>
//         {slides.map((slide, index) => (
//           <SliderData slide={slide} key={index} />
          
//         ))}
//       </div>
//     </div>
//   );
// }
// export default ImagesSlider;
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import './slider.css';
// import { useState, useEffect } from "react";

function carousel() {
  return (
    <div className='carousel'>
    <Carousel>
      <Carousel.Item interval={3}>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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

export default carousel;