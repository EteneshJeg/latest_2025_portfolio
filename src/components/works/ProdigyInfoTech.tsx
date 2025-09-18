import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const ProdigyInfoTech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer Intern
        <span className="text-textGreen tracking-wide">@Prodigy Info Tech</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Apr 2024 - Jun 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3 hidden md:flex">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained and updated web applications using{" "}
          <strong>HTML, CSS, and JavaScript</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Applied <strong>problem-solving skills</strong> to improve
          functionality and user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Earned <strong>certification and recommendation</strong> for strong
          technical contributions.
        </li>
      </ul>
    </motion.div>
  );
};

export default ProdigyInfoTech;
