import React, { useState } from 'react';
// import './Button.css'

function ImageSlider() {
    const [slideIndex, setSlideIndex] = useState(1);
  
    const plusSlides = (n) => {
      showSlides(slideIndex + n);
    };
  
    // const currentSlide = (n) => {
    //   showSlides(n);
    // };
  
    const showSlides = (n) => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      if (n > slides.length) setSlideIndex(1);
      if (n < 1) setSlideIndex(slides.length);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");
    };
  
    return (
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" style={{ width: '100%' }} />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" style={{ width: '100%' }} />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style={{ width: '100%' }} />
          <div className="text">Caption Text</div>
        </div>
        {/* Add two more slides with appropriate image sources and captions */}
        {/* ...
        ... */}
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
    );
  }
  

export default ImageSlider();