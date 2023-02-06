import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../asserts/DhirajR.png";
let Home = () => {  
    const  clientcount=useRef(null);
    const  projectcount=useRef(null);
    const animationClientsCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>clientcount.current.textContent=v.toFixed()

        })
    }
    const animationprojectCount=()=>{
        animate(0,500,{
            duration:2,
            onUpdate:(v)=>projectcount.current.textContent=v.toFixed()

        })
    }
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi,I am <br /> Dhiraj rai
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Technophile"],
              autoStart: true,
              loop: true,
              cursor: " ",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:dk194945@gmail.com">
              Hire me
            </a>
            <a href="#work">
              
                Projects <BsArrowUpRight />
              
            </a>
          </div>
          <article>
            <p>
              +<motion.span whileInView={animationClientsCount} ref={clientcount}></motion.span>
            </p>
            <span>Client worldWide</span>
          </article>
          <aside>
            <article>
              <p>
                +<motion.span whileInView={animationprojectCount} ref={projectcount}></motion.span>
              </p>
              <span>Project Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>dk194945@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Dhiraj Photo's"  />
      </section>
      <BsChevronDown/>
    </div>
  );
};

export default Home;
