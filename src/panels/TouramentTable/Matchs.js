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

            <section class="sectionContainer currentGames">
                <h3 class="sectionHeader">ТЕКУЩИЕ ИГРЫ</h3>

                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="gameStatusHalf">Игра 1/3</span>
                            <span class="gameStatusMatchTime">+46:34</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>

                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="gameStatusHalf">Игра 3/3</span>
                            <span class="gameStatusMatchTime">+59:34</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
            </section>


            
            <section class="sectionContainer futureGames">
                <h3 class="sectionHeader">БУДУЩИЕ ИГРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent" class="teamInfoBlock">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="teamInfoBlock" class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">29:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">30:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchTime">19:00</span>
                            <span class="matchDate">30:11</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
            </section>



            <section class="sectionContainer pastGames">
                <h3 class="sectionHeader">ПРОШЕДШИЕ ИГРЫ</h3>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
                <a href="" class="tournamentLinks">
                    <div>
                        <img src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div class="matchStatusContainer">
                        <div class="matchStatusBlock">
                            <div class="matchStatusContent">
                                <span class="teamName">NNB-team</span>
                                <span class="teamRate">1.62</span>
                            </div>
                            <img class="teamLogo" src={teamLogo1}/>
                        </div>
                        <div class="gameStatus">
                            <span class="matchScore">2:0</span>
                        </div>
                        <div class="matchStatusBlock">
                            <img class="teamLogo" src={teamLogo2}/>
                            <div class="matchStatusContent">
                                <span class="teamName">NAVI</span>
                                <span class="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="" class="liveBroadcast"></a>
                    </div>
                </a>
            </section>


            <section class="sectionContainer">
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