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
          <div className="Project__info">
            <h2>Portfolio</h2>
            <h3>
            A website to showcase my expertise and passion as a web developer through a variety of projects.
            </h3>

            <div className="Project__Btns">
              <a
                href="https://namangupta.live/"
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/Naman-Gupta-06/Portfolio-v1"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>Feamer Motion</p>
              <p>Css</p>
            </div>
          </div>
            
          </div>
        </motion.div>

        <motion.div
          className="Project__Box"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="Project__info" >
          <div className="Project__info">
            <h2>Meri Dukaan</h2>
            <h3>
              It is a Web application that facilitates the  in an easy and interactive manner through the use
              of Giphy Api
            </h3>

            <div className="Project__Btns">
              <a
                href=""
                target="_blank"
                className="Project__btn"
              >
                <FiExternalLink />
              </a>
              <a
                href=""
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#Auth</p>
              <p>#Tailwind Css</p>
             <p>Express</p>
            </div>
          </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
