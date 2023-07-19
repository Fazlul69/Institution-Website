import React from 'react';
import './director.css';
import DirectorData from './DirectorData';
import director_1 from '../../assets/d_1.jpg'
import director_2 from '../../assets/d_2.jpg'
const Director = () => {
    return (
        <div className='director'>
            <DirectorData
                btnName = "মহাপরিচালক"
                directorImg = {director_1}
                directorName = "মোঃ সালাহউদ্দিন আহাম্মদ"
                institution = "কারিগরি শিক্ষা অধিদপ্তর
                বানী.........."
            />
            <DirectorData
                btnName = "পরিচালক (ভোকেশনাল)"
                directorImg = {director_2}
                directorName = "প্রকৌশলী মোঃ মাহবুব হায়দার"
                institution = "নারায়ণগঞ্জ সরকারি টেকনিক্যাল স্কুল ও কলেজ"
            />
        </div>
    );
};

export default Director;