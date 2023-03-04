import "../styles/aboutme.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="About__Main" id="About__Main">
      <motion.div
        className="About__Heading"
        initial={{ translateY: "100%", opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="./01.svg" alt="01" />
        <h1 id="Title">About Me</h1>
      </motion.div>
      <motion.div
        className="About__container"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="About__info">
          <h2>
            Hello stranger! 👋, My name is Naman and I am a{" "}
            <span style={{ color: "white" }}>Fullstack developer </span>
            and also interested in{" "}
            <span style={{ color: "white" }}>Web3 technologies.</span> I enjoy
            creating things that live on the internet. My interest in web
            development started back in 2020.
          </h2>
          <h2>
            I'm passionate about building scalable and performant webapps.I like to take responsiblity to craft aesthetic user Experience using mordern frontend architecture.
          </h2>
          <h2><span className="quote" style={{ color: "white" }}>I have a stong obsession for attention to  detail.</span></h2>
        </div>
        <div className="About__profilePic">
          <img src="./nemo2.jpg" alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
