import React from 'react';
import './memory.css';
import Gallery from './Gallery';

import Video from './Video';
const Memory = () => {
    return (
        <div className='memory-container'>
            <div className="gallery-container">
            <button className='gallery-btn'>ছবি গ্যালারী</button>
            <Gallery/>
            </div>
            <div className="video-container">
            <button className='gallery-btn'>ভিডিও গ্যালারী</button>
            <Video/>
            </div>
        </div>
    );
};

export default Memory;