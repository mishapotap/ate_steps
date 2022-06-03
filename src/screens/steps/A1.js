import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';
import Modal_Image_1 from '../../assets/img/Map/Modals/A1/modal-01.jpg';
import Modal_Image_2 from '../../assets/img/Map/Modals/A1/modal-02.jpg';
import Modal_Image_3 from '../../assets/img/Map/Modals/A1/modal-03.jpg';


export const A1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A1;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Испытания и опробование оборудования</div>
                <div className="step-title1">Подэтап А1</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='a1' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A0} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А0
                            </Button>
                        </Link>
                        <Link to={`${routes.MAP}#2`} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A2} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А2
                                <ArrowIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А1</div>подэтап</div>
                    <h3>Испытания и опробование оборудования</h3>
                    <div className='modal__img__wrapper'>
                        <img src={Modal_Image_1} className='modal__img' alt="" />
                        <img src={Modal_Image_2} className='modal__img' alt="" />
                        <img src={Modal_Image_3} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Подэтап, в течение которого, начиная с системы дистиллята, производится приемка технологических систем и оборудования реакторного отделения и машинного зала блока из монтажа в ПНР.
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-01.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Выполняются пусконаладочные работы и испытания на системах и оборудовании для подтверждения проектной работы и готовности к выходу на номинальные параметры температуры-давления на следующем подэтапе – А-3.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-02.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Выполняются испытания систем безопасности на открытый реактор.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-03.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Выполняется загрузка имитационной активной зоны (имитаторами ТВС – тепловыделяющей сборки), по своим параметрам аналогичной настоящей активной зоне и последующая сборка реактора для проведения испытаний реакторной установки во время холодно-горячей обкатки.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-04.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Наладка перегрузочной машины и транспортно-технологического оборудования.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-05.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Наладка АСУ ТП (измерительные каналы, защиты и блокировки, сигнализация, схемы дистанционного управления механизмами и арматурой, пошаговых программ управления, архивация и пр.).</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-06.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Выполняются работы на системах и оборудовании на завершающей стадии монтажа – послемонтажные очистки, гидравлические (пневматические) испытания и индивидуальные испытания и опробования оборудования.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-07.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Выполняется вибродиагностика оборудования и наладка опорно-подвесной системы.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-08.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Регистрация оборудования и систем, включая СГО, в органах надзора.</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-09.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Проверяется плотность первого контура Р=35 кг/см².</div>
                        </div>
                    </div>
                    <div className='modal__row'>
                        <div className='modal__col__img'>
                            <img src={require("../../assets/img/Map/Modals/A1/Items/modal-10.jpg")} alt="" />
                        </div>
                        <div className='modal__col__text'>
                            <div className='text'>Проводится поканальное опробование аварийных дизель-генераторов с работой на сеть и опробования схемы ступенчатого пуска механизмов (с реальным разворотом механизмов).</div>
                        </div>
                    </div>
                    
                    <div className='modal__link'>
                        <Link to={routes.A2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А2</span>
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
