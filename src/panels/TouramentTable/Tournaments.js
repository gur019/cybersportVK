import React from 'react';
import './styles.css';
import tournamentLogo from './images/tournamentLogo.png';

const Tournaments = () => {
    return (
        <div className="tournamentContainer">
            <div className="tournamentSearchBlock">
                <input className="tournamentSearchInput" type="text" placeholder="Поиск по названию турниры"></input>
                <input className="tournamentSearchCalendar" type="date"></input>
            </div>



            <section className="currentTournamennts sectionContainer">
                <h3 className="sectionHeader">БУДУЩИЕ ТУРНИРЫ</h3>
                <div className="currentTournamenntsHeader">
                    <span>Турнир</span>
                    <div>
                        <span className="tournamentDateHeader">Дата</span>
                        <span>Призовые</span>
                    </div>
                </div>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>



            <section className="currentTournamennts sectionContainer">
                <h3 className="sectionHeader">ТЕКУЩИЕ ТУРНИРЫ</h3>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>



            <section className="currentTournamennts sectionContainer">
                <h3 className="sectionHeader">ПРОШЕДШИЕ ТУРНИРЫ</h3>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" className="tournamentLinks">
                    <div className="tournamentNameBlock">
                        <img src={tournamentLogo} width="35" height="auto"/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div className="tournamentDateBlock">
                        <span className="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>

            <section className="sectionContainer">
                <ul className="itemList">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <span>...</span>
                    <li>391</li>
                    <button>></button>
                </ul>
            </section>
        </div>

    )
}

export default Tournaments;