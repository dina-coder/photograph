import React from 'react';
import s from './Price.module.scss';
import Pack from "./Pack/Pack";
import img3 from '../img/DSC_0037.jpg';
import img1 from '../img/DSC_0268.jpg';
import img2 from '../img/DSC_0383.jpg';


const Price=()=>{
    let AllPacks=[{name: "Personal",
        price: "900₽",
        image: img1},
        { name: "Love story",
            price: "1000₽",
            image: img2},
        {name: "Reportage",
            price: "600₽/h",
            image: img3},
    ] ;
    let Packs=AllPacks.map(element=><Pack name={element.name} price={element.price} img={element.image}/>)
    return <div className={s.Background}>
        <div className={s.Packs}>
            {Packs}
        </div>
        <div className={s.Conditions}>
        <h1>Important</h1>
            <hr />
        <ul>
            <li>Соглашаясь на съемку, Вы автоматически соглашаетесь с авторским стилем съемки и обработки фотографий;</li>
            <li>Фотограф сохраняет за собой право публиковать Ваши фотографии в своем портфолио, участвовать в выставках и конкурсах. </li>
            <li>Фотосъемка на условиях полной конфиденциальности увеличивает  стоимость заказа на 30%;</li>
            <li>Фотографии передаются на диске с авторским оформлением или через файлообменник (в зависимости от пакета услуг и общих договоренностей).</li>
            <li>Исходники фотографий не предоставляются.</li>
            <li>Время ожидания готового результата – от 2 до 8 недель (зависит от выбранного пакета услуг и загруженности фотографа);</li>
       <li>Оплата производится в день фотосъемки – 100%</li>
        </ul>
        </div>

    </div>
}

export default Price;
