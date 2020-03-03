import React from 'react';
import s from './App.module.css';
import Menu from "./Menu/Menu";
import FirstPage from "./FirstPage/FirstPage";
import Price from "./Price/Price";
import {Route, BrowserRouter} from 'react-router-dom'
import Contact from "./Contact/Contact";
import LoveStory from "./Portfolio/LoveStory";
import Personal from "./Portfolio/Personal";
import Reportage from "./Portfolio/Reportage";


const App=()=>{
  return (
      <div>
          <BrowserRouter>
          <Route path='/' exact={true} render={()=> <FirstPage/> }/>
          <Route path='/contact' render={()=><Contact />} />
          <Route path='/price'  render={()=><Price />} />
          <Route path='/lovestory'  render={()=><LoveStory />} />
          <Route path='/personal'  render={()=><Personal />} />
          <Route path='/reportage'  render={()=><Reportage />} />
              <Menu />
          </BrowserRouter>
      </div>
  );
}

export default App;
