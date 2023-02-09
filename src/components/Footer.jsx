import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import mo from "../asserts/dhiraj.jpg"
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={mo}
          alt="Founder"
        />

        <h2>Dhiraj Rai</h2>
        <p>If you're going through hell, keep going</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/dhiraj_rai_01" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Dhiraj-231" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};


export default Footer;