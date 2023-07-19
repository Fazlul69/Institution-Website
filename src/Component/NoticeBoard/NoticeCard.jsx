import React from 'react';

const NoticeCard = (props) => {
    console.log(props)
    return (
        <div className={props.clsName}>
            <img src={props.img} alt=""  width={300} height={200}/>
            <button className={props.btnCls}>{props.button}</button>
        </div> 
    );
};

export default NoticeCard;