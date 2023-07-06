import React from 'react';
import { Link } from 'react-router-dom';

const RouteCard = (props) => {
    return (
        <div className="route-card">
                <p>{props.heading}</p>
                <div className='route-content'>
                    <img src={props.img} alt="" />
                    <div className='card-items'>
                        {
                            props.list.map((item, idx) => <Link key={idx} to="" className='single-items'> <i className="fa-solid fa-arrow-right"></i>
                            {item.name}</Link>)
                        }
                    </div>
                </div>
            </div>
    );
};

export default RouteCard;