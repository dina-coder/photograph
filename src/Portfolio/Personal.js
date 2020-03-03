import React from 'react';
import s from './LoveStory.module.scss';
import p1 from'../img/DSC_0077.jpg';
import p2 from'../img/DSC_0131.jpg';
import p3 from'../img/DSC_0203.jpg';
import p4 from'../img/DSC_0205.jpg';
import p5 from'../img/DSC_0281.jpg';
import p6 from'../img/DSC_0374.jpg';
import p7 from'../img/DSC_0427.jpg';
import p8 from'../img/DSC_1016.jpg';

const LoveStory = () => {
    let Photos=[p1, p2,p3,p4, p5,p6,p7,p8]
    return (
        <div className={s.Back}>
            <h1 className={s.Title}>Love Story</h1>
            <hr></hr>
            <div className={s.ImageContainer}>
            {Photos.map(i=><img src={i}/>)}
            </div>
        </div>
    );
}

export default LoveStory;
