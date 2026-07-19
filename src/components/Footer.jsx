import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineArrowUp,
  AiOutlineEnvironment,
} from "react-icons/ai";
import mo from "../asserts/dhiraj.jpg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#timeline" },
  { label: "Highlights", href: "#service" },
  { label: "Skills", href: "#testimonial" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="ctaBand">
        <div>
          <h3>Got a project in mind?</h3>
          <p>Let's turn it into something real.</p>
        </div>
        <a href="#contact" className="ctaBtn">
          Let's Talk
        </a>
      </div>

      <div className="footerMain">
        <div className="brandCol">
          <div className="brandRow">
            <img src={mo} alt="Dhiraj Kumar" />
            <span>Dhiraj Kumar</span>
          </div>
          <p className="tagline">Building the web, one commit at a time.</p>
          <p className="location">
            <AiOutlineEnvironment /> Bokaro, Jharkhand, India
          </p>
        </div>

        <div className="linksCol">
          <h4>Quick Links</h4>
          <div className="linksNav">
            {quickLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="connectCol">
          <h4>Let's Connect</h4>
          <div className="socialRow">
            <a href="https://linkedin.com/in/dhiraj-ray-849084189" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Dhiraj-231" target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiFillGithub />
            </a>
            <a href="mailto:dk194945@gmail.com" aria-label="Email">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {year} Dhiraj Kumar. All rights reserved.</p>
        <a href="#home" className="backToTop" aria-label="Back to top">
          <AiOutlineArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
