import React from 'react';
import './infomationstyle.css'
import info_purity from '../../../assets/info_purity.jpg'
const InformationPurity = () => {
    return (
        <div className='information-container'>
            <h3>শুদ্ধাচার সংক্রান্ত তথ্য</h3>
            <p>ডুমুরিয়া পলিটেকনিক ইন্সটিটিউট বাংলাদেশের একটি অন্যতম প্রাচীন ও বৃহত্তম কারিগরী শিক্ষা প্রতিষ্ঠান। ২০০৬ সালে কারিগরি শিক্ষা অধিদপ্তর, শিক্ষা মন্ত্রণালয়ের অধীনে যাত্রা শুরু হয় চারটি বিভাগ নিয়ে। বর্তমানে ৭ টি বিষয়ে প্রকৌশল ডিপ্লোমা চালু রয়েছে। দুই একরের কিছু বেশি জায়গা নিয়ে অবস্থিত ডুমুরিয়া পলিটেকনিক ইন্সটিটিউটের ক্যাম্পাসটি।</p>
            <p>এখানে রয়েছে বেশ কয়েকটি ভবন। এরমধ্যে রয়েছে পাঁচ তলা বিশিষ্ট প্রশাসনিক ভবন, পাঁচ তলা এবং দুই তলা বিশিষ্ট দুইটি একাডেমিক ভবন, ২৬ টি ক্লাস রুম, WIFI সুবিধাসহ একটি আইটি সেন্টার, শহীদ মিনার, লাইব্রেরি, আধুনিক ইকুইপমেন্ট সমৃদ্ধ ওয়ার্কশপ এবং ল্যাব, কনফারেন্স রুম, দুইটি স্টুডেন্ট কমন রুম, একটি মেডিক্যাল সেন্টার, সাইকেল গ্যারেজ এবং একটি পাওয়ার সাপ্লাই সাবস্টেশন। এখানে শিক্ষার্থী বা শিক্ষকদের জন্য কোন আবাসিক সুবিধা নেই, তবে অধ্যক্ষ ও কর্মচারীদের জন্য বাসভবন রয়েছে। বর্তমানে মোট সাতটি বিষয়ে চার বছর মেয়াদি ডিপ্লোমা কোর্স চালু রয়েছে।</p>
            <img src={info_purity} alt="" />
        </div>
    );
};

export default InformationPurity;