import React from 'react';
import Button from '../../SharedComponent/Button/Button'
const DirectorData = (props) => {
    return (
        <>
            <Button
                name= {props.btnName}
            />
            <img src={props.directorImg} alt="" />
            <div className='director-info'>
                <p>{props.directorName}</p>
                <p>{props.institution}</p>
            </div>
        </>
    );
};

export default DirectorData;