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
                href="https://github.com/Naman-Gupta-06/Portfolio-v1"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#Framer Motion</p>
              <p>#css</p>
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
            <h2>Virtual Meet</h2>
            <h3>
            Virtual Meet is a full-stack project that allows users to create virtual rooms and participate in group video calls and chat with other members of the room.
            </h3>

            <div className="Project__Btns">
             
              <a
                href="https://github.com/Naman-Gupta-06/Virtual-Meet"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#auth</p>
              <p>#tailwind Css</p>
             <p>#express</p>
             <p>#socket.io</p>
             <p>#webRTC</p>
             <p></p>
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
            <h2>Card Fraud Interception Plugin</h2>
            <h3>
            This is a geolocation-based transaction plugin that can be used in ATMs to combat card fraud. It provides banks with quantitative statistics based on the number of ATMs in use. </h3>

            <div className="Project__Btns">
             
              <a
                href="https://github.com/Naman-Gupta-06/RNA-MINOR-2023-24"
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
             <p>#Flask</p>
             <p>#Postgress SQL</p>
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
            <h2>Meri-Dukaan</h2>
            <h3>
            This web application is built using MERN stack. It allows users to browse and purchase products similar to the Amazon website.</h3>
            <div className="Project__Btns">
             
              <a
                href="https://github.com/Naman-Gupta-06/Meri-Dukan"
                target="_blank"
                className="Project__btn github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="Project__techUsed">
              <p>#react</p>
              <p>#Auth</p>
             <p>#Firebase</p>
             <p>#Mongodb</p>
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
