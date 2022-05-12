import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <>
        <div className='pricing-bg'>
            <h1 className='header'>Pricing</h1>
            
            <div className='card-body'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>StartUp</h1>
                    </div>
                </div>
                <div className='card'>
                <div className='card-header'>
                        <h1>Enterprise</h1>
                    </div>
                </div>
                <div className='card'>
                <div className='card-header'>
                        <h1>Developer</h1>
                    </div>
                </div>
                <div className='card'>
                <div className='card-header'>
                        <h1>Pro</h1>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Pricing