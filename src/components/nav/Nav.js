import React  from 'react'
import './nav.css'

const Nav = () => {

return (
    <section className='nav-container'>
        <div className='navbar'>
            <h1>Planet Tech</h1>
            <nav>
                <ul className='nav-link'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Price</li>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <button className='nav-btn'>Sign In</button>
            </div>
            
        </div>
    </section>
  );
};

export default Nav;
