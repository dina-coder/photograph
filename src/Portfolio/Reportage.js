import React from 'react';
import s from './LoveStory.module.scss';
import p1 from '../img/DSC_0001-2.jpg';
import p2 from '../img/DSC_0137.JPG';

const Reportage = () => {
    let Photos=[p1, p2]
    return (
        <div className={s.Back}>
            <h1 className={s.Title}>Reportage</h1>
            <hr></hr>
            <div className={s.ImageContainer}>
            {Photos.map(i=><img src={i}/>)}
            </div>
        </div>
    );
}

export default Reportage;
