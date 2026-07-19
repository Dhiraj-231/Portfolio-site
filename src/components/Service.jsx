import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaDatabase } from "react-icons/fa";

const highlights = [
  {
    stat: "5+",
    label: "Custom CRM Systems Shipped",
  },
  {
    icon: <FaReact />,
    label: "Full-Stack Development (MERN)",
  },
  {
    icon: <FaJava />,
    label: "Java & Spring Boot Backend",
  },
  {
    icon: <FaDatabase />,
    label: "REST APIs & MongoDB Optimization",
  },
];

const Service = () => {
  return (
    <div id="service">
      <h2>Highlights</h2>
      <section className="highlightsGrid">
        {highlights.map((item, index) => (
          <motion.div
            className="highlightCard"
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="tile">{item.stat || item.icon}</span>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Service;
