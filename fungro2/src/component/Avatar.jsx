import React from 'react'

const Avatar = ({imgsrc}) => {
  return (
    <div>
        <img src={imgsrc} alt='Business logo' className='w-[20vh] h-[20vh] rounded-full' />
      
    </div>
  )
}

export default Avatar
