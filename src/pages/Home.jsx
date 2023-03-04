import "../styles/home.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="Home__Main">
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Hi, {"  "}my name is
      </motion.p>
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Naman Gupta.
      </motion.h1>
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
         <div className="nemo"> <h2 style={{display:"flex"}}>A &nbsp;
        
         <Typewriter
         options={{
          autoStart: true,
          loop: true,
        }}
        
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(" full Stack Developer")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString(" freelancer")
       .pauseFor(1000)
       .deleteAll()
       .typeString(" mentor")
       .start();
       }}
       /></h2></div>
   
  
      </motion.h2>

      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
      </motion.h5>
      <motion.a
        href="#Project__Main"
        className="viewLink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        VIEW PROJECTS
      </motion.a>
    </div>
  );
};

export default Home;
