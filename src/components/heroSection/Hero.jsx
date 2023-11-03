import React from 'react'
import Banner from '../../assets/banner.jpg'

const Hero = () => {
  return (
    <div className="bg-cyan-400 flex justify-center text-white p-4 text-center">
        <img 
        src={Banner}
        alt="banner" 
        className="w-full max-h-100 rounded-lg object-cover" />
    </div>
  )
}

export default Hero