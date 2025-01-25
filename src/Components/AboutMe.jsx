import { forwardRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { FaNodeJs, FaServer } from "react-icons/fa";

const  AboutMe= forwardRef((props,ref) =>{
  const [show, setshow] = useState(false);
  const togglehandle = (index) => {
    if (show === index) setshow(null);
    else setshow(index);
  };
  return (
    <div ref={ref} className="mt-4">
      <div className="flex items-center justify-center border border-[#808080] m-4 p-3">
        <h1 className="text-xl font-bold">About Me</h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 p-4 mt-4 ">
        <div className=" rounded-xl flex flex-col items-start justify-between  border border-[#808080] ">
          <div className="flex flex-col items-start justify-center w-full gap-1 p-2  ">
            <div className="flex items-center  justify-center bg-blue-700 w-full  border border-[#808080]  rounded-xl p-3 box-border ">
              <h1 className="text-2xl">Information </h1>
            </div>
            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl  ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl font-semibold">who I am </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(0);
                  }}
                />
              </div>
              {show === 0 && (
                <div className="px-3 pb-1 text-[#808080] ">
                  I am Gyanaram Dhaka, a frontend developer. I specialize in
                  creating user-friendly, interactive and visually appealling
                  interface for websites and applications
                </div>
              )}
            </div>
            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl  ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl  font-semibold">Interest </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(1);
                  }}
                />
              </div>
              {show === 1 && (
                <div className="px-3 pb-1 text-[#808080]">
                  I am interested in frontend technologies like React and Vue.js
                  as well as backend technologies like Node.js. I am also
                  exploring cloud services like AWS to build scalable web
                  Applications
                </div>
              )}
            </div>
            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl font-semibold">Age </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(2);
                  }}
                />
              </div>
              {show === 2 && (
                <div className="px-3 pb-1 text-[#808080]">
                  I celebrate my birthday on 4 march [4 march 2003]
                </div>
              )}
            </div>
            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl  ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl font-semibold">Hobbies </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(3);
                  }}
                />
              </div>
              {show === 3 && (
                <div className="px-3 pb-1 text-[#808080]">
                  I love to play badminton, which helps me stay active and
                  refreshed. I also love to design figma modal of substance
                </div>
              )}
            </div>
            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl  ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl font-semibold">Email </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(4);
                  }}
                />
              </div>
              {show === 4 && (
                <div className="px-3 pb-1 text-[#808080]">
                  <a href="gyanaramnitian@gmail.com" className="text-blue-700">
                    {" "}
                    gyanaramnitian@gmail.com
                  </a>{" "}
                  is my official email to connect.
                </div>
              )}
            </div>

            <div className="flex flex-col w-full  border-[#808080] border  rounded-xl  ">
              <div className="flex items-center sm:items-start justify-between w-full  p-3   ">
                <h1 className="text-xl font-semibold">From </h1>
                <FaArrowDown
                  size={20}
                  onClick={() => {
                    togglehandle(5);
                  }}
                />
              </div>
              {show === 5 && (
                <div className="px-3 pb-1 text-[#808080]">
                  I am from churu, Rajasthan (331802 ) India .
                </div>
              )}
            </div>
          </div>
          <div className="p-2 flex items-center justify-between w-full">
            <div className="flex items-center justify-center hover:bg-blue-600 cursor-pointer  border border-[#808080]  rounded-xl p-3 box-border ">
              <a href="gYANARAMDHAKA (1).pdf" download="GyanaramResume">
                {" "}
                DAWNLOAD MY MYRESUME
              </a>
            </div>
            <div className="flex items-center justify-center hover:bg-blue-600 cursor-pointer  border border-[#808080]  rounded-xl p-3 box-border ">
              more about me
            </div>
          </div>
        </div>
        <div className="  rounded-xl  border border-[#808080]">
          <div className="flex flex-col items-start justify-center w-full gap-1 p-2">
            <div className="flex items-center justify-center bg-blue-700 w-full  border border-[#808080]  rounded-xl p-3 box-border ">
              <h1 className="text-2xl">Skills </h1>
            </div>
            <div className="flex items-center justify-start    border border-[#808080]  rounded-xl p-3 box-border ">
              <h1> Frontend Developement</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3  w-full p-4 gap-4 ">
              <div className="flex items-center justify-center scale">
                <FaHtml5 size={96} className="text-red-600" />
              </div>
              <div className="flex items-center justify-center scale">
                <FaCss3 size={96} className="text-blue-600" />
              </div>
              <div className="flex items-center justify-center scale">
                <FaJsSquare size={96} className="text-yellow-600" />
              </div>
              <div className="flex items-center justify-center scale">
                <FaReact size={96} className="text-blue-600" />
              </div>
              <div className="flex items-center justify-center scale">
                <img
                  src="Tailwind_CSS_Logo.svg"
                  alt=""
                  className=" w-24 h-24  "
                />
              </div>
            </div>
            <div className="flex items-center justify-start    border border-[#808080]  rounded-xl p-3 box-border ">
              <h1> Backend Developement</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full p-4 gap-4">
              <div className="flex items-center justify-center scale">
                <FaNodeJs size={96} className="text-[#8CC84B]" />
              </div>
              <div className="flex items-center justify-center scale">
                <FaServer size={96} className="text-[#808080]" />
              </div>
              <div className="flex items-center justify-center scale">
                <img
                  src="aws.logo.png"
                  alt=""
                  className=" w-24 h-24 rounded-xl  "
                />
              </div>
            </div>
            <div className="flex items-center justify-start    border border-[#808080]  rounded-xl p-3 box-border ">
              <h1> Database and Tools</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 w-full p-4 gap-4">
              <div className="flex items-center justify-center scale">
                <img
                  src="mongodb.logo.png"
                  alt=""
                  className=" w-24 h-24 rounded-xl  "
                />
              </div>
              <div className="flex items-center justify-center scale">
                <img
                  src="mysql.logo.png"
                  alt=""
                  className=" w-24 h-24 rounded-xl  "
                />
              </div>
              <div className="flex items-center justify-center scale">
                <FaGithub size={96} />
              </div>
              <div className="flex items-center justify-center scale">
                <FaGitAlt size={96} />
              </div>
              <div className="flex items-center justify-center scale">
                <FaFigma size={96} />
              </div>

              <div className="flex items-center justify-center scale">
                <img
                  src="vscode.logo.png"
                  alt=""
                  className=" w-24 h-24 rounded-xl  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName="AboutMe"
export default AboutMe;
