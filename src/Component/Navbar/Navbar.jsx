import React from 'react';
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="">
         <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start gap-2">
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg">
            <Link to='./' className="btn btn-ghost">Home</Link>
            <Link to='/app' className="btn btn-ghost">Apps</Link>
            <Link to='/Installation' className="btn btn-ghost">Installation</Link>

      </ul>
    </div>
   <Link to="/" className='flex items-center gap-2'> <img src='/logo.png' alt='' className='w-5 h-5'></img>
    <a className=" text-xl font-bold">HERO.IO</a></Link>
  </div>
 
  <div className="navbar-center">
  <ol className="hidden md:flex gap-5 text-xs font-semibold">
           <NavLink to="/" className={({ isActive }) => `btn btn-ghost ${isActive ? "border-b-2 border-b-black" : ""}`}>Home</NavLink>
           <NavLink to="/app" className={({ isActive }) => `btn btn-ghost ${isActive ? "border-b-2 border-b-black" : ""}`}>App</NavLink>
           <NavLink to="/Installation" className={({ isActive }) => `btn btn-ghost ${isActive ? "border-b-2 border-b-black" : ""}`}>Installation</NavLink>
  </ol>
    
  </div>
  <div className='navbar-end'>
  <Link to={'https://github.com/99Sajid/sj99'} target="_blank" className="btn ml-2 ">
  <span>
<FaGithub className="text-xl" /></span>Contribute</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;