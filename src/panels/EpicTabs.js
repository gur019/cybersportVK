import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
// import Icon28NewsfeedOutline from '@vkontakte/vkui/dist/components/Icon28NewsfeedOutline/Icon28NewsfeedOutline';
// import Icon28ServicesOutline from '@vkontakte/vkui/dist/components/Icon28ServicesOutline/Icon28ServicesOutline';
// import Icon28MessageOutline from '@vkontakte/vkui/dist/components/Icon28MessageOutline/Icon28MessageOutline';
import View from '@vkontakte/vkui/dist/components/View/View';
// import Icon28ClipOutline from '@vkontakte/vkui/dist/components/Icon28ClipOutline/Icon28ClipOutline';
// import Icon28UserCircleOutline from '@vkontakte/vkui/dist/components/Icon28UserCircleOutline/Icon28UserCircleOutline';

class EpicTabs extends React.Component {
    constructor (props) {
      super(props);
  
      this.state = {
        activeStory: 'profile'
      };
      this.onStoryChange = this.onStoryChange.bind(this);
    }
  
    onStoryChange (e) {
      this.setState({ activeStory: e.currentTarget.dataset.story })
    }
  
    render () {
  
      return (
        <EpicTabs activeStory={this.state.activeStory} tabbar={
          <Tabbar>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'feed'}
              data-story="feed"
              text="Новости"
            >4</TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'services'}
              data-story="services"
              text="Сервисы"
            >5</TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'messages'}
              data-story="messages"
              label="12"
              text="Сообщения"
            >2</TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'clips'}
              data-story="clips"
              text="Клипы"
            >1</TabbarItem>
            <TabbarItem
              onClick={this.onStoryChange}
              selected={this.state.activeStory === 'profile'}
              data-story="profile"
              text="Профиль"
            >3</TabbarItem>
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader>Новости</PanelHeader>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader>Сервисы</PanelHeader>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader>Сообщения</PanelHeader>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader>Клипы</PanelHeader>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader>Профиль</PanelHeader>
            </Panel>
          </View>
        </EpicTabs>
      )
    }
  }
  
export default EpicTabs;