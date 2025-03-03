import {
  BsHouse,
  BsFileEarmark,
  BsImages,
  BsHdd,
  BsMenuButton,
  BsEnvelope,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import profile from "../assets/5362647.jpg";

const navItems = [
  {
    name: "Home",
    path: "#home",
    icon: <BsHouse className="text-xl" />,
  },
  {
    name: "About",
    path: "#about",
    icon: <IoPersonOutline className="text-xl" />,
  },
  {
    name: "Resume",
    path: "#",
    icon: <BsFileEarmark className="text-xl" />,
  },
  {
    name: "Portfolio",
    path: "/",
    icon: <BsImages className="text-xl" />,
  },
  {
    name: "Services",
    path: "/",
    icon: <BsHdd className="text-xl" />,
  },

  {
    name: "Dropdown",
    path: "/",
    icon: <BsMenuButton className="text-xl" />,
  },

  {
    name: "Contact",
    path: "/",
    icon: <BsEnvelope className="text-xl" />,
  },
];

interface Props {
  isOpen: boolean;
  
}

export const Header = ({ isOpen }: Props) => {
  return (
    <div
      className={`fixed z-50 lg:translate-x-0 transform transition-transform duration-700 ease-in-out lg:block ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:transition-none
       
      `}
    >
      <div className="w-[300px] shrink-0  bg-[#040b14] h-screen px-[20px] ">
        <div className="flex justify-center items-center py-[15px]">
          <img
            className=" rounded-full w-[120px] border-[8px] border-gray-700"
            src={profile}
            alt="profile"
          />
        </div>
        <a href="#">
          <h1 className=" text-[1.5rem] text-center font-heading-font font-bold mb-[15px]">
            Fernando Herrera
          </h1>
        </a>
        <div className="flex justify-center items-center mb-[20px] gap-2">
          <a
            href="https://www.linkedin.com/in/fernandoherrera2190"
            target="_blank"
            className="rounded-full p-3 bg-gray-700 cursor-pointer transition duration-300 hover:bg-[var(--accent-color)]  "
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/fherrera2190"
            target="_blank"
            className="rounded-full p-3 bg-gray-700 cursor-pointer transition duration-300 hover:bg-[var(--accent-color)] "
          >
            <BsGithub />
          </a>
        </div>
        <nav className="mt-5">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="flex shrink-0 items-center gap-2 py-[20px] px-[10px] cursor-pointer my-[3px] transition duration-1000 text-[var(--nav-color)]"
                >
                  {item.icon}
                  <span className="font-nav-font">{item.name}</span>
                </a>
              </li>
            ))}
            {/* <li className="flex items-center gap-2 py-[15px] px-[10px]">
            <BsHouse className="text-xl" />
            <span className="font-nav-font">Home</span>
          </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};
