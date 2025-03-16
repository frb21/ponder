import React from 'react';
import { useState, useEffect } from 'react';
import PostCard from './postCard';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // Fetch posts
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts: ", error))

    // Fetch users
    fetch("http://localhost:5000/user/users")
      .then((res) => res.json())
      .then((data) => {
        const userMap = {};
        data.forEach((user) => {
            userMap[user.userId] = user;
        });
          setUsers(userMap);
      })
      .catch((error) => console.error("Error Fetching Users:", error))
  }, []);

  return (
    <section className="min-h-screen flex items-center font-mono bg-[#181818]">
      <nav className="bg-[#282828] flex justify-between items-center w-full fixed top-0 left-0 py-2 shadow-md z-50">
        <div className="ml-10 text-3xl">
          <a href="#" className="font-[Arizonia] text-5xl text-red-900 font-bold">Ponder</a>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex space-x-6 text-white text-lg">
            <li><button className="hover:bg-gray-700 py-2 px-2 -translate-x-25 cursor-pointer"><img className="w-8" src="home.png" alt="Home"></img></button></li>
            <li><button className="hover:bg-gray-700 py-2 px-2 cursor-pointer -translate-x-17"><img className="w-8" src="post.png" alt="Post"></img></button></li>
            <li><button className="hover:bg-gray-700 py-2 px-2 cursor-pointer -translate-x-12"><img className="w-8" src="profile.png" alt="Profile"></img></button></li>
          </ul>
        </div>
      </nav> 
    
      <div className="flex flex-col items-center mt-10">
        {posts.length > 0 ? (
            posts.map((post) => {
                return (
                    <PostCard 
                        key={post.id}
                        authorId={post.authorId}
                        title={post.title}
                        content={post.content}
                        createdAt={post.createdAt}
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

































