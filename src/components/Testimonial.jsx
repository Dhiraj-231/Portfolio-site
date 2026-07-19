import React from "react";
import { FaJava, FaReact, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    icon: <FaJava />,
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    icon: <FaReact />,
    title: "Frontend",
    skills: ["React.js", "Redux", "Zustand", "Tailwind CSS", "Material UI", "HTML5", "CSS3"],
  },
  {
    icon: <FaServer />,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "REST APIs",
      "JWT",
      "Socket.IO",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    skills: ["MongoDB", "Aggregations & Indexing", "MySQL"],
  },
  {
    icon: <FaTools />,
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "PM2", "Swagger", "Postman", "Apache Tomcat"],
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Tech Stack</h2>

      <section className="skillsGrid">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} {...group} />
        ))}
      </section>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <article>
    <header>
      <span className="icon-tile">{icon}</span>
      <h4>{title}</h4>
    </header>
    <div className="skillTags">
      {skills.map((skill) => (
        <span className="tag" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  </article>
);

export default Testimonial;
