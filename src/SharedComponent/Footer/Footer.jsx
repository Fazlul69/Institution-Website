import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="institution-container">
                <p>ডুমুরিয়া সরকারি টেকনিক্যাল স্কুল ও কলেজ</p>
                <p>ডুমুরিয়া, খুলনা।</p>
                <p>০১২৩৪৫৬৭৮৯০</p>
                <p>automateitbd@gmail.com</p>
            </div>
            <div className="developers-container">
                <p>কারিগরি সহযোগীতায়ঃ Automate IT Limited</p>
                <p>Phone: 09678-221323</p>
                <p>Website: automate.com.bd</p>
            </div>
        </footer>
    );
};

export default Footer;