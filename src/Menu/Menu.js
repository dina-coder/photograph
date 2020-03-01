import React from 'react';
import s from './App.module.css';

const App=()=>{
  return (
      <div className={s.Back}>
        <div className={s.Logo}>DINA</div>
    <div className={s.App}>
        <span className={s.Menu}></span>
        <span className={s.Menu}></span>
        <span className={s.Menu}></span>
    </div>
        <nav className={s.MenuContainer}>
            <div className={s.MenuWindow}></div>
        </nav>
          <ul>
              <li><a>Love story</a></li>
              <li><a>Personal</a></li>
              <li><a>Reportage</a></li>
              <li><a>Price</a></li>
              <li><a>Contact</a></li>
          </ul>
      </div>
  );
}

export default App;
