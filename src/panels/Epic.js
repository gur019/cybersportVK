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

import {Feed} from './feed/feed';
import {Finder} from './finder/finder'

const osName = platform();

const Epic = (props) => {
    const [activePanelCustom, setActivePanelCustom] = useState('finder');
    const [activePanelCustomHeader, setActivePanelCustomHeader] = useState('Новости');
    
    function changePanel(e){
        setActivePanelCustom(e.currentTarget.dataset.story);
        // console.log(e.currentTarget.dataset.text);
        setActivePanelCustomHeader(e.currentTarget.dataset.text);
        // console.log(e.currentTarget.dataset.story);
    }
    return(
	<Panel id={props.id}>
		<PanelHeader
			// left={<PanelHeaderButton onClick={props.go} data-to="home">
			// 	{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			// </PanelHeaderButton>}
		>
			{activePanelCustomHeader}
		</PanelHeader>
        <Tabbar>
            <TabbarItem
              onClick = {changePanel}
              selected={activePanelCustom === 'feed'}
              data-story="feed"
              data-text="Новости"
              text="Новости"
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
          <p>asdasd</p>
        }
        {activePanelCustom === "addEvent" &&
          <p>asdasd</p>
        }
        {activePanelCustom === "finder" &&
            <Finder/>
        }
        {activePanelCustom === "settings" &&
          <p>asdasd</p>
        }


	</Panel>
    )
}
Epic.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
}

export default Epic;

// import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
// import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
// import Icon28NewsfeedOutline from '@vkontakte/vkui/dist/components/Icon28NewsfeedOutline/Icon28NewsfeedOutline';
// import Icon28ServicesOutline from '@vkontakte/vkui/dist/components/Icon28ServicesOutline/Icon28ServicesOutline';
// import Icon28MessageOutline from '@vkontakte/vkui/dist/components/Icon28MessageOutline/Icon28MessageOutline';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import Icon28ClipOutline from '@vkontakte/vkui/dist/components/Icon28ClipOutline/Icon28ClipOutline';
// import Icon28UserCircleOutline from '@vkontakte/vkui/dist/components/Icon28UserCircleOutline/Icon28UserCircleOutline';


// class Epic extends React.Component {
//     constructor (props) {
//       super(props);
  
//       this.state = {
//         activeStory: 'profile'
//       };
//       this.onStoryChange = this.onStoryChange.bind(this);
//     }
  
//     onStoryChange (e) {
//       this.setState({ activeStory: e.currentTarget.dataset.story })
//     }
  
//     render () {
  
//       return (
//         <Epic activeStory={this.state.activeStory} tabbar={
//           <Tabbar>
//             <TabbarItem
//               onClick={this.onStoryChange}
//               selected={this.state.activeStory === 'feed'}
//               data-story="feed"
//               text="Новости"
//             >4</TabbarItem>
//             <TabbarItem
//               onClick={this.onStoryChange}
//               selected={this.state.activeStory === 'services'}
//               data-story="services"
//               text="Сервисы"
//             >5</TabbarItem>
//             <TabbarItem
//               onClick={this.onStoryChange}
//               selected={this.state.activeStory === 'messages'}
//               data-story="messages"
//               label="12"
//               text="Сообщения"
//             >2</TabbarItem>
//             <TabbarItem
//               onClick={this.onStoryChange}
//               selected={this.state.activeStory === 'clips'}
//               data-story="clips"
//               text="Клипы"
//             >1</TabbarItem>
//             <TabbarItem
//               onClick={this.onStoryChange}
//               selected={this.state.activeStory === 'profile'}
//               data-story="profile"
//               text="Профиль"
//             >3</TabbarItem>
//           </Tabbar>
//         }>
//           <View id="feed" activePanel="feed">
//             <Panel id="feed">
//               <PanelHeader>Новости</PanelHeader>
//             </Panel>
//           </View>
//           <View id="services" activePanel="services">
//             <Panel id="services">
//               <PanelHeader>Сервисы</PanelHeader>
//             </Panel>
//           </View>
//           <View id="messages" activePanel="messages">
//             <Panel id="messages">
//               <PanelHeader>Сообщения</PanelHeader>
//             </Panel>
//           </View>
//           <View id="clips" activePanel="clips">
//             <Panel id="clips">
//               <PanelHeader>Клипы</PanelHeader>
//             </Panel>
//           </View>
//           <View id="profile" activePanel="profile">
//             <Panel id="profile">
//               <PanelHeader>Профиль</PanelHeader>
//             </Panel>
//           </View>
//         </Epic>
//       )
//     }
//   }
  
// export default Epic;