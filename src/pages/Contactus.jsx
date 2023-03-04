import "../styles/contactus.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram,FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <>
      <div className="Contact__Main" id="Contact__Main">
        <motion.div
          className="Contact__Heading"
          initial={{ translateY: "100%", opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src="./04.svg" alt="03" />
          <h1 id="Title">Contact Me</h1>
        </motion.div>
        <div className="Contact__Container">
          <h2>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </h2>

          <div className="Contact__Links">
            <h3>
              <span id="">Interested in <span className="text-strong">Collaboration</span>?</span>{" "}
              <span id="wave">👋</span>
            </h3>

            <h4>Get In Touch with me
            <div className="Contack__Link__div">
              <a
                href='mailto:namangupta990@gmail.com'
                target="_blank"
                className="con__link"
              >
                <FaEnvelope /> <span>Say Hi</span>
              </a>

            </div>
            </h4>
          </div>

          {/* <div className="Email_Link h-20">
            <a href="mailto:namangupta990@gmail.com">
              📧 namangupta990@gmail.com
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contactus;
