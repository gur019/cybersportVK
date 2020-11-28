
import React from 'react';
import './styles.css';
import teamLogo3 from './images/teamLogo3.png';
import teamLogo2 from './images/teamLogo2.png';
import teamLogo4 from './images/teamLogo4.png';
import teamLogo5 from './images/teamLogo5.png';
import flag1 from './images/flag1.png';
import flag2 from './images/flag2.png';
import flag3 from './images/flag3.png';
import virtusTM1 from './images/virtus/virtusTM1.png';
import virtusTM2 from './images/virtus/virtusTM2.png';
import virtusTM3 from './images/virtus/virtusTM3.jpg';
import virtusTM4 from './images/virtus/virtusTM4.png';
import virtusTM5 from './images/virtus/virtusTM5.png';
import naviTM1 from './images/navi/naviTM1.png';
import naviTM2 from './images/navi/naviTM2.png';
import naviTM3 from './images/navi/naviTM3.png';
import naviTM4 from './images/navi/naviTM4.png';
import naviTM5 from './images/navi/naviTM5.png';
import ogTM1 from './images/og/ogTM1.png';
import ogTM2 from './images/og/ogTM2.png';
import ogTM3 from './images/og/ogTM3.png';
import ogTM4 from './images/og/ogTM4.png';
import ogTM5 from './images/og/ogTM5.png';
import nigmaTM1 from './images/nigma/nigmaTM1.png';
import nigmaTM2 from './images/nigma/nigmaTM2.png';
import nigmaTM3 from './images/nigma/nigmaTM3.png';
import nigmaTM4 from './images/nigma/nigmaTM4.png';
import nigmaTM5 from './images/nigma/nigmaTM5.png';

const Teams = () => {
    return (
        <div className="tournamentContainer">
            <div className="tournamentSearchBlock">
                <input className="tournamentSearchInput" type="text" placeholder="Поиск по названию команды..."></input>
            </div>
            <section className="teamContainers">
                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag1} width="15" height="auto"/>
                        <span>Virtus.pro</span>
                    </div>
                    <img src={teamLogo3} className="teamLogo1" />
                    <span className="dpc">DPC: 175</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={virtusTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag2} width="15" height="auto"/>
                        <span>Natus Vincere</span>
                    </div>
                    <img src={teamLogo2} className="teamLogo1" />
                    <span className="dpc">DPC: 158</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={naviTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag3} width="15" height="auto"/>
                        <span>OG</span>
                    </div>
                    <img src={teamLogo4} className="teamLogo1" />
                    <span className="dpc">DPC: 175</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={ogTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag3} width="15" height="auto"/>
                        <span>Team Nigma</span>
                    </div>
                    <img src={teamLogo5} className="teamLogo1" />
                    <span className="dpc">DPC: 158</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={nigmaTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag1} width="15" height="auto"/>
                        <span>Virtus.pro</span>
                    </div>
                    <img src={teamLogo3} className="teamLogo1" />
                    <span className="dpc">DPC: 175</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={virtusTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={virtusTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag2} width="15" height="auto"/>
                        <span>Natus Vincere</span>
                    </div>
                    <img src={teamLogo2} className="teamLogo1" />
                    <span className="dpc">DPC: 158</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={naviTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={naviTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag3} width="15" height="auto"/>
                        <span>OG</span>
                    </div>
                    <img src={teamLogo4} className="teamLogo1" />
                    <span className="dpc">DPC: </span>
                    <div>
                        <a>
                            <img className="teammateImg" src={ogTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={ogTM5}/>
                        </a>
                    </div>
                </div>

                <div className="teamBlock">
                    <div class="teamNameBlock">
                        <img src={flag3} width="15" height="auto"/>
                        <span>Team Nigma</span>
                    </div>
                    <img src={teamLogo5} className="teamLogo1" />
                    <span className="dpc">DPC: 150</span>
                    <div>
                        <a>
                            <img className="teammateImg" src={nigmaTM1}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM2}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM3}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM4}/>
                        </a>
                        <a>
                            <img className="teammateImg" src={nigmaTM5}/>
                        </a>
                    </div>
                </div>
                
            </section>
        </div>

    )
}

export default Teams;