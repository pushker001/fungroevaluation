import React from 'react';
import phone from '../assets/phone.png';
import { MdGroup, MdGroups2, MdOutlineWidgets } from "react-icons/md";
import { FaMoneyBill, FaApple, FaComputer } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import Card from '../component/Card';
import FlipCard from '../component/FlipCard';
import '../Flipcard.css';
import Avatar from '../component/Avatar';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import FAQList from '../component/FAQList';

const Teen = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold">
            <span className="text-white">Funn</span><span className="text-green-500">gro</span>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <nav className='pr-4'>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-green-300">Teen</a></li>
                <li><a href="#" className="hover:text-green-300">Company</a></li>
                <li><a href="#" className="hover:text-green-300">Parent</a></li>
              </ul>
            </nav>
            <button className="rounded-md bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
              Company Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-10 px-6">
        <div className='flex flex-col-reverse lg:flex-row items-center'>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold">TEENLANCERS</h1>
            <p className="mt-4 text-lg lg:text-xl">Real companies, real projects, real earnings and real money</p>
            <p className="mt-2 text-md lg:text-lg">Smart opportunities for the smart generation</p>
            <div className="flex mt-6 space-x-4 justify-center lg:justify-start">
              <a href="#" className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded">
                <IoLogoAndroid size={32} className="text-gray-800" alt="Google Play" />
              </a>
              <a href="#" className="bg-green-500 hover:bg-green-400 py-2 px-4 rounded">
                <FaApple size={32} className="text-gray-800" alt="Google Play" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img src={phone} alt="Phone" className="max-w-full lg:max-w-md" />
          </div>
        </div>

        <div className='h-auto lg:h-[30vh] text-xl lg:text-3xl flex flex-col lg:flex-row justify-around bg-gray-700 rounded-md flex-wrap items-center m-2 text-white'>
          <div className="flex flex-col items-center space-y-2 p-4">
            <MdGroup className='text-4xl lg:text-6xl' />
            <span>3500+</span>
            <p>Companies</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4">
            <MdGroups2 className='text-4xl lg:text-6xl' />
            <span>12</span>
            <p>Categories</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4">
            <MdOutlineWidgets className='text-4xl lg:text-6xl' />
            <span>30,00,000+</span>
            <p>Teenlancer</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4">
            <FaComputer className='text-4xl lg:text-6xl' />
            <span>1000+</span>
            <p>Live projects</p>
          </div>
        </div>

        <div className='flex flex-col mt-10'>
          <h3 className='text-center font-extrabold text-3xl lg:text-4xl font-semibold mt-[2rem] lg:mt-[4rem]'>Why work in your Team</h3>
          <div className='flex flex-col lg:flex-row justify-around mt-10'>
            <Card
              icon={FaMoneyBill}
              title={"First income"}
              description={"Work with real companies and Earn money"}
            />
            <Card
              icon={FaMoneyBill}
              title={"Passion"}
              description={"Make your passion as your profession"}
            />
            <Card
              icon={FaMoneyBill}
              title={"Learning"}
              description={"Experiential Learning by working on real projects"}
            />
            <Card
              icon={FaMoneyBill}
              title={"Certification"}
              description={"Build your profile by getting experience certificates"}
            />
          </div>
        </div>

        <div className='mt-10 lg:mt-[3rem] bg-gray-800 w-full flex flex-col lg:flex-row justify-around flex-wrap h-auto lg:h-[80vh] pt-10 lg:pt-20'>
          <FlipCard
            frontContent={<div>Social Media Marketing</div>}
            backContent={<div>Manage social media pages of companies</div>}
          />
          <FlipCard
            frontContent={<div>Video Creation</div>}
            backContent={<div>Create and edit videos for companies and use your video creation skills</div>}
          />
          <FlipCard
            frontContent={<div>Website Design</div>}
            backContent={<div>Design and build a website for companies</div>}
          />
          
        
        </div>

        <div className='flex flex-col items-center mt-10 lg:mt-[3rem] pt-5'>
          <h3 className='text-3xl lg:text-4xl font-extrabold text-center'>We are Featured In</h3>
          <div className='flex  justify-around items-center mt-10 gap-10 sm:gap-20'>
            <Avatar imgsrc={img1} />
            <Avatar imgsrc={img2} />
            <Avatar imgsrc={img3} />
            <Avatar imgsrc={img4} />
          </div>
        </div>

        <div className="min-h-screen bg-gray-900 flex items-center justify-center mt-10 lg:mt-0">
          <div className="w-full max-w-3xl mx-auto p-4">
            <h1 className="text-3xl lg:text-4xl text-white text-center mb-8">Frequently Asked Questions</h1>
            <FAQList />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>© 2024 Funngro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Teen;
