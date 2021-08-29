import React, { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <header className="bg-black text-white w-full flex items-center p-2">
      <Link to="/" className="flex items-center mr-6">
        <img src="/images/logo.png" alt="Youtube" className="h-10" />
        <h1 className="text-xl font-bold ml-2">Youtube</h1>
      </Link>
      <form action="#" className="flex items-center flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-2 py-1 outline-none text-black"
        />
        <button type="submit" className="bg-gray-400 p-1">
          <img src="/images/search.png" alt="Search" className="h-6" />
        </button>
      </form>
    </header>
  );
});

export default Header;
