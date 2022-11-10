
import React from 'react';
import './Characterdetail.css';

const Characterdetail = ({choosen}) => {

    return(
        <div className='characterDetailDesign'>
            <div className='detailPic'><img src={choosen.image} alt={choosen.name}/></div>
            <div>{choosen.name}</div>
            <div>{choosen.status}</div>
            <div>{choosen.gender}</div>
            <div>{choosen.origin.name}</div>
        </div>
    )
};

export default Characterdetail;