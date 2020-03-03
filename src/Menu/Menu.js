import React from 'react';
import s from './Menu.module.scss';
import logoVK from '../img/ic_head_logo.png'
import logoInst from '../img/Instragm_Icon.png'
import cross from '../img/delete.png'
import {TransitionGroup} from 'react-transition-group'
import {NavLink} from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }
    store=[false, false, false,false, false]
    LogoTipe=()=>{
        for (let i=0;i<this.store.length;i++){
            this.store[i]=false;
        }
}
    render() {
        return (
            <div className={s.Back}>
                <NavLink className={s.NavLink} to='/'><div onClick={this.LogoTipe} className={s.Logo}>DINA</div></NavLink>
                <button onClick={() => this.openModal()} className={s.Menu}>
                    <span className={s.Block}></span>
                    <span className={s.Block}></span>
                    <span className={s.Block}></span>
                </button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
                    store={this.store}
                >
                </Modal>
            </div>
        );
    }

    openModal() {
        this.setState({isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }
}

class Modal extends React.Component {

    Line=(i)=>{
        for (let j=0;j<this.props.store.length;j++){
            this.props.store[j]=false
        }
        this.props.store[i]=true;

    }
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <TransitionGroup animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <nav className={s.MenuContainer}>
                    <div className={s.MenuWindow}></div>
                </nav>
                <div className={s.ButtonContainer}>
                <button  onClick={e => this.close(e)}><img className={s.Logo1} src={cross}/></button></div>
                <ul>
                    <li onClick={e=> this.close(e)}><NavLink onClick={()=>{this.Line(0)}} className={(this.props.store[0]===true ? s.Line:s.NavLink)} to='/lovestory' >Love story</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink onClick={()=>{this.Line(1)}} className={(this.props.store[1]===true ? s.Line:s.NavLink)}  to='/personal'>Personal</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink onClick={()=>{this.Line(2)}} className={(this.props.store[2]===true ? s.Line:s.NavLink)} to='/reportage'>Reportage</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink onClick={()=>{this.Line(3)}} className={(this.props.store[3]===true ? s.Line:s.NavLink)} to='/price'>Price</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink onClick={()=>{this.Line(4)}} className={(this.props.store[4]===true ? s.Line:s.NavLink)} to='/contact'>Contact</NavLink></li>
                </ul>
                <div className={s.Blocks}>
                    <a href ="https://vk.com/oblachko_mr" className={s.LogoContainer}><img className={s.Logo1} src={logoVK}/></a>
                    <a href="https://www.instagram.com/_.oblachko/" className={s.LogoContainer}><img className={s.Logo1} src={logoInst}/></a>
                </div>
            </TransitionGroup>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default Menu;
