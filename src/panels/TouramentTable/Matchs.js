import React from 'react';
import './styles.css';
import teamLogo1 from './images/teamLogo1.png';
import teamLogo2 from './images/teamLogo2.png';
import tournamentLogo from './images/tournamentLogo.png';

const Matchs = () => {
    return (
        <div className="tournamentContainer">
            <div className="tournamentSearchBlock">
                <input className="tournamentSearchInput" type="text" placeholder="Поиск по турниру или команде"></input>
                <input className="tournamentSearchCalendar" type="date"></input>
            </div>

            <section className="sectionContainer currentGames">
                <h3 className="sectionHeader">ТЕКУЩИЕ ИГРЫ</h3>

                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="gameStatusHalf">Игра 1/3</span>
                            <span className="gameStatusMatchTime">+46:34</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>

                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="gameStatusHalf">Игра 3/3</span>
                            <span className="gameStatusMatchTime">+59:34</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
            </section>


            
            <section className="sectionContainer futureGames">
                <h3 className="sectionHeader">БУДУЩИЕ ИГРЫ</h3>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent" className="teamInfoBlock">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="teamInfoBlock" className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">30:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">30:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
            </section>



            <section className="sectionContainer pastGames">
                <h3 className="sectionHeader">ПРОШЕДШИЕ ИГРЫ</h3>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
                    </div>
                </a>
                <a href="#" className="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div href="#" className="liveBroadcast"></div>
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

export default Matchs;