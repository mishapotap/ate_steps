import React, {Component, Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { QuestionIcon } from '../../components/svg/QuestionIcon';
import { Modal } from '../../components/Modal/Modal';

const video = videos.video11

export const A0 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
                Подготовительный этап
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='a0' />
            <Footer>
                <div className='footer__btns'>
                    <Button size={ButtonSize.m} onClick={() => {setIsStepModalOpened(true)}}><QuestionIcon /></Button>
                </div>
                <div className='footer__content'>
                    <div className='footer__left'>
                        <div className='footer__btn-steps'>
                            <Link to={routes.MAP}>
                                <Button size={ButtonSize.m}>Этапы пусконаладочных работ в структуре АЭС</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='footer__right'>
                        <div className='footer__links'>
                            <div className='footer__title'>
                                Подготовительный этап
                                <b>Подэтап А0</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.A1}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап А1</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.MAP} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.A1} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Подготовительный этап</h3>
                    <div class='text'>
                        Производится приемка оборудования и систем объектов пускового комплекса блока АЭС, а также оборудования и СКУ реакторного и турбинного отделений из монтажа и выполнение на них ПНР, обеспечивающих проведение этапа А.1.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А1</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
