import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <div>
      <AboutContainer>
        <StyledImage src={codingSvg} />

        <HeaderContainer>
          <h1>
            About Software Developer <span>MtAppTech </span>
          </h1>
        </HeaderContainer>
        <InfoContainer>
          <h2>Hi, I'am MtAppTech</h2>
          <h3>I’m currently learning Full-Stack Development Languages.</h3>
          <h4>
            I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
            Java, Hibernate, SpringBoot, AWS Services.
          </h4>
          <h2>
            <a href="mailto:mt.app.tech@gmail.com">Send email</a> :
            mt.app.tech@gmail.com
          </h2>
          {/* whatsapp://tel:3216541234 */}
        </InfoContainer>
      </AboutContainer>
    </div>
  );
};

export default About;
