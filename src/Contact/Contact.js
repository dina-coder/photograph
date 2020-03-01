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

    render() {
        return (
            <div className={s.Back}>
                <div className={s.Logo}>DINA</div>
                <button onClick={() => this.openModal()} className={s.Menu}>
                    <span className={s.Block}></span>
                    <span className={s.Block}></span>
                    <span className={s.Block}></span>
                </button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}
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
    render() {
        if (this.props.isOpen === false) return null;
        return (
            <TransitionGroup animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <nav className={s.MenuContainer}>
                    <div className={s.MenuWindow}></div>
                </nav>
                <div className={s.ButtonContainer}>
                <button onClick={e => this.close(e)}><img   className={s.Logo1} src={cross}/></button></div>
                <ul>
                    <li onClick={e=> this.close(e)}><NavLink className={s.NavLink} to='/price'>Love story</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink className={s.NavLink} to='/price'>Personal</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink className={s.NavLink} to='/price'>Reportage</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink className={s.NavLink} to='/price'>Price</NavLink></li>
                    <li onClick={e=> this.close(e)}><NavLink className={s.NavLink} to='/price'>Contact</NavLink></li>
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
