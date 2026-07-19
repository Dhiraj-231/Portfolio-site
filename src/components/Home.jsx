import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import me from "../asserts/DhirajR.png";

const techStack = ["React.js", "Node.js", "Spring Boot", "MongoDB"];

const Home = () => {
  const apiCount = useRef(null);
  const crmCount = useRef(null);

  const animateApiCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (apiCount.current.textContent = v.toFixed()),
    });
  };

  const animateCrmCount = () => {
    animate(0, 5, {
      duration: 1.5,
      onUpdate: (v) => (crmCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    badge: {
      initial: { y: -14, opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
      viewport: { once: true },
    },
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
    },
  };

  return (
    <div id="home">
      <section className="heroText">
        <motion.span className="badge" {...animation.badge}>
          <span className="dot" /> Available for opportunities
        </motion.span>

        <motion.h1 {...animation.h1}>
          Hi, I am <br /> Dhiraj Kumar
        </motion.h1>

        <Typewriter
          options={{
            strings: ["Software Engineer", "Full Stack Developer", "MERN & Spring Boot"],
            autoStart: true,
            loop: true,
            cursor: " ",
            wrapperClassName: "typewriterpara",
          }}
        />

        <div className="techPills">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="heroActions">
          <a href="#work" className="primaryBtn">
            View My Work
          </a>
          <a href="#contact" className="secondaryBtn">
            Get In Touch <BsArrowUpRight />
          </a>
          <div className="socialIcons">
            <a href="https://github.com/Dhiraj-231" target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiFillGithub />
            </a>
            <a href="https://linkedin.com/in/dhiraj-ray-849084189" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <AiFillLinkedin />
            </a>
            <a href="mailto:dk194945@gmail.com" aria-label="Email">
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <div className="heroStats">
          <article>
            <p>
              +<motion.span whileInView={animateApiCount} ref={apiCount}></motion.span>
            </p>
            <span>REST APIs Built</span>
          </article>

          <article>
            <p>
              +<motion.span whileInView={animateCrmCount} ref={crmCount}></motion.span>
            </p>
            <span>CRM Systems Shipped</span>
          </article>

          <article data-special>
            <p>Contact</p>
            <span>dk194945@gmail.com</span>
          </article>
        </div>
      </section>

      <section className="heroImage">
        <div className="photoFrame">
          <img src={me} alt="Dhiraj Kumar" />
        </div>
      </section>

      <a href="#work" className="scrollIndicator" aria-label="Scroll to work">
        <FiChevronDown />
      </a>
    </div>
  );
};

export default Home;
