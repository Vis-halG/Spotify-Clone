import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {

    const naviagte = useNavigate()
    return (
        <>
             {/* Top navigation bar with back/forward arrow buttons */}
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <img onClick={()=>naviagte(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                    <img onClick={()=>naviagte(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
                </div>
              
            </div>
            {/* Category filters (All, Music, Podcasts) */}
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
