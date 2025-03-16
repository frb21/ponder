import React from 'react';
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';

const PostCard = ({ authorId, title, content, createdAt}) => {
    const [user, setUser] = useState(null);
    
    // fetch user/author
    useEffect(() => {
      fetch(`http://localhost:5000/user/users/${authorId}`)
            .then((res) => res.json())
            .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user:", error))
    }, [authorId]); 

  if(!user){
    return <div> Loading user data... </div>
  }
  else{
    return (
        <div className="bg-gray-300 shadow-md rounded-xl p-4 mb-6 max-w-lg w-full border border-gray-200 translate-x-50">
          <div className="flex items-center space-x-3">
            <div>
                <h3 className="font-semibold text-white-900">{user.name}</h3>
                <p className="text-sm text-white-500">{createdAt}</p>
            </div>  
          </div>
            
          <h3 className="font-bold text-white-900">{title}</h3>

          <p className="mt-3 text-white-800">{content}</p>

          <div className="flex justify-between items-center mt-4 text-white-600">
            <button className="flex items-center space-x-1 hover:text-red-500 transition cursor-pointer">
                <Heart className="w-5 h-5" />
                <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500 transition cursor-pointer">
                <MessageCircle className="w-5 h-5"/>
                <span>Comment</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500 transition cursor-pointer">
                <Share className="w-5 h-5"/>
                <span>Share</span>
            </button>
          </div>
        </div>
    );
  }
};
export default PostCard;



















