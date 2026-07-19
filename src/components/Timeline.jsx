import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import data from "../asserts/data.json";

const icons = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
};

const Timeline = () => {
  return (
    <div id="timeline">
      <h2>Experience</h2>
      <div className="timelineBox">
        {data.experience.map((item, index) => (
          <motion.div
            className="timelineItem"
            key={item.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <span className="node">{icons[item.type]}</span>
            <div className="content">
              <span className="date">{item.date}</span>
              <h3>{item.role}</h3>
              <p className="place">{item.place}</p>
              <p className="desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
