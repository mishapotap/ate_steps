import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as routes from '../../const/routes';
import './Aes.scss'
import { AesSvg } from './svg/AesSvg';

import ReactorPic from '../../assets/img/Scheme-4.gif'
import ReactorPic1 from '../../assets/img/Scheme-2.gif'
import ReactorPic2 from '../../assets/img/Scheme-3.gif'
import { Power } from '../Power';



// import Gradeer from "../../assets/img/aes/1.png"
// import TurbinBuild from "../../assets/img/aes/2.png"
// import ReactorBuild from "../../assets/img/aes/3.png"
// import ReactorHelpBuild from "../../assets/img/aes/4.png"
// import Pool from "../../assets/img/aes/5.png"
// import CleaningBuild from "../../assets/img/aes/6.png"
// import RdesBdes from "../../assets/img/aes/7.png"
// import ChemicalCleaning from "../../assets/img/aes/8.png"
import StartReserve from "../../assets/img/aes/9.png"
// import ElectricBuild from "../../assets/img/aes/10.png"


import { Modal } from '../Modal/Modal';

export const Aes = (props) => {
    const {step} = props;
    const [isPumpOpened, setIsPumpOpened] = useState(false);
    const [isRdesOpened, setIsRdesOpened] = useState(false);
    const [isElectric1Opened, setIsElectric1Opened] = useState(false);
    const [isElectric2Opened, setIsElectric2Opened] = useState(false);
    const [isCleaningOpened, setIsCleaningOpened] = useState(false);
    const [isCleaning2Opened, setIsCleaning2Opened] = useState(false);
    const [isPoolsOpened, setIsPoolsOpened] = useState(false);
    const [isReactorOpened, setIsReactorOpened] = useState(false);
    const [isSecondReactorOpened, setIsSecondReactorOpened] = useState(false);
    const [isBoilerOpened, setIsBoilerOpened] = useState(false);
    const [isTurbineOpened, setIsTurbineOpened] = useState(false);
    

    const onPumpClick = () => {
        setIsPumpOpened(!isPumpOpened);
    };
    const onRdesClick = () => {
        setIsRdesOpened(!isRdesOpened);
    };
    const onElectric1Click = () => {
        setIsElectric1Opened(!isElectric1Opened);
    };
    const onElectric2Click = () => {
        setIsElectric1Opened(!isElectric1Opened);
    };
    const onCleaningClick = () => {
        setIsCleaningOpened(!isCleaningOpened);
    };
    const onCleaning2Click = () => {
        setIsCleaning2Opened(!isCleaning2Opened);
    };
    const onPoolsClick = () => {
        setIsPoolsOpened(!isPoolsOpened);
    };
    const onReactorClick = () => {
        setIsReactorOpened(!isReactorOpened);
    };
    const onSecondReactorClick = () => {
        setIsSecondReactorOpened(!isSecondReactorOpened);
    };
    const onBoilerClick = () => {
        setIsBoilerOpened(!isBoilerOpened);
    };
    const onTurbineClick = () => {
        setIsTurbineOpened(!isTurbineOpened);
    };

    return (
        <div className='aes'>
            <AesSvg className='aes__svg'
                step={step}
                onPumpClick={onPumpClick}
                onRdesClick={onRdesClick}
                onElectric1Click={onElectric1Click}
                onElectric2Click={onElectric2Click}
                onCleaningClick={onCleaningClick}
                onCleaning2Click={onCleaning2Click}
                onPoolsClick={onPoolsClick}
                onReactorClick={onReactorClick}
                onSecondReactorClick={onSecondReactorClick}
                onBoilerClick={onBoilerClick}
                onTurbineClick={onTurbineClick}
            />

            <Modal isOpened={isPumpOpened} onClose={() => {setIsPumpOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Градирня</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/Gradeer/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/Gradeer/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/Gradeer/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Градирня (охладительная башня)-устройство для охлаждения большого количества воды направленным потоком атмосферного воздуха.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isRdesOpened && step !== 'a3'} onClose={() => {setIsRdesOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>РДЭС/БДЭС (UBN)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/RdesBdes/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/RdesBdes/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/RdesBdes/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Предназначены для размещения оборудования системы аварийного электроснабжения и дизель-генератора, который является автономным источником электроснабжения потребителей собственных нужд АЭС, важных для безопасности и обеспечивающих сохранность основного оборудования в режиме обесточивания.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isRdesOpened && step === 'a3'} onClose={() => {setIsRdesOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А3.1</div>подэтап</div>
                    <h3>Гидравлические испытания и циркуляционная промывка первого контура</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A3/two/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A3/two/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A3/two/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Выполняются гидравлические испытания первого контура и парогенераторов по второму контуру на плотность (3,2 МПа и 1,96 МПа), наработка ГЦНА (гшлавный циркуляционный насосный агрегат), комплексные испытания систем безопасности, наладка и поддержания водно-химического режима РУ (реакторной установки), первого контура и парогенератора. Выполняется циркуляционная промывка первого контура.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isElectric1Opened} onClose={() => {setIsElectric1Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Электрические здания</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/ElectricBuild/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ElectricBuild/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ElectricBuild/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Предназначены для размещения электротехнических систем и систем контроля нормальной эксплуатации и включает в себя обеспечивающие системы вентиляции ,водоснабжения, канализации и пожаротушения.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaningOpened} onClose={() => {setIsCleaningOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание химводоочистки (UGD)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/ChemicalCleaning/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ChemicalCleaning/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ChemicalCleaning/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Получение технической воды с заданными параметрами качества для потребителей АЭС
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaning2Opened} onClose={() => {setIsCleaning2Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Очистные сооружения</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/CleaningBuild/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/CleaningBuild/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/CleaningBuild/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Предназначены для очистки сточных вод, образующихся в ходе эксплуатации АЭС и в период выпадения дождей и таяния снега.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isPoolsOpened} onClose={() => {setIsPoolsOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Брызгальные бассейны</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/Pool/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/Pool/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/Pool/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Резервуары с системой напорных трубопроводов, распределяющих охлаждаемую воду между разбрызгивающими соплами. Охлажденная вода подается через насосную станцию на ответственные потребители.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isReactorOpened && step !== 'a2' && step !== 'a3' && step !== 'a4' && step !== 'b0' && step !== 'b1' && step !== 'b2' && step !== 'v0' && step !== 'g1' && step !== 'g2'} 
                onClose={() => {setIsReactorOpened(false)}}
            >
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание реактора (UJA)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorBuild/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorBuild/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorBuild/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                    Выполняется разборка реактора после ХГО, ревизия оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО. Выполняется подготовка грузо-подъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор. Выполняются борным промывки реактора, систем первого контура и систем безопасности. Заканчиваются проверки и испытания систем АСУ ТП, ответственных за контроль работы реактора (АКНП, СУЗ, СВРК, СПНИ и тд). Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a2'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А2</div>подэтап</div>
                    <h3>Испытания СГО (Система герметичных охлаждений)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A2/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A2/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A2/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Проверяется плотность и прочность герметичных ограждений (внутренней защитной оболочки).
                        </div>
                        <p>Проводится проверка герметичного ограждения на прочность и герметичность, выполняется замер утечек из гермоограждения, выполняется замеры и анализ динамики фактического напряженно-деформированного состояния конструкций защитной оболочки.</p>
                        <p><b>Герметичное ограждение</b> – совокупность элементов строительных и других конструкций, которые ограждают пространство вокруг реакторной установки или другого объекта, содержащего радиоактивные вещества и образуют предусмотренную проектом границу и препятствуют распространению радиоактивных веществ.</p>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A3}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А3</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a3'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А3.2</div>подэтап</div>
                    <h3>Горячая обкатка реакторной установки</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A3/one/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A3/one/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A3/one/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='modal__subtext'>До ее начала - наложение теплоизоляции на первый контур и парогенератор и монтаж приводов СУЗ. Возможно проведение первой ревизии (обследование) оборудования.</div>
                    <div className='text'>
                        На «горячей фазе» выполняется разогрев РУ с имитационной зоной до номинальных параметрах и проверка параметров работы. Выполняются тензометрирование, теплогидравлические испытания, термометрирование, измерение пульсаций давления, вибраций и перемещений оборудования при разогреве, проверка соответствия полученных результатов проектным требованиям. В машзале выполняются подготовка и постановка турбины на валоповоротное устройство, набор вакуума в кондесаторах, испытания БРУ-К (быстродействующая редукционная установка сброса пара в конденсаторы турбины), наладка и испытания оборудования второго контура и турбинного отделения. Выполняется проверка систем электроснабжения собственных нужд, испытаний систем аварийного электроснабжения, в том числе испытания по кратковременному перерыву электропитания и полному обесточиванию.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a4'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А4</div> Подэтап</div>
                    <h3>Ревизия основного оборудования</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A4/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A4/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A4/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        <div className='modal__subtext'>Подэтап, в течение которого производятся ревизия основного оборудования после ХГО.</div>
                        <ul>
                            <li>Выполняется разборка реактора после ХГО, ревизия дефектного и выбранного оборудования оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО.</li>
                            <li>Выполняется подготовка грузоподъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор.</li>
                            <li>Выполняются промывки реактора борным раствором, а также систем первого контура и систем безопасности. Создаются регламентные запасы борного раствора.</li>
                            <li>Заканчиваются проверки и испытания различных систем АСУ ТП (<b>АСУ ТП - автоматизированные системы управления технологическими процессами</b>), ответственных за контроль работы реактора. Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.</li>
                        </ul>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B0}>
                            <span>Смотреть далее</span>
                            <span>Этап Б</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b0'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>Б</div>этап</div>
                    <h3>Физический пуск</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/B0/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/B0/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/B0/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Этап ввода блока АЭС в эксплуатацию, включающий загрузку реактора ядерным топливом, достижение критического состояния реактора и выполнение необходимых физических экспериментов на уровне мощности, при котором теплоотвод от реак4тора осуществляется за счет естественных теплопотерь.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б1</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b1'} onClose={() => {setIsReactorOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Б1</div>подэтап</div>
                    <h3>Загрузка реактора ядерным топливом и испытания в подкритическом состоянии</h3>
                    <img src={ReactorPic1} style={{width: "100%"}} alt='' /> 
                    <div className='text'>
                        <ul>
                            <li>Первая загрузка ядерного топлива в активную зону.</li>
                            <li>Сборка реактора, разогрев до номинальных параметров I контура.</li>
                            <li>Уплотнение реактора.</li>
                            <li>Проверка трубопроводов и оборудования 1-го контура на плотность.</li>
                            <li>Теплофизические и теплогидравлические эксперименты.</li>
                        </ul>
                    </div>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/B1/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/B1/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/B1/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б2</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b2'} onClose={() => {setIsReactorOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Б2</div>подэтап</div>
                    <h3>Вывод реактора на МКУ</h3>
                    <img src={ReactorPic2} style={{width: "100%"}} alt='' /> 
                    <div className='text'>
                        <div className='modal__subtext'>Достижение критического состояния реактора и выполнение физических экспериментов на МКУ (мин. контролируемый уровень мощности)</div>
                        <div className='modal__img__wrapper'>
                            <img src={require("../../assets/img/Map/Modals/B2/modal-01.jpg")} className='modal__img' alt="" />
                            <img src={require("../../assets/img/Map/Modals/B2/modal-02.jpg")} className='modal__img' alt="" />
                            <img src={require("../../assets/img/Map/Modals/B2/modal-03.jpg")} className='modal__img' alt="" />
                        </div>
                        <ul>
                            <li>Первый вывод реактора в критическое состояние (управляемая ядерная реакция).</li>
                            <li>Проводятся физические испытания и подтверждаются нейтронно-физические характеристики активной зоны.</li>
                            <li>Комплексная проверка АКНП (аппаратура контроля нейтронного потока), СУЗ (система управления и защиты), защит и блокировок, в т.ч. проверка правильного функционирования систем АСУ ТП и систем контроля нейтронной мощности, в том числе тарировка измерителей.</li>
                            <li>Физические эксперименты на мощности до 1% от номинальной.</li>
                        </ul>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.V0}>
                            <span>Смотреть далее</span>
                            <span>Подэтап В</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'v0'} onClose={() => {setIsReactorOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>В</div>этап</div>
                    <h3>Энергетический пуск</h3>
                    <img src={ReactorPic} style={{width: "100%"}} alt='' /> 
                    <div className='text'>
                        <div className='modal__subtext'>Ввод АЭС в эксплуатацию от завершения физического пуска реактора до начала выработки электроэнергии.</div>
                        <ul>
                            <li>Поэтапный подъем мощности реактора до 40%.</li>
                            <li>Продолжается выполнение испытаний и проверок оборудования реактора - физические эксперименты, снятие теплогидравлических характеристик оборудования, пусконаладочные измерения.</li>
                            <li>Сдача блока в опытно-промышленную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/V0/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/V0/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/V0/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Выполняется повышение мощности реактора поэтапно до уровня 40 % от номинальной мощности. Выполняются проверки, испытаний и подтверждение достоверности данных с систем контроля и управления, испытаний основных регуляторов энергоблока, уровнемеров, отсечных и предохранительных устройств. Продолжаются физические испытания и эксперименты. Выполняется первый толчок турбины, разворот турбины, вывод турбины на номинальные обороты. Выполняется синхронизация и включение генератора в электрическую сеть, энергоблок начинает вырабатывать электроэнергию в энергосистему страны.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G0}>
                            <span>Смотреть далее</span>
                            <span>Этап Г</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened && step === 'v0'} onClose={() => {setIsTurbineOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>В</div>этап</div>
                    <h3>Энергетический пуск</h3>
                    <img src={ReactorPic} style={{width: "100%"}} alt='' /> 
                    <div className='text'>
                        <div className='modal__subtext'>Ввод АЭС в эксплуатацию от завершения физического пуска реактора до начала выработки электроэнергии.</div>
                        <ul>
                            <li>Поэтапный подъем мощности реактора до 40%.</li>
                            <li>Продолжается выполнение испытаний и проверок оборудования реактора - физические эксперименты, снятие теплогидравлических характеристик оборудования, пусконаладочные измерения.</li>
                            <li>Сдача блока в опытно-промышленную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/V0/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/V0/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/V0/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Выполняется повышение мощности реактора поэтапно до уровня 40 % от номинальной мощности. Выполняются проверки, испытаний и подтверждение достоверности данных с систем контроля и управления, испытаний основных регуляторов энергоблока, уровнемеров, отсечных и предохранительных устройств. Продолжаются физические испытания и эксперименты. Выполняется первый толчок турбины, разворот турбины, вывод турбины на номинальные обороты. Выполняется синхронизация и включение генератора в электрическую сеть, энергоблок начинает вырабатывать электроэнергию в энергосистему страны.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G0}>
                            <span>Смотреть далее</span>
                            <span>Этап Г</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'g1'} onClose={() => {setIsReactorOpened(false)}} className='size-l'>
                <div>
                    <div className='modal__stage-subtitle'><div>Г1</div>подэтап</div>
                    <h3>Освоение мощности</h3>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Освоение мощности блока АЭС от включения генератора в сеть до 100% номинальной мощности.<br />
                            Номинальная мощность (номинальный уровень) – это 100% проектная мощность реактора.
                        </div>
                        <ol>
                            <li>
                                Поэтапное освоение уровней мощности - от 40 до 100 % (50, 75, 90,100 %).
                                <Power percent={40} />
                            </li>
                            <li>Нейтронно-физические эксперименты;</li>
                            <li>Теплогидравлические и теплофизические эксперименты;</li>
                            <li>Испытание систем и оборудования турбины и других систем с выведенной УПЗ (ускоренной предупредительной защитой);</li>
                            <li>Настройка регуляторов, программ пошагового управления;</li>
                            <li>
                                Выполняются динамические испытания по проверки работы систем и оборудования при отключении (подключении) в стационарных и переходных режимах:
                                <ul>
                                    <li>Отключение одного ГЦН, двух ГЦН;</li>
                                    <li>Отключение питательного насоса;</li>
                                    <li>Отключение турбины как со срывом вакуума, так и без срыва;</li>
                                    <li>Полное обесточение блока с проверкой режимно естественной циркуляции.</li>
                                </ul>
                            </li>
                            <li>Выполняется проверка биологической защиты, проверяется радиационная обстановка в помещениях АЭС и за ее пределами.</li>
                            {/* <li>
                                Освоение 75% номинального уровня мощности
                                <Power percent={75} />
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 50% Nом за исключением – не делается испытание по полному обесточению блока.</li>
                                </ul>
                            </li>
                            <li>
                                Освоение 100% номинального уровня мощности
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 75% Nом.</li>
                                </ul>
                            </li> */}
                        </ol>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Г2</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened && step === 'g1'} onClose={() => {setIsTurbineOpened(false)}} className='size-l'>
                <div>
                    <div className='modal__stage-subtitle'><div>Г1</div>подэтап</div>
                    <h3>Освоение мощности</h3>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Освоение мощности блока АЭС от включения генератора в сеть до 100% номинальной мощности.<br />
                            Номинальная мощность (номинальный уровень) – это 100% проектная мощность реактора.
                        </div>
                        <ol>
                            <li>
                                Поэтапное освоение уровней мощности - от 40 до 100 % (50, 75, 90,100 %).
                                <Power percent={40} />
                            </li>
                            <li>Нейтронно-физические эксперименты;</li>
                            <li>Теплогидравлические и теплофизические эксперименты;</li>
                            <li>Испытание систем и оборудования турбины и других систем с выведенной УПЗ (ускоренной предупредительной защитой);</li>
                            <li>Настройка регуляторов, программ пошагового управления;</li>
                            <li>
                                Выполняются динамические испытания по проверки работы систем и оборудования при отключении (подключении) в стационарных и переходных режимах:
                                <ul>
                                    <li>Отключение одного ГЦН, двух ГЦН;</li>
                                    <li>Отключение питательного насоса;</li>
                                    <li>Отключение турбины как со срывом вакуума, так и без срыва;</li>
                                    <li>Полное обесточение блока с проверкой режимно естественной циркуляции.</li>
                                </ul>
                            </li>
                            <li>Выполняется проверка биологической защиты, проверяется радиационная обстановка в помещениях АЭС и за ее пределами.</li>
                            {/* <li>
                                Освоение 75% номинального уровня мощности
                                <Power percent={75} />
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 50% Nом за исключением – не делается испытание по полному обесточению блока.</li>
                                </ul>
                            </li>
                            <li>
                                Освоение 100% номинального уровня мощности
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 75% Nом.</li>
                                </ul>
                            </li> */}
                        </ol>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Г2</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'g2'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>Г2</div>подэтап</div>
                    <h3>Комплексное опробование блока АЭС на номинальной мощности</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/G2/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/G2/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/G2/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Выполняется нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности
                        </div>
                        <ul>
                            <li>Проводится комплексное 15 суточное опробование блока на номинальной мощности (сдаточные испытания) – нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности в базисном режиме, осуществляется поддержание проектных технико-экономических показателей и характеристик с целью определения готовности блока к промышленной эксплуатации.</li>
                            <li>Проводится приемка блока приемочной комиссией в постоянную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.FINAL}>
                            <span>Смотреть далее</span>
                            <span>Промышленная эксплуатация</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened && step === 'g2'} onClose={() => {setIsTurbineOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>Г2</div>подэтап</div>
                    <h3>Комплексное опробование блока АЭС на номинальной мощности</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/G2/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/G2/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/G2/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        <div className='modal__subtext'>
                            Выполняется нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности
                        </div>
                        <ul>
                            <li>Проводится комплексное 15 суточное опробование блока на номинальной мощности (сдаточные испытания) – нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности в базисном режиме, осуществляется поддержание проектных технико-экономических показателей и характеристик с целью определения готовности блока к промышленной эксплуатации.</li>
                            <li>Проводится приемка блока приемочной комиссией в постоянную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.FINAL}>
                            <span>Смотреть далее</span>
                            <span>Промышленная эксплуатация</span>
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isSecondReactorOpened} onClose={() => {setIsSecondReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Вспомогательное реакторное здание (UKA)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorHelpBuild/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorHelpBuild/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/ReactorHelpBuild/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Предназначено для размещения вспомогательных систем реакторного отделения, систем спецводоочистки и спецгазоочистки, переработки и хранения жидких радиоактивных отходов и систем вентиляции зоны контролируемого доступа.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isBoilerOpened} onClose={() => {setIsBoilerOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Пускорезервная котельная (UTH)</h3>
                    {/* <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/StartReserve/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/StartReserve/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/StartReserve/modal-03.jpg")} className='modal__img' alt="" />
                    </div> */}
                    {/* <img className='modal__image' src={StartReserve} alt="Пускорезервная котельная" /> */}
                    <div className='text'>
                        Котельная, обеспечивающая паровой нагрузкой (подачей пара технологическим потребителям) АЭС в период ее строительства, пуска, ремонта, проведения ПНР и на случай аварийного отключения АЭС.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened && step !== 'v0' && step !== 'g1' && step !== 'g2'} onClose={() => {setIsTurbineOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание турбины (машзал)</h3>
                    <div className='modal__img__wrapper'>
                        <img src={require("../../assets/img/Map/Modals/A0/TurbinBuild/modal-01.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/TurbinBuild/modal-02.jpg")} className='modal__img' alt="" />
                        <img src={require("../../assets/img/Map/Modals/A0/TurbinBuild/modal-03.jpg")} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Размещает в себе оборудование турбинного цеха («второй контур», турбоагрегат, генератор и возбудитель, конденсаторы, насосное оборудование, теплообменники, сепаратор и т.д.).
                        Толчок турбины и вывод на холостые обороты (балансировка при необходимости).
                        Синхронизация турбогенератора с сетью. 
                    </div>
                </div>
            </Modal>
            
        </div>
    );
};
