import React from 'react';
import NavBar from './navBar.jsx';

const ProfilePage = () => {

  return(
  <section className="min-h-screen flex flex-col items-center justify-center bg-[#181818]">
    <NavBar /> 
    <div className="flex flex-col gap-3 items-center justify-center p-4 translate-y-8 size-125 rounded-2xl bg-[#383838] text-white">
     <div className="w-120 h-50 -translate-y-5 mt-5 bg-radial-[at_25%_25%] from-white to-zinc-900 to-100% rounded-2xl">

     </div>
     <img src="dan.jpeg" className="rounded-full border-4 border-white w-50 h-50 -translate-y-30"></img>
     <h1 className="font-bold -translate-y-25">Daniel Ek</h1>
     <h2 className="-translate-y-2">CEO Spotify</h2>
    </div>
  </section>
    );
};

export default ProfilePage;































