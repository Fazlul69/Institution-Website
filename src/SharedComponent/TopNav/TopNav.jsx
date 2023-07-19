import React, { useState } from 'react';
import topnavcss from './topnav.module.css'
import { Link } from 'react-router-dom';
const TopNav = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = (toggle)=>{
        setToggle(toggle)
    }
    return (
        <div>
            <nav className={topnavcss.top_nav}>
                <ul>
                   <li onClick={()=>handleToggle(true)}><button className={toggle? topnavcss.active :''}>Bangli</button></li>
                   <li onClick={()=>handleToggle(false)}><button className={toggle? ' ' : topnavcss.active}>English</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default TopNav;