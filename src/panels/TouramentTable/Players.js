
import React from 'react';
import './styles.css';

const Players = () => {
    return (
        <div className="tournamentContainer">
            <div className="tournamentSearchBlock">
                <input className="tournamentSearchInput" type="text" placeholder="Поиск по турниру или команде"></input>
                <input className="tournamentSearchCalendar" type="date"></input>
            </div>
        </div>

    )
}

export default Players;