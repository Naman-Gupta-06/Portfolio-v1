import "../styles/tech.css";
import { motion } from "framer-motion";

const Tech = () => {
  const skills = [
    "React",
    "Javascript",
    "Express.js",
    "Node.js",
    "Mongodb",
    "C++",
    "MySQL",
    "Tailwind Css",
    "Github",
    "Figma",
  ];
  return (
    <div className="Tech__Main" id="Tech__Main">
      <motion.div
        className="Tech__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./03.svg" alt="03" />
        <h1 id="Title">Skills</h1>
      </motion.div>

      <div className="Tech__Container">
        <div className="Tech__Skills_Name">
          {skills.map((skill, index) => {
            return (
              <motion.h3
                className="skill_name"
                key={index}
                initial={{ translateY: "-100%", opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ delay: 0.12 * index }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
