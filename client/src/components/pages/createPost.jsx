import React from 'react';

const CreatePost = ( {createPost, setCreatePost} ) => {
  if(!createPost) return null;

  return ( 
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Create a Post</h2>

        <textarea
          rows="4"
          placeholder="Write down your thoughts..."
          className="w-full p-2 border rounded-md"

        ></textarea>

        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={() => setCreatePost(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >  
            Cancel
          </button>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Post
          </button>
        </div>
      </div>
    </div> 
  );
};

export default CreatePost;
































