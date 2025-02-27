import React from "react";
import { Link } from "react-router";

const Header = ({ headerData }) => {
  return (
    <>
      <nav
        className="flex justify-between items-center h-16 text-zinc-300 relative shadow-sm font-mono bg-zinc-600"
        role="navigation"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Republic_TV.svg/1200px-Republic_TV.svg.png" className="pl-8 w-[70px]"/>
          
        <div className="px-4 flex justify-between space-x-5">
          {headerData?.map((item, key) => (
            <Link key={key} to={item.link}>
              {item.label}
            </Link >
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
