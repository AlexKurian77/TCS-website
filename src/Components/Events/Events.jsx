import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Event.css';

const Events = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="events-section">
      <div className="background-image" style={{ opacity: bgOpacity }}></div>

      <div className="content-wrapper">
        <div className="section-title">
          <span>PAST EV</span>
          <span style={{color:"#f46700"}}>EN</span>
          <span>TS</span>
        </div>
        <Slider {...settings} className="slider">
          <div className="event-card">
            <img
              src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/7efe4c5efa6444eaaeb9b1af0fab3a94/assets/cover/298.jpeg"
              alt=""
              className="event-image"
            />
            <h3 className="event-title">Hack Genesis 2023-24</h3>
            <p className="event-description">This is the description of the event.</p>
          </div>
          <div className="event-card">
            <img
              src="https://assets.collegedunia.com/public/college_data/images/appImage/16220967431589889779166.jpg"
              alt=""
              className="event-image"
            />
            <h3 className="event-title">Event Title 2</h3>
            <p className="event-description">This is the description of the event.</p>
          </div>
          <div className="event-card">
            <img
              src="https://ncr.christuniversity.in/uploads/campus/large/1358090958_2021-06-25_08-39-31.png"
              alt=""
              className="event-image"
            />
            <h3 className="event-title">Event Title 3</h3>
            <p className="event-description">This is the description of the event.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Events;
