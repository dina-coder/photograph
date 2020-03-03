import React from 'react';
import s from './Pack.module.scss';


const Pack=(props)=>{
    return <div className={s.Background}>
        <img className={s.Image} src={props.img} />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
    </div>
}

export default Pack;
