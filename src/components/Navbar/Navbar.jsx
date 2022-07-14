import React from 'react'
import { Link } from 'react-router-dom';
import cl from '../../styles/Control.module.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about"> SSS</Link>
        <Link to="/posts"> SSS</Link>
        <Link to="/control"> <button className={cl.hknop}>Модалка</button></Link>
      </div>
    </div>
  );
};
export default Navbar;