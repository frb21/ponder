import React from 'react';

const SignupPage = () => {
  // states and updaters


  return(
    <section className="min-h-screen flex items-center justify-center font-mono bg-linear-to-bl from-violet-500 to-fuschia-500">
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-left justify-left p-20 gap-8 bg-white rounded-2xl">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="text-1xl">Setting up your account is only a few seconds away.</p>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Email</span>
            <input type="email" className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50"/>
          </div> 

          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input type="password" className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50" />
            </div>

            <div className="flex gap-1 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-base">I accept the <a href="#" className="text-pink-500">Terms of Use</a> and <a href="#" className="text-pink-500">Privacy Policy</a></span>  
            </div>
              
          <button className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white cursor-pointer" >Register Now</button>
          </div>
      </div>
    </section>
  );
};

export default SignupPage;



































