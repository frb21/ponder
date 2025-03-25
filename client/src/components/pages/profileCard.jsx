import React from 'react';
import NavBar from './navBar.jsx';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6' ;
import { FaInstagramSquare } from 'react-icons/fa';

const ProfilePage = () => {

  return(
  <section className="min-h-screen flex flex-col items-center justify-center bg-indigo-400">
    <NavBar /> 
    <div className="flex flex-col gap-3 items-center justify-center translate-y-8 size-120 rounded-2xl bg-violet-500 text-black font-playfair">
     <div className="w-120 h-60 -translate-y-5 mt-5 bg-white rounded-md">

     </div>
     <img src="jean.jpeg" className="rounded-full border-3 border-white  outline outline-3 object-cover outline-indigo-500 w-35 h-37 -translate-y-38"></img>
      <div className="flex flex-col items-center justify-center gap-4 -translate-y-25">
        <h1 className="font-bold">Jean-Michel Basquiat</h1>
        <div className="flex flex-row gap-3 items-center -translate-x-3">
          <FaMapMarkerAlt className="text-black w-7 h-7"/>
          <p className="font-semibold">Stockholm, Sweden</p>
        </div>
        <button className="bg-indigo-700 rounded-md w-20 h-9 hover:bg-indigo-900 cursor-pointer text-black">Follow</button>
      </div>
      
      <div className="flex flex-col -translate-x-0.6 -translate-y-10">
        <p className="italic text-lg font-bold -translate-y-9">"Most young kings cut their heads off."</p>
        <div className="flex flex-row items-center gap-8 justify-center translate-y-4">  
          <FaFacebook className="w-9 h-9 text-blue-800"/>
          <FaXTwitter className="w-9 h-9"/>
          <FaInstagramSquare className="w-9 h-9 text-pink-800"/>
        </div>
      </div> 
    </div>
  </section>
    );
};

export default ProfilePage;































