import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const OdooIntern = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Odoo Application Developer Intern
        <span className="text-textGreen tracking-wide">
          @Purpose Black Ethiopia
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Sep 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3 hidden md:flex">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Customized <strong>Odoo modules</strong> to meet specific client
          requirements.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with the team to design and implement{" "}
          <strong>new features</strong>.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized <strong>performance and workflows</strong> to improve
          efficiency.
        </li>
      </ul>
    </motion.div>
  );
};

export default OdooIntern;
