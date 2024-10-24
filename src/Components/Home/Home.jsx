import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {

    const textContainer = document.querySelector('.likha-hua');
    

    const handleScroll = () => {
      if (!textContainer) return;

      const spans = textContainer.getElementsByTagName('span');
      const scrollPosition = window.scrollY + window.innerHeight / 1.5;

      for (let i = 0; i < spans.length; i++) {
        const spanPosition = spans[i].offsetTop;
        

        if (scrollPosition >= spanPosition) {
          spans[i].style.color = 'var(--other)';
          spans[i].style.opacity = '1';
        } 
        else {
          spans[i].style.opacity = '0.3';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main-wrapper'>
      <div className='main'>
        <div className='big-text'>
          <div className='line1'>Reimagining the Future</div>
          <div className='line2'>One Event at a Time</div>
        </div>
        <div className='likha-hua'>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Vel illum error quam minima ipsa ea, quisquam ad iusto ullam</span>
          <span>voluptates sapiente culpa. Quibusdam, blanditiis ex placeat tenetur</span>
          <span>sunt accusantium porro? Lorem ipsum dolor sit amet consectetur</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
