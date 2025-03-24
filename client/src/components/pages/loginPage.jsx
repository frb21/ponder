import React from 'react';
import image from '../../assets/img/bgLogin.jpg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  // states and updaters
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
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

    setError('');
    console.log('Form submitted:', {email, password});

    const userData = {
      email: email,
      password: password
    };

    try{
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if(response.ok){
        setSuccess("Login Successful!");
        setError(null);
        console.log(success);
      
        localStorage.setItem("token", data.token);

        navigate("/feed");
      }
      else{
        setError(data.error || "An error occurred");
        setSuccess(null);
      }
    }
    catch(error){
      setError("There was a problem.");
      console.log(error)
      setSuccess(null);
    }
  };
  
  useEffect(() => {
    if(error){
      const timer = setTimeout(() => {
        setError("");
      }, 4000)

      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      navigate("/feed");
    }
  }, [navigate]);

  return(
    <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
      <form onSubmit={handleSubmit}>
      <div className="flex shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-white rounded-2xl xl:rounded-tr-none xl:rounded-br-none">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"/>
          </div>

          <div className="flex flex-col text-2xl text-left gap-1">
            <span>Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-md p-1 border-2 outline-none focus:border-cyan-400 focus:bg-slate-50"/>

            <div className="flex gap-1 items-center">
              <input type="checkbox" className="cursor-pointer"/>
              <span className="text-base">Remember Password</span>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: -5}} animate={error ? {opacity: 1, y:0} : {opacity: 0, y: -5}} transition={{ duration: 0.3 }} className="block text-red-500 m-0 p-0">{error}</motion.p>
          <motion.button animate={error ? { x: [-5, 5, -5, 5, 0], marginTop: 2} : { marginTop: -20 }} transition={{ duration: 0.3 }} type="submit" className="m-0 py-2 px-10 text-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white cursor-pointer">Login</motion.button>
          <p className="font-semibold">Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Register</a></p>
        </div>
        <img src={image} alt="" className="w-[450px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"/>
      </div>
      </form>
    </section>  
  );
};

export default LoginPage;


























