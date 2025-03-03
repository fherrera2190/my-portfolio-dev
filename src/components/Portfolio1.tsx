import { Header } from "./Header";
import { About } from "./About";
import { Home } from "./Home";
import { useState } from "react";
import { BsXLg, BsList } from "react-icons/bs";

export const Portfolio1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <button
        className="fixed cursor-pointer rounded-full flex justify-center items-center top-[15px] right-[15px] z-100 bg-[var(--accent-color)] w-[40px] h-[40px] lg:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <BsXLg /> : <BsList className="text-2xl" />}
      </button>
      <div className="flex">
        <Header isOpen={isOpen} />
        <div className="flex flex-col w-full lg:ml-[300px]">
          <Home />
          <About />
        </div>
      </div>
    </>
  );
};
