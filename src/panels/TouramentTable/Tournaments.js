import React from 'react';
import './styles.css';
import tournamentLogo from './images/tournamentLogo.png';

const Tournaments = () => {
    return (
        <div class="tournamentContainer">
            <div class="tournamentSearchBlock">
                <input class="tournamentSearchInput" type="text" placeholder="Поиск по названию турнирf"></input>
                <input class="tournamentSearchCalendar" type="date" атрибуты></input>
            </div>



            <section class="currentTournamennts">
                <h3>БУДУЩИЕ ТУРНИРЫ</h3>
                <div class="currentTournamenntsHeader">
                    <span>Турнир</span>
                    <div>
                        <span class="tournamentDateHeader">Дата</span>
                        <span>Призовые</span>
                    </div>
                </div>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>



            <section class="currentTournamennts">
                <h3>ТЕКУЩИЕ ТУРНИРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>



            <section class="currentTournamennts">
                <h3>ПРОШЕДШИЕ ТУРНИРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div class="tournamentNameBlock">
                        <img src={tournamentLogo}/>
                        <span>EPIC League Division 1</span>
                    </div>
                    <div class="tournamentDateBlock">
                        <span class="tournamentDate">12 ноя - 13 дек 2020</span>
                        <span>$500 000</span>
                    </div>
                </a>
            </section>

            <section>
                <ul class="itemList">
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