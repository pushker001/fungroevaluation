import React from 'react';


const Card = ({ icon:Icon, title, description }) => {
  return (
    <div className='w-[50vh] h-[50vh] rounded-md border-2 shadow-lg flex flex-col items-center justify-center p-4 hover:bg-green-500 transition-colors duration-300'>
      <div className='mb-4'>
        <Icon className='w-[10vh] h-[10vh] text-white' />
      </div>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-center text-white'>{description}</p>
    </div>
  );
}



export default Card
