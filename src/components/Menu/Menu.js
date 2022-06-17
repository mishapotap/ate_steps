import React from 'react'
import './Menu.css'
import { navimg1, navimg2, navimg3, navimg4, navimg5, navicon1, navicon2, navicon3, navicon4, navicon5 } from '../../assets/img/Nav';
import { Ellipse } from '../svg/Ellipse'
import * as routes from '../../const/routes';

export const Menu = () => {

    const nav = [
        {
            id: "1",
            name: 'Текущие и выполненные проекты АТЭ',
            image: navimg1,
            icon: navicon1,
            pathname: routes.PROJECT,
          },
          {
            id: "2",
            name: 'Филиалы и Представительства АТЭ',
            image: navimg2,
            icon: navicon2,
            pathname: routes.BRANCH,
          },
          {
            id: "3",
            name: 'История АО «Атомтехэнерго»',
            image: navimg3,
            icon: navicon3,
            pathname: routes.HISTORY,
          },
          {
            id: "4",
            name: 'Этапы пусконаладочных работ АЭС',
            image: navimg4,
            icon: navicon4,
            pathname: routes.HOME,
          },
          {
            id: "5",
            name: 'Портфель заказов АТЭ',
            image: navimg5,
            icon: navicon5,
            pathname: routes.PORTFOLIO,
          },
    ]
    
    return (
        <div className='menu'>
            <div className='menu__stages'>
                {nav.map((item) => (
                    <a key={item.id} className="menu__stage" href={item.pathname}>
                        <div className='menu__image__wrapper' style={{backgroundImage: `url(${item.image})`}}>
                            <img src={item.icon} alt="Slide icon" />
                        </div>
                        <div className='menu__text'>{item.name}</div>
                        <div className='menu__line'>
                            <Ellipse/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
