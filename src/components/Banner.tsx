import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section id="home" className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Etenesh Gishamo.
        <span className="text-textDark mt-2 lg:mt-4">
          Full Stack Developer|PHP|Laravel & Generative AI Developer
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I build web, mobile, and AI-powered applications with a strong
        foundation in front-end and back-end development. Skilled in React,
        Node.js, Laravel, React Native, and modern AI frameworks, I focus on
        delivering reliable, user-friendly solutions.{" "}
      </motion.p>
      <a href="https://github.com/EteneshJeg/" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
