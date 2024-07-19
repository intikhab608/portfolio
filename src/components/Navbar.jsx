import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import pic from "../assets/images/photo.avif";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMuenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Intikhab
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMuenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <MdMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 font-semibold text-xl">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMuenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
