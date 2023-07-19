import React from 'react';
import './roouecontainer.css'
import RouteCard from './RouteCard';
import Campus from '../../assets/campus.png'
import Admission from '../../assets/admission.png'
import CourseList from "../../assets/course-list.png"
import AcademicPaper from "../../assets/academic_paper.png"
import Student from "../../assets/Examination_ex.png"
import Result from "../../assets/GPA.png"
import Resource from "../../assets/resources-.png"
import Gallery from "../../assets/gallery.png"
import Communication from "../../assets/communicaion.png"
import Management from "../../assets/scholarship.png"
const RouteContainer = () => {
    return (
        <div className='route-card-container'>
            
            <RouteCard
                heading = "ক্যাম্পাস"
                img = {Campus}
                list = {
                    [
                        {
                            name:"আমাদের কলেজ",
                            to : '/',
                    },
                        {
                            name:"ইতিহাস",
                            to : '/',
                    },
                        {
                            name:"লক্ষ্য ও উদ্দেশ্য",
                            to : '/',
                    },
                        {
                            name:"প্রাতিষ্ঠানিক কাঠামো",
                            to : '/',
                    },
                        {
                            name:"প্রাতিষ্ঠানিক অবকাঠামো",
                            to : '/',
                    },
                        {
                            name:"শুদ্ধাচার সংক্রান্ত তথ্য",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "ভর্তি"
                img = {Admission}
                list = {
                    [
                        {
                            name:"আবেদন প্রক্রিয়া",
                            to : '/',
                    },
                        {
                            name:"ভর্তি পরীক্ষা",
                            to : '/',
                    },
                        {
                            name:"ভর্তি নীতি",
                            to : '/',
                    },
                        {
                            name:"রেজিস্ট্রেশন সিস্টেম",
                            to : '/',
                    },
                        {
                            name:"বর্তমান শিক্ষা ব্যবস্থা",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "কোর্সসমূহ"
                img = {CourseList}
                list = {
                    [
                        {
                            name:"আমাদের কলেজ",
                            to : '/',
                    },
                        {
                            name:"এসএসসি (ভোকেশনাল)",
                            to : '/',
                    },
                        {
                            name:"বেসিক কোর্স",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "ব্যবস্থাপনা"
                img = {Management}
                list = {
                    [
                        {
                            name:"মহাপরিচালক",
                            to : '/',
                    },
                        {
                            name:"অধ্যক্ষ",
                            to : '/',
                    },
                        {
                            name:"আমাদের শিক্ষকমন্ডলী",
                            to : '/',
                    },
                        {
                            name:"আমাদের কর্মীরা",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "একাডেমিক পেপার"
                img = {AcademicPaper}
                list = {
                    [
                        {
                            name:"একাডেমিক সিলেবাস",
                            to : '/',
                    },
                        {
                            name:"একাডেমিক প্রসপেক্টাস",
                            to : '/',
                    },
                        {
                            name:"শিক্ষা বর্ষপঞ্জি",
                            to : '/',
                    },
                        {
                            name:"পরীক্ষার সময়সূচি",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "শিক্ষার্থী"
                img = {Student}
                list = {
                    [
                        {
                            name:"বেতন",
                            to : '/',
                    },
                        {
                            name:"ছাত্র ইউনিফর্ম",
                            to : '/',
                    },
                        {
                            name:"পরীক্ষার ব্যবস্থা",
                            to : '/',
                    },
                        {
                            name:"নিয়ম এবং প্রবিধান",
                            to : '/',
                    },
                        {
                            name:"শিক্ষার্থীদের সাফল্যের গল্প",
                            to : '/',
                    },
                        {
                            name:"উদ্ভাবনী প্রকল্প",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "ফলাফল"
                img = {Result}
                list = {
                    [
                        {
                            name:"বোর্ড পরীক্ষার ফলাফল",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "রিসোর্স"
                img = {Resource}
                list = {
                    [
                        {
                            name:"ডিজিটাল ক্লাস কনটেন্ট",
                            to : '/',
                    },
                        {
                            name:"গ্রন্থাগার",
                            to : '/',
                    },
                        {
                            name:"কম্পিউটার ল্যাব",
                            to : '/',
                    },
                        {
                            name:"খেলার মাঠ",
                            to : '/',
                    },
                        {
                            name:"সহ-পাঠক্রম সংক্রান্ত কার্যক্রম",
                            to : '/',
                    },
                        {
                            name:"সিটিজেন চার্টার",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "গ্যালারী"
                img = {Gallery}
                list = {
                    [
                        {
                            name:"ফটো গ্যালারী",
                            to : '/',
                    },
                        {
                            name:"ভিডিও গ্যালারী",
                            to : '/',
                    },
                    ]
                }
            />
            <RouteCard
                heading = "যোগাযোগ"
                img = {Communication}
                list = {
                    [
                        {
                            name:"আমাদের কলেজ",
                            to : '/',
                    },
                        {
                            name:"ইতিহাস",
                            to : '/',
                    },
                        {
                            name:"লক্ষ্য ও উদ্দেশ্য",
                            to : '/',
                    },
                        {
                            name:"প্রাতিষ্ঠানিক কাঠামো",
                            to : '/',
                    },
                        {
                            name:"প্রাতিষ্ঠানিক অবকাঠামো",
                            to : '/',
                    },
                        {
                            name:"শুদ্ধাচার সংক্রান্ত তথ্য",
                            to : '/',
                    },
                    ]
                }
            />
        </div>
    );
};

export default RouteContainer;