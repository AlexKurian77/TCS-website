import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "TCS | About";

    const textContainer = document.querySelector('.about-para');
    const aboutName = document.querySelector('.about-name');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 1.5;

      // For about-name
      if (aboutName) {
        const namePosition = aboutName.offsetTop;

        if (scrollPosition >= namePosition) {
          aboutName.style.color = 'var(--other)';
          aboutName.style.opacity = '1';
        } else {
          aboutName.style.opacity = '0.3';
        }
      }

      // For about-para
      if (textContainer) {
        const paragraphs = textContainer.getElementsByTagName('span');

        for (let i = 0; i < paragraphs.length; i++) {
          const paragraphPosition = paragraphs[i].offsetTop;

          if (scrollPosition >= paragraphPosition) {
            paragraphs[i].style.color = 'var(--other)';
            paragraphs[i].style.opacity = '1';
          } else {
            paragraphs[i].style.opacity = '0.3';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <div className="about-text">
        <div className="about-wrapper">
          <div className="about-name">About</div>
          <div className="about-para">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla, </span>
            <span>repellendus harum a odio molestias, perspiciatis numquam fugiat </span>
            <span>optio voluptatibus ipsum eveniet eos nobis tenetur nam error </span>
            <span>similique nisi mollitia temporibus perferendis inventore quae vitae </span>
            <span>incidunt. Molestias excepturi distinctio maxime dicta accusantium? </span>
            <span>Non nemo recusandae ullam natus</span>
          </div>
          <div className="about-button"></div>
        </div>
      </div>
      <div className="about-image">
        <div className="image">
          <img
            src="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/7efe4c5efa6444eaaeb9b1af0fab3a94/assets/cover/298.jpeg"
            alt=""
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
