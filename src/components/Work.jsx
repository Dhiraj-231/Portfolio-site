import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import data from "../asserts/data.json";

const Work = () => {
  return (
    <div id="work">
      <h2>Work</h2>
      <div className="workGrid">
        {data.projects.map((item, index) => (
          <motion.article
            className="workCard"
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="thumb">
              <img src={item.imgSrc} alt={item.title} />
              <div className="overlay">
                <a href={item.url} target="_blank" rel="noreferrer" className="viewBtn">
                  View Project <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="techRow">
                {item.tech.map((tech) => (
                  <span className="techTag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Work;
