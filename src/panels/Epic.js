import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';


import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28VideocamOutline from '@vkontakte/icons/dist/28/videocam_outline';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

import { useState } from "react";
import './Epic.css';

import {Feed} from './feed/feed';
import {Finder} from './finder/finder'
import {Tv} from './tv/tv';
import {AddEvent} from './addEvent/addEvent';

import sett from './img/sett.png';


const Epic = (props) => {
    const [activePanelCustom, setActivePanelCustom] = useState('feed');
    const [activePanelCustomHeader, setActivePanelCustomHeader] = useState('Главная');
    
    function changePanel(e){
        setActivePanelCustom(e.currentTarget.dataset.story);
        setActivePanelCustomHeader(e.currentTarget.dataset.text);
    }
    return(
	<Panel id={props.id}>
		<PanelHeader>
			{activePanelCustomHeader}
		</PanelHeader>
        <Tabbar>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'feed'}
              data-story="feed"
              data-text="Главная"
              text="Главная"
            ><Icon28NewsfeedOutline/></TabbarItem>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'tv'}
              data-story="tv"
              data-text="Трансляции"
              text="Трансляции"
            ><Icon28VideocamOutline/></TabbarItem>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'addEvent'}
              data-story="addEvent"
              data-text="Создать турнир"
              text="Создать"
            ><Icon28AddCircleOutline/></TabbarItem>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'finder'}
              data-story="finder"
              data-text="Поиск"
              text="Поиск"
            ><Icon28SearchOutline/></TabbarItem>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'settings'}
              data-story="settings"
              data-text="Настройки"
              text="Настройки"
            ><Icon28SettingsOutline/></TabbarItem>
        </Tabbar>
        {activePanelCustom === "feed" &&
            <Feed/>
        }
        {activePanelCustom === "tv" &&
          <Tv/>
        }
        {activePanelCustom === "addEvent" &&
          <AddEvent id={props.id} go={props.go}/>
        }
        {activePanelCustom === "finder" &&
            <Finder/>
        }
        {activePanelCustom === "settings" &&
           <img style={{width:'100%'}} src = {sett} />
        }


	</Panel>
    )
}
// Epic.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// }

export default Epic;