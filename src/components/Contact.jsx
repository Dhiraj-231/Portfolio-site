import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import {
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
    } catch (error) {
      toast.error("Error");
    } finally {
      setDisableBtn(false);
    }
  };

  const animations = {
    intro: {
      initial: { x: "-60px", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
    },
    form: {
      initial: { x: "60px", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
    },
  };

  return (
    <div id="contact">
      <h2>Contact</h2>

      <div className="contactContainer">
        <motion.div className="contactIntro" {...animations.intro}>
          <span className="eyebrow">Get In Touch</span>
          <h3>Let's build something great together</h3>
          <p className="lead">
            Have a project in mind, a role to discuss, or just want to talk full-stack
            engineering? My inbox is open — I usually reply within a day.
          </p>

          <ul className="contactInfo">
            <li>
              <AiOutlineEnvironment /> Bokaro, Jharkhand, India
            </li>
            <li>
              <AiOutlinePhone />
              <a href="tel:+919341504880">+91 9341504880</a>
            </li>
            <li>
              <AiOutlineMail />
              <a href="mailto:dk194945@gmail.com">dk194945@gmail.com</a>
            </li>
          </ul>

          <div className="socialRow">
            <a href="https://linkedin.com/in/dhiraj-ray-849084189" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <AiOutlineLinkedin />
            </a>
            <a href="https://github.com/Dhiraj-231" target="_blank" rel="noreferrer" aria-label="GitHub">
              <AiOutlineGithub />
            </a>
          </div>
        </motion.div>

        <motion.form onSubmit={submitHandler} className="contactForm" {...animations.form}>
          <div className="formRow">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
          <button disabled={disableBtn} className={disableBtn ? "disableBtn" : ""} type="submit">
            {disableBtn ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
