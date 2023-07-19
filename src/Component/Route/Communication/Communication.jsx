import React from 'react';
import './communication.css'
const Communication = () => {
    return (
        <div className='communication-container'>
            <h3>যোগাযোগ</h3>
            <div className='form-text-container'>
                <p><i className="fa-solid fa-location-dot"></i>কুড়িগ্রাম সরকারি টেকনিক্যাল স্কুল ও কলেজ</p>
                <p><i className="fa-solid fa-phone"></i>মোবাইল : ০১৭১২৩৪৫৬৪</p>
                <p><i className="fa-solid fa-fax"></i>ফ্যাক্স : ১৫৮৪৮৬৩২৫ </p>
                <p><i className="fa-sharp fa-solid fa-globe"></i>ওয়েবসাইট : www.mamunmia.com</p>
                <p><i className="fa-solid fa-envelope"></i>ইমেইল: mamunfiverr1@gmail.com</p>
            </div>
            <p className='form-heading'>এই ফর্মটি ব্যবহার করে আপনার প্রশ্ন জমা দিন</p>
            <form action="">
                <label htmlFor="subject">বিষয় *</label>
                <input id="subject" type="text" placeholder='বিষয়' required/>
                <label htmlFor="name">নাম  *</label>
                <input id="name" type="text" placeholder='নাম' required/>
                <label htmlFor="email">ইমেইল  *</label>
                <input id="email" type="text" placeholder='ইমেইল' required/>
                <label htmlFor="email">মোবাইল  *</label>
                <input id="email" type="number" placeholder='মোবাইল' required/>
                <label htmlFor="message">ম্যাসেজ</label>
                <textarea placeholder='বার্তা পাঠান' required></textarea>
                <input className='send-btn' type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Communication;