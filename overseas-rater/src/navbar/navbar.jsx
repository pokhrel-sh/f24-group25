import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1" onClick={()=>navigate("/")}>
        <a className="btn btn-ghost text-xl">TravelNEU</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a onClick={()=>navigate("/")}>Programs</a></li>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
          </div>
          <li><button className="btn btn-outline btn-error">Search</button></li>
          <li><button onClick={()=>navigate("/sign-in")} className="btn btn-error">Login</button></li>
          <li><button onClick={()=>navigate("/sign-up")} className="btn btn-error">Sign Up</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;