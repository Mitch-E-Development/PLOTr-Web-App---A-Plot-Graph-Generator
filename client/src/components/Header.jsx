import React from "react";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const {pathname} = useLocation();

  return (
    <>
      {pathname !== "/" ? (
        <div className="flex justify-between items-center bg-gray-200 px-4 p-2">
          <div className="flex items-center gap-2">
            <img
              className="w-14"
              src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png"
              alt=""
            />
            <h1 className="text-3xl">PLOTr</h1>
          </div>

          <div className="flex gap-4">
            <a href="/home">Home</a>
            <a href="/create">Create</a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
    
    
  );
};

export default Header;
