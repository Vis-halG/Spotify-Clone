import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef(); // Reference to the main display container
  const location = useLocation(); // React Router hook for current URL info

  // Check if current route is an album page
  const isAlbum = location.pathname.includes("album");
  
  // Extract album ID from URL if on album page
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  
  // Get background color for the album from data
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    // Change background gradient if on album page, else set default background
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className='W-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      {/* Routing for home and album views */}
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
