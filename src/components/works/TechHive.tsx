import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const TechHive = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">@TechHive Technology Solutions</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed backend features using <strong>Laravel</strong> to support employee management and ID card system workflows.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built and optimized frontend interfaces with <strong>React</strong> to deliver a smooth and user-friendly experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented and tested <strong>React Native</strong> mobile features, including <strong>Google Maps integration</strong>.
        </li>
      </ul>
    </motion.div>
  );
};

export default TechHive;
