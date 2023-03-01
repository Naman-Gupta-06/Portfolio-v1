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
            Fast-forward to 2022 starting, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio voluptate quia reiciendis eveniet corrupti magni fugit vel consequuntur omnis quisquam minima molestiae incidunt sapiente consequatur repellendus, provident inventore sunt rerum!
          </h2>
          <h2>
            When I am not coding, I am either playing chess, video game, or
            watching a movie. Other times I am reading or learning a new
            language or framework.
          </h2>
        </div>
        <div className="About__profilePic">
          <img src="./nemo2.jpg" alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
