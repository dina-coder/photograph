import React from 'react';
import s from './LoveStory.module.scss';
import p1 from '../img/DSC_0060.jpg';
import p2 from '../img/DSC_0068.jpg';
import p3 from '../img/DSC_0071.jpg';
import p4 from '../img/DSC_0110.jpg';
import p5 from '../img/DSC_0178.jpg';
import p6 from '../img/DSC_0195.JPG';
import p7 from '../img/DSC_0369.jpg';
import p8 from '../img/DSC_0609.jpg';
import p9 from '../img/DSC_0644.jpg';
import p10 from '../img/DSC_0809.png';
import p11 from '../img/DSC_11891.jpg';
import p12 from '../img/DSC_0023842.jpg';
import p13 from '../img/DSC_118911.jpg';
import p14 from '../img/P90728-160713.png';
import p15 from '../img/DSC_0001.jpg';


const Personal = () => {
    let Photos=[p1, p2,p3,p4, p5,p6,p7,p8, p9,p10, p11, p12, p13, p14, p15]
    return (
        <div className={s.Back}>
            <h1 className={s.Title}>Personal</h1>
            <hr className={s.Line1}></hr>
            <div className={s.ImageContainer}>
            {Photos.map(i=><img src={i}/>)}
            </div>
        </div>
    );
}

export default Personal;
