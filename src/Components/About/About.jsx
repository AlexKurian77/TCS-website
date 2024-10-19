import React, { useEffect } from "react";
import { GlobeDemo } from "../../Globe";
import "./About.css";

const About = () => {
  useEffect(() => {

    const textContainer = document.querySelector('.about-para');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 1.5;

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
          <div className="about-name">
            <span>AB</span>
            <span className="color-orange">O</span>
            <span>UT</span>
          </div>
          <div className="about-para">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla, </span>
            <span>repellendus harum a odio molestias, perspiciatis numquam fugiat </span>
            <span>optio voluptatibus ipsum eveniet eos nobis tenetur nam error </span>
            <span>similique nisi mollitia temporibus perferendis inventore quae vitae </span>
            <span>incidunt. Molestias excepturi distinctio maxime dicta accusantium? </span>
            <span>Non nemo recusandae ullam natus</span>
          </div>
          <div className="about-button">
            <span className="color-orange">J</span>
            <span>OIN </span>
            <span>U</span>
            <span className="color-orange">S</span>
          </div>
        </div>
      </div>
      <div className="about-image">
        <div className="image">
          <GlobeDemo />
        </div>
      </div>
    </div>
  );
};

export default About;
