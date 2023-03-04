import "../styles/footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="Footer">
      <motion.div
          className="footer-text"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        > Developed  by @nemo </motion.div>
    </footer>
  );
};

export default Footer;
