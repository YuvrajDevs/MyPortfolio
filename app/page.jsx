import React from 'react';
import localFont from "next/font/local";
import Image from 'next/image';
import logo from './public/Yuvraj.png';
import pic from './public/pic.png';
import code from './public/code.png'
import ui from './public/ui.png'
import analysis from './public/analysis.png'
import ml from './public/ml.png'

const Oswald = localFont({
  src: "./fonts/Oswald.ttf",
  weight: "100 900",
});

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="flex addm justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <Image src={logo} alt="Logo" className="w-16 " />
        <div className="hidden sm:flex items-center gap-4 md:gap-8 lg:gap-16">
          <h3 className="text-sm md:text-base">About me</h3>
          <h3 className="text-sm md:text-base">Projects</h3>
          <h3 className="text-sm md:text-base">Contact</h3>
        </div>
      </header>

      {/* Hero Section */}
      <div className="min-h-[80vh] addm flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full md:w-[60vw] mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin">Hey, I am</h2>
          <h1 className={`text-5xl sm:text-6xl   lg:text-7xl ${Oswald.className}`}>Yuvraj Singh Shekhawat</h1>
          <p className="mt-5 text-base  md:text-lg sm:text-lg lg:text-xl font-light max-w-full md:max-w-[60vw]">
          a dedicated student skilled in design and development.
          My passion lies in transforming imaginative ideas into
          visually engaging designs that truly connect with users.
          Through a blend of creative flair and industry best
          practices, I create intuitive and refined solutions that
          breathe life into your concepts. Whether I'm crafting
          designs or coding, I find joy in bringing my projects to
          life, ensuring each one tells a compelling story with
          seamless functionality and thoughtful design
          </p>
          <button className="py-2 flex  items-center gap-3 mt-10 px-4 sm:px-6 text-lg sm:text-xl hover:bg-white hover:text-black duration-200 font-medium border-solid border-white border-2 rounded-lg">
            Contact
          </button>
        </div>
        <div className="w-full md:w-[40vw] flex justify-center items-center">
          <div className="eyes-container flex space-x-4 sm:space-x-8">
            <div className="eye">
              <div className="pupil"></div>
            </div>
            <div className="eye">
              <div className="pupil"></div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="border-solid mb-20 min-h-screen">
        <div className="overflow-hidden rotate-[3deg] my-8 sm:my-12 lg:my-16 ">
          <marquee className='border-t-2 border-b-2 py-1 bg-[#252525]' behavior="scroll" direction="left" scrollamount="4">
          <span className="mx-8 text-2xl mx-[150px]">Web Design</span>
          <span className="mx-8 text-2xl mx-[150px]">Ui Ux Design</span>
          <span className="mx-8 text-2xl mx-[150px]">Web Development</span>
          <span className="mx-8 text-2xl mx-[150px]">Data Analysis</span>
          <span className="mx-8 text-2xl mx-[150px]">Web Design</span>
          <span className="mx-8 text-2xl mx-[150px]">Ui Ux Design</span>
          <span className="mx-8 text-2xl mx-[150px]">Web Development</span>
          <span className="mx-8 text-2xl mx-[150px]">Data Analysis</span>
          </marquee>
        </div>

        <div className='addm  mt-[100px] mb-[150px] px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col  gap-8 lg:gap-20'>
            <div className="w-full ">
              <h1 className={`text-6xl sm:text-7xl lg:text-7xl mb-8 ${Oswald.className}`}>About me</h1>
              <ul className="list-disc  pl-5 space-y-4 text-sm font-light sm:text-lg">
                <li><span className='text-lg font-medium'> Web Developer: </span>Skilled in building responsive, dynamic websites using the latest web technologies, ensuring both performance and design excellence.</li>
                <li><span className='text-lg font-medium'> Versatile UI/UX Designer: </span>Experienced in crafting intuitive and engaging user experiences with a focus on aesthetics and functionality.</li>
                <li><span className='text-lg font-medium'> Data-Driven Decision Making: </span>Proficient in analyzing data to derive insights, improve designs, and optimize user interactions.</li>
                <li><span className='text-lg font-medium'> Creative Problem Solver: </span>Known for blending creativity with technical skills to deliver innovative solutions that meet both user and business needs.</li>
                <li><span className='text-lg font-medium'> Learning Machine Learning: </span>Continuously expanding my skill set, currently focused on integrating machine learning to create smarter, data-driven applications.</li>
              </ul>
            </div>

            {/* Right div with skills boxes */}
            <div className='sm:mt-0 mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Skill box */}
            <div className='h-[150px] rounded-2xl flex items-center justify-center bg-[#252525]'>
              <div className='flex flex-col justify-center gap-3 items-center'>
                <Image src={code} className='h-[70px] w-[70px]' alt="Web Development icon" />
                <h1 className="text-sm sm:text-base">Web Development</h1>
              </div>
            </div>
            
            {/* ... Other skill boxes ... */}
            <div className='h-[150px] rounded-2xl flex items-center justify-center bg-[#252525]'>
              <div className='flex flex-col justify-center gap-2 items-center'>
                <Image src={ui} className='h-[70px] w-[70px]' alt="Web Development icon" />
                <h1 className="text-sm sm:text-base">Ui Ux Design</h1>
              </div>
            </div>
            
            <div className='h-[150px] rounded-2xl flex items-center justify-center bg-[#252525]'>
              <div className='flex flex-col justify-center gap-2 items-center'>
                <Image src={analysis} className='h-[70px] w-[70px]' alt="Web Development icon" />
                <h1 className="text-sm sm:text-base">Data Analysis</h1>
              </div>
            </div>
            
            <div className='h-[150px] rounded-2xl flex items-center justify-center bg-[#252525]'>
              <div className='flex flex-col justify-center gap-2 items-center'>
                <Image src={ml} className='h-[70px] w-[70px]' alt="Web Development icon" />
                <h1 className="text-sm sm:text-base">Machine Learning</h1>
              </div>
            </div>
            

            
          </div>
          </div>

           
        </div>
      </div>

      {/* section 3 */}
      <div className='addm mb-5 px-4 sm:px-6 lg:px-8'>
      <h1 className={`text-4xl sm:text-5xl lg:text-7xl mb-8 ${Oswald.className}`}>Projects</h1>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Project box 1 */}
        <div className='bg-[#252525] flex flex-col justify-between h-[300px] p-4 rounded-lg'>
          <p className='text-xl font-light sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <h3 className='text-3xl sm:text-3xl font-semibold'>Project name</h3>
        </div>

        {/* Project box 2 */}
        <div className='bg-[#252525] flex flex-col justify-between h-[300px] p-4 rounded-lg'>
          <p className='text-xl font-light sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <h3 className='text-3xl sm:text-3xl font-semibold'>Project name</h3>
        </div>

        {/* Project box 3 */}
        <div className='bg-[#252525] flex flex-col justify-between h-[300px] p-4 rounded-lg'>
          <p className='text-xl font-light sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <h3 className='text-3xl sm:text-3xl font-semibold'>Project name</h3>
        </div>

        {/* Project box 4 */}
        <div className='bg-[#252525] flex flex-col justify-between h-[300px] p-4 rounded-lg'>
          <p className='text-xl font-light sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
          <h3 className='text-3xl sm:text-3xl font-semibold'>Project name</h3>
        </div>
      </div>
      
      </div>

    </div>
  );
}

