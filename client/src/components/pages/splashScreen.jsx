import React, { useState, useEffect } from 'react';
const messages = [
  "Fetching the latest data...",
  "Loading, please wait...",
  "Almost there...",
  "Connecting to the server...",
  "Just a moment...",
];

const SplashScreen = () => {
  const [fade, setFade] = useState("");

  // check server if runs
  useEffect(() => {
    const checkServer = setInterval(() =>{
      fetch("http://localhost:5000/api/posts")
        .then((res) => {
          if(res.ok){
            setFade("opacity-0 transition-opacity duration-1000 ease-out");
            setTimeout(onServerDetected, 1000);
          }
        })
        .catch(() => {
          console.log("Server not detected. Retrying...");
        });

    }, 2000);
    return () => clearInterval(checkServer);
  }, [onServerDetected]);
  
  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 ${fade}`}>
      
    </div>

  )

};

export default SplashScreen;

































