import "../styles/projects.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="Project__Main" id="Project__Main">
      <motion.div
        className="Project__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./02.svg" alt="02" />
        <h1 id="Title">Projects</h1>
      </motion.div>
      <div className="Project__Lists">
        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="Project__info" >
            <h2>Coming Soon</h2>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
