import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const KodersLab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Development Instructor
        <span className="text-textGreen tracking-wide">@Koders Lab</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2023 - Jan 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Taught <strong>HTML, CSS, and JavaScript</strong> to aspiring developers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led <strong>hands-on projects</strong> to strengthen practical coding skills.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Mentored students and guided them through <strong>real-world problem-solving</strong>.
        </li>
      </ul>
    </motion.div>
  );
};

export default KodersLab;
