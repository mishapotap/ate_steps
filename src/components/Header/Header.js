import React, {useState} from 'react'
import './Header.scss';

import Logo from '../../assets/img/logo.png'
import { BurgerMenu } from '../svg/BurgerMenu';
import { Menu } from '../Menu/Menu';
import { Modal } from '../Modal/Modal';

export const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <>
            <div className='header'>
                <div className='header__logo'><a href='https://atech.ru/presentation'><img src={Logo} alt='' /></a></div>
                <div className='header__middle'>Этапы ввода в эксплуатацию АЭС</div>
                <div className='header__menu'>
                    <div className='menu-btn' onClick={() => {setIsMenuOpened(true)}}>
                        интерактивные проекты
                        <BurgerMenu />
                    </div>
                </div>
            </div>
            <Modal isOpened={isMenuOpened} onClose={() => {setIsMenuOpened(false)}} className='modal_large'>
                <Menu />
            </Modal>
        </>
    );
};
