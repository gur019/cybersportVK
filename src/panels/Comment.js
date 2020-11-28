import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import re from './img/re.png'
import с1 from './img/с1.png'
import с2 from './img/с2.png'
import './Comment.css';

import user_4 from './feed/img/z0VWLx3VRPk.jpg';



const osName = platform();


const Comment  = (props) =>  {
    return(
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="Organizers">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Отзывы
		</PanelHeader>
        
        <div style={{zIndex:"1000" , position:'fixed', backgroundColor:'#19191a'}}>
        <Group separator="hide">
            <CardGrid>
                <Card size="l">
                    <div style={{ height: "auto", textAlign:"center"}} >
                        <img style={{width:'100%'}} src={re}  alt=""/>
                    </div>
                </Card>
            </CardGrid>
        </Group>
        </div>
        <Group separator="hide" style={{marginTop:'400px'}}>
            <CardGrid>
                <Card size="l">
                    <div style={{ height: "auto", textAlign:"center" }} >
                        <img style={{width:'100%'}} src={с1}  alt=""/>
                    </div>
                </Card>
            </CardGrid>
        </Group>

        <Group separator="hide">
            <CardGrid>
                <Card size="l">
                    <div style={{ height: "auto", textAlign:"center" }} >
                        <img style={{width:'100%'}} src={с2}  alt=""/>
                    </div>
                </Card>
            </CardGrid>
        </Group>


	</Panel>
    )
}



export default Comment;
