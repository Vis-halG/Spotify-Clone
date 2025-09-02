import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams(); // Get album ID from URL params
    const albumData = albumsData[id]; // Get album details by ID
    const { playWithId } = useContext(PlayerContext); // Get play function from context

    return (
        <>
            {/* Navbar at the top */}
            <Navbar />
            
            {/* Album header info: image, title, description, likes, song count, duration */}
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col '>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5 ' src={assets.spotify_logo} alt="" />
                        <b>Spotify </b>
                        • 2,89,650 likes
                        • <b>50 songs, </b>
                        about 4 hrs 38 min
                    </p>
                </div>
            </div>
            
            {/* Table header for song list */}
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4 '>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />

            {/* List of songs in the album */}
            {
                songsData.map((item, index) => (
                    <div
                      onClick={() => playWithId(item.id)} // Play song on click
                      key={index}
                      className='grid
