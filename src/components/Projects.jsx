import React from "react";
import java from "../assets/images/java.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpg";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.webp";
import spring from "../assets/images/spring.png";
import springBoot from "../assets/images/springBoot.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "java",
    },
    {
      id: 2,
      logo: javascript,
      name: "javascript",
    },
    {
      id: 3,
      logo: html,
      name: "html",
    },
    {
      id: 4,
      logo: css,
      name: "css",
    },
    {
      id: 5,
      logo: spring,
      name: "spring",
    },
    {
      id: 6,
      logo: springBoot,
      name: "springboot",
    },
  ];

  function onVideoClick(){
    alert("Video will be added soon!");
  }
  function onSourceClick(){
    alert("Source Code will be added soon!");
  }
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div className="md:w-[250px] p-1 border-[2px] rounded-lg cursor-pointer hover:scale-110 duration-200 shadow-lg" key={id}>
              <img src={logo} alt="" className="w-[120px] h-[120px] rounded-full border-[2px] p-1"/>
              <div>
                <div className="px-2 text-xl font-bold mb-2">{name}</div>
                <p className="px-2">
                  These are not the projects, I will add my projects later.
                </p>
              </div>
              <div className="space-x-4 px-2 justify-around py-2">
                <button className="bg-blue-500 border-[1px] rounded-md text-white text-xl font-semibold p-1 cursor-pointer hover:bg-blue-700" onClick={onVideoClick}>Video</button>
                <button className="bg-green-500 border-[1px] rounded-md text-white text-xl font-semibold p-1 cursor-pointer hover:bg-green-700" onClick={onSourceClick}>Source Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
