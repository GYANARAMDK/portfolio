import { forwardRef } from "react";


const Project =forwardRef((props,ref)=> {
  return (
    <div ref={ref} className="mt-4 ">
        <div className="flex items-center justify-center border border-[#808080] p-3 m-4">
                      <h1 className="text-xl font-bold">Projects</h1>
        </div>
      <div className="grid grid-cols-1 gap-2 border m-4 rounded border-[#808080] p-3">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 ">
          <video
            controls
            poster="project1image.png"
            alt="hello "
            className=" w-full sm:w-1/2 object-cover; border border-[#808080] bg-red-300 rounded h-full"
          />

          <div className=" flex flex-col w-full sm:2-full border border-[#808080] rounded p-3">
            <h1 className="text-xl ">E-Commerce App</h1>
            <p className="text-[#808080]">
              An online platform for seamless product browsing, purchasing, and
              order management.
            </p>
            <h1 className="text-xl  ">Description</h1>
            <p className="text-[#808080]">
              This app provides an intuitive shopping experience with features
              like product search, cart management, secure payment integration,
              and responsive design.
            </p>
            <h1 className="text-xl ">Technology</h1>
            <ul>
              <li className="text-[#808080]">
                Frontend: React, Redux, Tailwind CSS
              </li>
              <li className="text-[#808080]">Backend: Node.js, Express.js</li>
              <li className="text-[#808080]">Database: MongoDB</li>
            </ul>
            <h1 className="text-xl">Link</h1>
            <div className="flex items-center justify-start gap-3 ">
              <a href="https://air-byte-4ckq-git-main-gyanaramdks-projects.vercel.app/AirByte">
                <button className="border border-[#808080] rounded px-2 hover:bg-blue-700">
                  {" "}
                  live Demo
                </button>
              </a>
              <a href="https://github.com/GYANARAMDK/AirByte">
                {" "}
                <button className="border border-[#808080] rounded px-2 hover:bg-blue-700">
                  {" "}
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2 ">
          <video
            controls
            poster="project2image.png"
            alt="hello "
            className=" w-full sm:w-1/2 object-cover; border border-[#808080] bg-red-300 rounded h-full"
          />

          <div className=" flex flex-col w-full sm:2-full border border-[#808080] rounded p-3">
            <h1 className="text-xl ">Social Media App</h1>
            <p className="text-[#808080]">
              An online platform for seamless connection between peoples and real time messaging app
            </p>
            <h1 className="text-xl  ">Description</h1>
            <p className="text-[#808080]">
            A platform for users to connect, share content, and interact through posts, comments, likes, and follows. 
            Features real-time notifications with Socket.io and image/video uploads powered by Cloudinary.
            </p>
            <h1 className="text-xl ">Technology</h1>
            <ul>
              <li className="text-[#808080]">
                Frontend: React, Redux, Tailwind CSS
              </li>
              <li className="text-[#808080]">Backend: Node.js, Express.js</li>
              <li className="text-[#808080]">Database: MongoDB</li>
              <li className="text-[#808080]">Real-time: Socket.io</li>
              <li className="text-[#808080] ">Media management Cloudinary</li>
            </ul>
            <h1 className="text-xl">Link</h1>
            <div className="flex items-center justify-start gap-3 ">
              <a href="https://message-app-virid.vercel.app/">
                <button className="border border-[#808080] rounded px-2 hover:bg-blue-700">
                  {" "}
                  live Demo
                </button>
              </a>
              <a href="https://github.com/GYANARAMDK/MessageApp">
                {" "}
                <button className="border border-[#808080] rounded px-2 hover:bg-blue-700">
                  {" "}
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Project.displayName= 'Project'
export default Project;
