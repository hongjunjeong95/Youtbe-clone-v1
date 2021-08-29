import React, { memo } from "react";
import { Link } from "react-router-dom";

const Header = memo(() => {
  return (
    <div className="bg-black text-white w-full">
      <img src="" alt="" />
      <Link to="/">Youtube</Link>
      <form action="#">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </form>
    </div>
  );
});

export default Header;
