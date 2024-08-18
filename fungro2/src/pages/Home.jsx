import React from 'react'
import { IoLogoAndroid } from 'react-icons/io';
import { FaApple, FaMoneyBill} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6"
import {MdGroup, MdOutlineWidgets , MdGroups2} from 'react-icons/md'
import phone from '../assets/phone.png';
import Card from '../component/Card';
import ProjectIdeas from '../component/ProjectIdeas';
import Member from '../component/Member';
import FlipCard from '../component/FlipCard';
import '../FlipCard.css'

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import Avatar from '../component/Avatar';
import FAQList from '../component/FAQList';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-3xl font-bold">
          <span className="text-white">Funn</span>
          <span className="text-green-500">gro</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <nav className="pr-4">
            <ul className="flex space-x-4">
        

            <li><Link to="/teen" className="hover:text-green-300">Teen</Link></li>
              <li><a href="#" className="hover:text-green-300">Company</a></li>
              <li><a href="#" className="hover:text-green-300">Parent</a></li>
            </ul>
          </nav>
          <button className="rounded-md bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4">
            Company Login
          </button>
        </div>
      </div>
    </header>

    <main className="container mx-auto mt-10 px-6">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Smart Talent for smart companies</h1>
          <p className="mt-4 text-lg md:text-xl">Cost effective, Timely delivery, Innovative ideas while you help the next generation</p>
          <p className="mt-2 text-base md:text-lg">Talented Teenagers for your company
          ‍</p>
          <div className="flex mt-6 space-x-4 justify-center md:justify-start">
          <button className='bg-green-500 text-white rounded-full w-[50vh] h-[10vh] hover:bg-green-600 hover:shadow-lg transform hover:scale-105 transition duration-300'>
  Hire Now
</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img src={phone} alt="Phone" className="max-w-xs md:max-w-md" />
        </div>
      </div>

      <div className=' mt-[5rem] h-[50vh] sm:h-auto text-3xl sm:text-xl flex justify-around bg-gray-700 rounded-md flex-wrap items-center m-2 text-white'>
    <div className="flex flex-col items-center sm:w-1/2 md:w-1/4 space-x-2 p-2">
      <MdGroup className='text-6xl sm:text-4xl' />
      <span>3500+</span>
      <p>companies</p>
    </div>

    <div className="flex flex-col items-center sm:w-1/2 md:w-1/4 space-x-2 p-2">
      <MdGroups2 className='text-6xl sm:text-4xl' />
      <span>12</span>
      <p>Categories</p>
    </div>

    <div className="flex flex-col items-center sm:w-1/2 md:w-1/4 space-x-2 p-2">
      <MdOutlineWidgets className='text-6xl sm:text-4xl' />
      <span>30,00,000+</span>
      <p>Teenlancer</p>
    </div>

    <div className="flex flex-col items-center sm:w-1/2 md:w-1/4 space-x-2 p-2">
      <FaComputer className='text-6xl sm:text-4xl' />
      <span>1000+ </span>
      <p>Live project</p>
    </div>
      </div>

      <div className='flex flex-col '>
    <h3 className=' text-center font-extrabold text-4xl font-semibold mt-[4rem]'>Why work in your Team </h3>
    <div className='flex justify-around gap-3 mt-10'>
        <Card 
        icon={FaMoneyBill }
        title={"First income"}
        description={"Work with real companies and Earn money"}
        />
        <Card 
        icon={FaMoneyBill }
        title={"Passion"}
        description={"Make your passion as your profession"}
        />
        <Card 
        icon={FaMoneyBill }
        title={"Learning"}
        description={"Experiential Learning by working on real projects"}
        />
        <Card 
        icon={FaMoneyBill }
        title={"Certification"}
        description={"Build your profile by getting experience certificates"}
        />
    </div>
      </div>

     <div className='mt-[4rem]'>
      <ProjectIdeas />
      </div>
      <div className='mt-[4rem]'>
        <Member />
      </div>

      <div className='mt-[3rem] bg-gray-800 w-full flex flex-wrap items-center justify-around gap-4 pt-20 h-[80vh] sm:flex-col sm:items-center sm:pt-10 sm:gap-6'>

<div className='flex flex-col items-center '>
  <FlipCard
    frontContent={<div className='p-4 text-white text-center'>Social Media Marketing</div>}
    backContent={<div className='p-4 text-white text-center'>Manage social media pages of companies</div>}
  />
</div>

<div className='flex flex-col items-center'>
  <FlipCard
    frontContent={<div className='p-4 text-white text-center'>Video Creation</div>}
    backContent={<div className='p-4 text-white text-center'>Create and edit videos for companies using your video creation skills</div>}
  />
</div>

<div className='flex flex-col items-center'>
  <FlipCard
    frontContent={<div className='p-4 text-white text-center'>Website Design</div>}
    backContent={<div className='p-4 text-white text-center'>Design and build a website for companies</div>}
  />
</div>

</div>

 
<div className='flex flex-col items-center mt-[3rem] pt-5'>
<h3 className='text-4xl font-extrabold text-center'>We are Featured In</h3>
<div className='flex  justify-around items-center mt-10 gap-10 sm:gap-20'>
  <div className='w-1/4 max-w-[150px] sm:w-1/3 md:w-1/4 lg:w-1/5'>
    <Avatar imgsrc={img1} />
  </div>
  <div className='w-1/4 max-w-[150px] sm:w-1/3 md:w-1/4 lg:w-1/5'>
    <Avatar imgsrc={img2} />
  </div>
  <div className='w-1/4 max-w-[150px] sm:w-1/3 md:w-1/4 lg:w-1/5'>
    <Avatar imgsrc={img3} />
  </div>
  <div className='w-1/4 max-w-[150px] sm:w-1/3 md:w-1/4 lg:w-1/5'>
    <Avatar imgsrc={img4} />
  </div>
</div>
</div>


<div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
<div className="w-full max-w-3xl mx-auto p-4">
  <h1 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-6 sm:mb-8">Frequently Asked Questions</h1>
  <FAQList />
</div>
</div>

    </main>

    <footer className="bg-gray-800 py-6 mt-10">
    <div className="container mx-auto text-center">
      <p>© 2024 Funngro. All rights reserved.</p>
    </div>
  </footer>
  </div>
  )
}

export default Home
