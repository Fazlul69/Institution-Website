import React from 'react';
import bannertop from './topbanner.module.css';
import bannerImg from '../../assets/TopBanner.jpg'
import TopNav from '../TopNav/TopNav';
const TopBanner = () => {
    return (
        <>
        <div className={bannertop.top_banner_container}>
            <div className={bannertop.top_banner}>
                <TopNav/>
                <img src={bannerImg} alt="" />
                <div className={bannertop.text_container}>
                    <h1>ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ, খুলনা</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopBanner;