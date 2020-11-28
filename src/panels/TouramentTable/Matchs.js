import React from 'react';
import './styles.css';
import teamLogo1 from './images/teamLogo1.png';
import teamLogo2 from './images/teamLogo2.png';
import tournamentLogo from './images/tournamentLogo.png';

const Matchs = () => {
    return (
        <div class="tournamentContainer">
            <div class="tournamentSearchBlock">
                <input class="tournamentSearchInput" type="text" placeholder="Поиск по турниру или команде"></input>
                <input class="tournamentSearchCalendar" type="date"></input>
            </div>
            <section class="currentGames">
                <h3>ТЕКУЩИЕ ИГРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="gameStatusHalf">Игра 1/3</span>
                            <span class="gameStatusMatchTime">+46:34</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="gameStatusHalf">Игра 3/3</span>
                            <span class="gameStatusMatchTime">Ожидание</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
            </section>


            
            <section class="futureGames">
                <h3>БУДУЩИЕ ИГРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">30:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">30:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
            </section>



            <section class="pastGames">
                <h3>Прошедшие игры</h3>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="50px" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div>
                                <span class="teamName">NNB-team</span>
                                <span class="rate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div>
                                <span class="teamName">NAVI</span>
                                <span class="rate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
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

export default Matchs;