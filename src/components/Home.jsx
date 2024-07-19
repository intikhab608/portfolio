import React from "react";
import pic from "../assets/images/photo.avif";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFiletypeJava } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAngular } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24 mt-12 space-y-1 order-2 md:order-1">
            <span className="text-xl font-semibold">Welcome To My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold ">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              I'm Intikhab Ansari, a dedicated web developer with a knack for
              creating dynamic and responsive websites. With a strong foundation
              in both front-end and back-end technologies, I strive to build web
              applications that provide seamless user experiences and robust
              functionalities. Whether you're looking for a simple landing page
              or a complex web application, I'm here to bring your ideas to
              life.
            </p>
            <br />
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-semibold text-center">Available On</h1>
                <ul className="flex space-x-5">
                  <li className="text-2xl cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/intikhabansari"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="text-2xl cursor-pointer">
                    <a href="https://www.facebook.com/login/" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="text-2xl cursor-pointer">
                    <a
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-semibold text-center">Currently Working In</h1>
                <div className="flex space-x-4">
                  <IoLogoJavascript className="text-xl cursor-pointer hover:scale-125 duration-200 " />
                  <BsFiletypeJava className="text-xl cursor-pointer hover:scale-125 duration-200 " />
                  <FaAngular className="text-xl cursor-pointer hover:scale-125 duration-200 " />
                  <SiSpringboot className="text-xl cursor-pointer hover:scale-125 duration-200 " />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-[400px]" alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
