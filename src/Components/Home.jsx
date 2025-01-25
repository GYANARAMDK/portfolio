import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import {FaArrowCircleRight} from 'react-icons/fa'
import { forwardRef } from "react";
const Home= forwardRef((props, ref)=>{
  return (
    <div  ref={ref}    className="fade-in h-screen">
      <div className="flex flex-col items-center justify-center niche shaddow-2xl gap-16 ">
        <div className="flex flex-col gap-8 items-center justify-center mt-12 rounded-xl p-4  mt-16">
          <p className="text-2xl">Hii</p>
          <p className="text-xl font-bold text-green-700">
            I am Gyanaram Dhaka
          </p>
          <p className="text-lg text-blue-700 font-bold">
            {" "}
            React.js Frontend Developer
          </p>
          <div className="flex gap-6 items-center w-fit">
            <button className="relative-1 ">
              
              <a href="https://www.instagram.com/dgyanaram/"> <FaInstagram size={40}/></a>
              <span className="tooltip-1">Instagram</span>
            </button>
            <button className="relative-1 ">
              <a href="https://www.linkedin.com/in/gyanaram-dhaka-1287052b8/"><FaLinkedinIn size={40} /></a>
              <span className="tooltip-1">LinkedIn</span>
            </button>
            <button className="relative-1 ">
                <a href="https://github.com/GYANARAMDK"> <FaGithub size={40} /></a>
             
              <span className="tooltip-1">Github</span>
            </button>
            <button className="relative-1 ">
                <a href="https://www.geeksforgeeks.org/user/gyanaramegqs/"><FaEnvelope size={40} /></a>
              <span className="tooltip-1">Code</span>
            </button>
          </div>
        </div>
        <span className="flex items-center justify-center bg-blue-400 rounded-xl p-2 gap-2 ">
          <p className="font-medium  ">{` let's work together `}</p>
          <FaArrowCircleRight/>
        </span>
      </div>
    </div>
  );
});
Home.displayName="Home"
export default Home;