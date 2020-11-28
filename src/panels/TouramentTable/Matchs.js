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

                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="gameStatusHalf">Игра 1/3</span>
                            <span className="gameStatusMatchTime">+46:34</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>

                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="gameStatusHalf">Игра 3/3</span>
                            <span className="gameStatusMatchTime">+59:34</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
            </section>


            
            <section className="sectionContainer futureGames">
                <h3 className="sectionHeader">БУДУЩИЕ ИГРЫ</h3>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent" className="teamInfoBlock">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="teamInfoBlock" className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">29:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">30:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchTime">19:00</span>
                            <span className="matchDate">30:11</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
            </section>



            <section className="sectionContainer pastGames">
                <h3 className="sectionHeader">ПРОШЕДШИЕ ИГРЫ</h3>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
                <div  className="tournamentLinks">
                    <div>
                        <img alt="" src={tournamentLogo} width="35" height="auto"/>
                    </div>
                    <div className="matchStatusContainer">
                        <div className="matchStatusBlock">
                            <div className="matchStatusContent">
                                <span className="teamName">NNB-team</span>
                                <span className="teamRate">1.62</span>
                            </div>
                            <img alt="" className="teamLogo" src={teamLogo1}/>
                        </div>
                        <div className="gameStatus">
                            <span className="matchScore">2:0</span>
                        </div>
                        <div className="matchStatusBlock">
                            <img alt="" className="teamLogo" src={teamLogo2}/>
                            <div className="matchStatusContent">
                                <span className="teamName">NAVI</span>
                                <span className="teamRate">2.21</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div  className="liveBroadcast"></div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Matchs;