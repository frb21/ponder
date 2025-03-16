import * as FaIcons from "react-icons/fa";

const SideBar = () => {
  

  return(
    <div className="bg-[#181818] h-screen p-5 transition-all duration-300 w-60 text-white overflow-y-auto hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <ul className="space-y-7 p-5 mt-12">
        <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-45">
          <div className="flex items-center space-x-2">
            <img src="aristotle.png" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Metaphysics</span> 
          </div>
        </li>
        

        <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-45">
          <div className="flex items-center space-x-2">
            <img src="kant.png" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Ethics</span>
          </div>

        </li>
        
        <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-45">
          <div className="flex items-center space-x-2">
           <img src="rene.png" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Logic</span>
          </div>
        </li>
        
        <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-45">
          <div className="flex items-center space-x-2">
           <img src="burke.png" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Aesthetics</span>
          </div>
        </li>

         <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-50">
          <div className="flex items-center space-x-2">
           <img src="sartre.jpeg" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Existentialism</span>
          </div>
        </li>

 <li className="flex items-center justify-between space-x-3 transition duration-300 delay-150 ease-in-out scale-110 hover:-translate-y-1 hover:bg-[#282828] rounded-md cursor-pointer p-2 -translate-x-5 w-45">
          <div className="flex items-center space-x-2">
           <img src="aurelius.jpeg" alt="meta" className="w-10 h-10 rounded-md"></img>
            <span>Stoicism</span>
          </div>
        </li>
        
      </ul>
      </div>
  );
};

export default SideBar;



































