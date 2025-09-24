import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import SectionTitle from "./SectionTitle";
import { TbBrandGithub } from "react-icons/tb";

const Projects = () => {
  return (
    <section id="project" className="lg:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://linktech12.com/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/linktechimg.png"}
                alt="linktechimg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">LinkTech Wireless</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Developed an{" "}
              <span className="text-textGreen">
                Electronics Repair Service{" "}
              </span>
              platform integrated with{" "}
              <span className="text-textGreen">RIA payments</span>. The platform
              allows customers to manage repair requests and payments
              seamlessly.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://linktech12.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://youtu.be/uRBQZDxLTdg"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/examprepimg.png"}
                alt="Examprepimage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Exam Preparation Platform</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A user-friendly{" "}
              <span className="text-textGreen">Exam Preparation Platform </span>
              designed to help students excel with{" "}
              <span className="text-textGreen">study materials</span>,
              <span className="text-textGreen">summaries</span>, practice
              questions, and
              <span className="text-textGreen"> interactive quizzes</span>.
              Includes a secure{" "}
              <span className="text-textGreen">admin dashboard</span> for
              managing study content and quizzes effectively.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>PHP</li>
              <li>MySQL</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/EteneshJeg/Exam_Preparation"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/uRBQZDxLTdg"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://eteneshgishamo12.vercel.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/portfolioimg.png"}
                alt="3DPortfolio"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">3D Portfolio Website</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              I designed and developed a modern{" "}
              <span className="text-textGreen">3D portfolio website</span>{" "}
              showcasing my skills using cutting-edge tools. Key features
              include stunning 3D visuals and animations with{" "}
              <span className="text-textGreen">ThreeJS</span> and{" "}
              <span className="text-textGreen">React Three Fiber</span>, smooth
              transitions via{" "}
              <span className="text-textGreen">Framer Motion</span>, and
              responsive styling using{" "}
              <span className="text-textGreen">Tailwind CSS</span>. A contact
              form with email functionality is also included.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Three.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/EteneshJeg/3D_portfolio"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.youtube.com/watch?v=hu5648vUWAg"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://eteneshgishamo12.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
