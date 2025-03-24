import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // states and updaters
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username && !fullname && !email && !password){
      setError('All fields are required.');
      return;
    }
     
    if(!username){
      setError('Username is required.');
    }

    else if(!email){
      setError('Email is required.');
      return;
    }

    else if(!password){
      setError('Password is required.');
      return;
    }

    else if(!/\S+@\S+\.\S+/.test(email)){
      setError('Please enter a valid email address.');
      return;
    }
    
    setError('');
    console.log('Form submitted:', {email, password});

    const userData = {
      email: email,
      password: password,
      username: username,
      fullname: fullname
    };

    try{
      const response = await fetch('http://localhost:5000/auth/register', {
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

        localStorage.setItem("token", data.token);
        navigate("/feed");
      }
      else{
        setError(data.error || "An error occurred.");
        setSuccess(null);
      }
    }
    catch(error){
      setError(error.message);
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
          <div className="flex flex-col text-xl text-left gap-1">
            <span>Username</span>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50"/>
          </div>
          
          <div className="flex flex-col text-xl text-left gap-1">
            <span>Full Name</span>
            <input type="text" onChange={(e) => setFullname(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50"/>
          </div>

          <div className="flex flex-col text-xl text-left gap-1">
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-pink-500 focus:bg-slate-50"/>
          </div> 

          <div className="flex flex-col text-xl text-left gap-1">
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



































