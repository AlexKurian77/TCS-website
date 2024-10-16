import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    document.title = "TCS | About";
  }, []);
  return (
    <div className="about">
      <div className="about-text">
        <div className="about-wrapper">
          <div className="about-name">About</div>
          <div className="about-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla,
            repellendus harum a odio molestias, perspiciatis numquam fugiat
            optio voluptatibus ipsum eveniet eos nobis tenetur nam error
            similique nisi mollitia temporibus perferendis inventore quae vitae
            incidunt. Molestias excepturi distinctio maxime dicta accusantium?
            Non nemo recusandae ullam natus
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
