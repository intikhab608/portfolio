import React from "react";
import java from "../assets/images/java.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.jpg";
import javascript from "../assets/images/javascript.png";
import python from "../assets/images/python.webp";
import spring from "../assets/images/spring.png";
import springBoot from "../assets/images/springBoot.jpg";

function Experience() {
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
    {
        id: 7,
        logo: python,
        name: "python",
      }
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="font-semibold">I've more than 2 years of experiance in below technologies.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div className="flex flex-col items-center justify-center md:w-[200px] md:h-[200px] border-[2px] rounded-full cursor-pointer hover:scale-110 duration-200 " key={id}>
              <img src={logo} alt="" className="w-[150px] rounded-full "/>
              <div>
                <div className="px-2 text-xl font-semibold mb-2">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
