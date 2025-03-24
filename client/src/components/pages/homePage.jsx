import React from 'react';
import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, PenLine } from 'lucide-react';
import * as FaIcons from 'react-icons/fa';
import SideBar from './sideBar.jsx';
import PostCard from './postCard.jsx';
import NavBar from './navBar.jsx';
import { useInfiniteQuery } from '@tanstack/react-query';


const fetchPosts = async ({ pageParam = null }) => {
  const res = await fetch(`http://localhost:5000/api/posts?cursor=${pageParam || ''}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return {
    posts: data.posts || [],
    nextCursor: data.nextCursor ?? null,
  };
};

const FeedPage = () => {
const navigate = useNavigate();

  const { 
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, 
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const expiryTime = decoded.exp * 1000;
      const currentTime = Date.now();

      if(expiryTime < currentTime){
        console.log("Token expired");
        localStorage.removeItem("token");
        navigate("/login")
      }
    }
    else if(!token){
      navigate("/login");
    }
  }, [navigate]);

  if(status == 'loading') return <div className="flex items-center justify-center text-white translate-x-70"><img src="/loading.gif" className="w-10 h-10 p-2 -translate-y-0.5"></img><h1 className="text-2xl font-bold">Loading posts...</h1></div>;
  if(status == 'error') return <div className="flex items-center justify-center text-white translate-x-70"><img src="/loading.gif" className="w-10 h-10 p-2 -translate-y-0.5"></img><h1 className="text-2xl font-bold">Connecting to the server...</h1></div> 

  return (
    <section className="flex h-screen items-center font-mono bg-[#181818]">
      <NavBar />
      <div className="flex-shrink-0 h-full fixed">
          <SideBar />
      </div>

      <div className="flex-1 flex-col p-6 mt-60 mb-40 ml-64 overflow-y-auto h-screen">
        {data?.pages?.map((group, i) =>  (
          <React.Fragment key={i}>
            {group?.posts?.map((post) => (
              <PostCard key={post.id} post={post}/>
            ))} 
          </React.Fragment>
        ))}
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="p-2 bg-blue-500 text-white mt-4"
        >
          {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No more posts'}
        </button>
      </div>
    </section>
  );
};

export default FeedPage;

































