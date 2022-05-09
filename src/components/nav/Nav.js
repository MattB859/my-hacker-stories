import React  from 'react'
import { Outlet, Link } from "react-router-dom";
import './nav.css'

const Nav = () => {

return (
    <>
        <section className='nav-container'>
            <div className='navbar'>
                <h1 className='logo'>Geeka<span>Z</span>oid</h1>
                <nav>
                    <ul className='nav-link'>
                        <li><Link to="/home">Home</Link></li>
                        <li>Service</li>
                        <li>Price</li>
                        <li>Company</li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div>
                    <button className='nav-btn-2'>Sign in</button>
                    <button className='nav-btn'>Sign Up</button>
                </div>
            </div>
        </section>

        <Outlet />
    </>    
  );
};

export default Nav;
