import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SignupPage = () => {
  // states and updaters
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email && !password){
      setError('Both fields are required.');
      return;
    }
    
    if(!email){
      setError('Email is required.');
      return;
    }

    if(!password){
      setError('Password is required.');
      return;
    }

    if(!/\S+@\S+\.\S+/.test(email)){
      setError('Please enter a valid email address.');
      return;
    }
    
    setError('');
    console.log('Form submitted:', {email, password});

    const userData = {
      email: email,
      password: password
    };

    try{
      const response = await fetch('http://localhost:5000/authRoutes/register', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const data = await response.json();
      if(response.ok){
        setSuccess("Signup Successful!");
        setError(null);
        console.log(success);
      }
      else{
        setError(data.message || "An error occurred.");
        setSuccess(null);
      }
    }
    catch(error){
      setError("There was a problem.");
      console.log(error);
      setSuccess(null);
    }      
  };

  useEffect(() => {
    if(error){
      const timer = setTimeout(() => {
        setError("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return(
    <section className="min-h-screen flex items-center justify-center font-mono bg-linear-to-bl from-violet-500 to-fuschia-500">
     <form onSubmit={handleSubmit}>
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-left justify-left p-20 gap-8 bg-white rounded-2xl">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="text-1xl">Setting up your account is only a few seconds away.</p>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50"/>
          </div> 

          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50" />
            </div>

            <div className="flex gap-1 items-center">
              <input type="checkbox" className="cursor-pointer" />
              <span className="text-base">I accept the <a href="#" className="text-pink-500">Terms of Use</a> and <a href="#" className="text-pink-500">Privacy Policy</a></span> 
            </div>
          <motion.p initial={{ opacity: 0, y: -5 }} animate={error ? { opacity: 1, y:0 } : { opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="text-red-500 block m-0 p-0">{error}</motion.p> 
          <motion.button animate={error ? {x: [-5, 5, -5, 5, 0], marginTop: 10} : { marginTop: -20 }} transition={{ duration: 0.3 }} type="submit" className="px-10 py-2 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white cursor-pointer" >Register Now</motion.button>
          </div>
      </div>
      </form>
    </section>
  );
};

export default SignupPage;



































