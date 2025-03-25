import React from 'react';                                                                                                                                        
//import { useState, useEffect } from 'react';
import { Home, User, PenLine } from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import SideBar from './sideBar.jsx';
import PostCard from './postCard.jsx';
import { useNavigate } from 'react-router-dom';
 
const NavBar = () => {
  const navigate = useNavigate();

  return (
         <nav className="bg-[#282828] flex justify-between items-center w-full fixed top-0 left-0 py-2 shadow-md z-50">
            <div className="ml-10 text-3xl translate-x-5">
             <a href="#" className="font-[Abocat] text-4xl font-bold text-black text-indigo-400">Agora</a>
            </div>
            <div className="flex flex-row items-center">
              <ul className="flex space-x-6 text-white text-lg font-mono"> 
                  <li>
                   <div className="relative group">
                     <button className="px-2 py-3 -translate-x-22 cursor-pointer" onClick={() => navigate('/feed')}>
                    <Home size={24} className="text-gray-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500"/>  
                    </button>
                     
                    <div className="absolute top-full left-1/2 transform
                       -translate-x-38 mt-2 w-max px-2 py-1 
                       text-sm text-white bg-gray-700 rounded
                       shadow-lg opacity-0 group-hover:opacity-100">
                        Go to Homepage.
                     </div>
                   
                   </div>
                  </li>

                <li>
                <div className="relative group">
                  <button className="px-2 py-3 cursor-pointer -translate-x-17" onClick={() => navigate('/profile')}><User size={24} className="text-gray-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-green-500 "/></button>
                   <div className="absolute top-full left-1/2 transform
                       -translate-x-36 mt-2 w-max px-2 py-1 
                       text-sm text-white bg-gray-700 rounded
                       shadow-lg opacity-0 group-hover:opacity-100">
                        View my Profile.
                     </div>
                  </div>
                </li>

                <li>
                <div className="relative group">
                  <button className="px-2 py-3 cursor-pointer -translate-x-12"><PenLine size={24} className="text-gray-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-purple-500 "/></button>
                   <div className="absolute top-full left-1/2 transform
                       -translate-x-25
                       mt-2 w-max px-2 py-1 
                       text-sm text-white bg-gray-700 rounded
                       shadow-lg opacity-0 group-hover:opacity-100">
                        Create Post.
                     </div>
                </div>
                </li>
              </ul>
            </div>
          </nav> 
    );
};

export default NavBar; 


