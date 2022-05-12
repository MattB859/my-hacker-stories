import React  from 'react'
import { Link } from "react-router-dom";
import Search from '../searchbar/Search';
import './nav.css'

const Nav = () => {

return (
    <>
        <section className='nav-container'>
            <div className='navbar'>
                <h1 className='logo'>Geeka<span>Z</span>oid<span>.</span></h1>
                <nav>
                    <ul className='nav-link'>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/company">Company</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div>
                <Search />
                </div>
                <div>
                    <button className='nav-btn-2'>Sign in</button>
                    <button className='nav-btn'>Sign Up</button>
                </div>
            </div>
        </section>
    </>    
  );
};

export default Nav;
