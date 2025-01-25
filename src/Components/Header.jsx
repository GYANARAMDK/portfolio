import { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaServicestack,
} from "react-icons/fa";

export default function Header({handlePageChange}) {
  const [DarkMode, SetDarkMode] = useState(false);
  const togglemode = () => {
    SetDarkMode(!DarkMode);
    if (!DarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <>
      <div  >
        <div className=" header flex items-center justify-evenly p-3 sm:p-2 shadow-all-sides rounded-2xl w-fit mx-auto gap-8 sm:12 mt-2 bg-red-400 left-0 right-0 fixed ">
          <div className="hidden sm:block " data-text="[GYANARAM DHAKA] ">
            [GYANARAM DHAKA]
          </div>
          <div className="flex gap-12 sm:gap-8">
            <div className="cursor-pointer relative">
              <FaHome size={20} onClick={()=>{handlePageChange('Home')}} />
              <span
                className="tooltip"
                style={{
                  backgroundColor: DarkMode ? "white" : "black",
                  color: DarkMode ? "black" : "white",
                }}
              >
                HOME
              </span>
            </div>
            <div className="cursor-pointer relative">
              <FaUser size={20} onClick={()=>{handlePageChange('AboutMe')}} />
              <span
                className="tooltip"
                style={{
                  backgroundColor: DarkMode ? "white" : "black",
                  color: DarkMode ? "black" : "white",
                }}
              >
                ABOUTME
              </span>
            </div>
            <div className="cursor-pointer relative">
              <FaServicestack size={20} onClick={()=>{handlePageChange('Services')}}  />
              <span
                className="tooltip"
                style={{
                  backgroundColor: DarkMode ? "white" : "black",
                  color: DarkMode ? "black" : "white",
                }}
              >
                SERVICES
              </span>
            </div>
            <div className="cursor-pointer relative">
              <FaProjectDiagram size={20} onClick={()=>{handlePageChange('Project')}} />
              <span
                className="tooltip"
                style={{
                  backgroundColor: DarkMode ? "white" : "black",
                  color: DarkMode ? "black" : "white",
                }}
              >
                PROJECTS
              </span>
            </div>
            <div className="cursor-pointer relative">
              <FaEnvelope size={20} onClick={()=>{handlePageChange('ContactMe')}} />
              <span
                className="tooltip"
                style={{
                  backgroundColor: DarkMode ? "white" : "black",
                  color: DarkMode ? "black" : "white",
                }}
              >
                CONTACTME
              </span>
            </div>
          </div>

          <div className={`${DarkMode ? "dark" : "light"} hidden sm:block`}>
            <div className="container">
              <button
                className="toggle-btn cursor-pointer p-2 rounded"
                onClick={togglemode}
              >
                {DarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
