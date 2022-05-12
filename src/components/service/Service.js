import React from 'react';
import './service.css';

const Service = () => {
  return (
      <>
        
        <div className='overlay'></div>
        <div className='service-page-container service-bg'>
            <div className='hm-wrapper'>
                <h1 className='hm-header'><span><em>O</em></span>ur services<em> Tech </em>revolution</h1>
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

export default Service