import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>  
        <div className='overlay'></div>
        <div className='home-page-container background'>
            <div className='hm-wrapper'>
                <h1 className='hm-header'><span>J</span>oin the tech revolution</h1>
                <h1 className='hm-header'>We can help build your next project.</h1>
            </div>
        </div>   
        <button type="button" className='home-btn'>Contact Us</button>
        <p className='p'>*Signup to our news letter and stay informed with new updates weekly.</p>
    </>
  )
}

export default Home