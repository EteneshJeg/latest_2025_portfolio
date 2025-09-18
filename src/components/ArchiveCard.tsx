import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  des: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="w-full rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          {/* Hide icons on mobile */}
          <FaRegFolder className="text-4xl text-textGreen hidden md:block" />
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen hidden md:block" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">
            {des.length > 150 ? des.slice(0, 150) + "..." : des}
          </p>
        </div>
        {/* Hide tech stack on mobile */}
        <ul className="hidden md:flex text-xs md:text-sm text-textDark flex-wrap gap-2 justify-between">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
