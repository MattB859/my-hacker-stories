import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>  
        <div className='overlay'></div>
        <div className='home-page-container background'>
            <div className='hm-wrapper'>
                <h1 className='hm-header'><span><em>J</em></span>oin the<em> Tech </em>revolution</h1>
                <h1 className='hm-header-2'>We can help build your next project.</h1>
                <div className='hm-btn-container'>
                  <button type="button" className='home-btn'>Contact Us</button>
                  <p className='p'>*Sign up to our news letter and stay informed with new updates weekly.</p>
                </div>
            </div>
        </div>   
       
    </>
  )
}

export default Home