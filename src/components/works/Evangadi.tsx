import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Evangadi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer
        <span className="text-textGreen tracking-wide">@Evangadi Network Team</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2024 - Sep 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed an <strong>Electronics Repair platform</strong> with integrated <strong>RIA payments</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built a user-friendly frontend using <strong>React, Vite, and Tailwind CSS</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented a robust backend with <strong>Node.js, Express, and PostgreSQL</strong>.
        </li>
      </ul>
    </motion.div>
  );
};

export default Evangadi;
