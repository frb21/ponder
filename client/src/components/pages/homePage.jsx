import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, PenLine } from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import SideBar from './sideBar.jsx';
import PostCard from './postCard.jsx';
import NavBar from './navBar.jsx';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts: ", error))

  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center font-mono bg-[#181818]">
      <NavBar />
      <SideBar />

      <div className="flex flex-col items-center mt-10">
        {posts.length > 0 ? (
            posts.map((post) => {
                return (
                    <PostCard 
                        post={post}
                    />
                )
            })

        ) : (
            <p>No posts available.</p>
        )}
      </div>
    </section>
  );
};

export default FeedPage;

































