import React from 'react';
import { useState} from "react";
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Tournaments from './Tournaments';
import Matchs from './Matchs';
import Players from './Players';
import Teams from './Teams';

const osName = platform();

export const TournamentTable = (props) => {
	const  [activeTab, setActiveTab] = useState(0);
	function switcher(e) {
		e.preventDefault();
		var word = e.currentTarget.text;
		// console.log(word);
		switch (word){
			case 'Турниры':
				setActiveTab(0);
				break;
			case 'Матчи':
				setActiveTab(1);
				break;
			case 'Игроки':
				setActiveTab(2);
				break;
			case 'Команды':
				setActiveTab(3);
				break;
		}
	}
	return(
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="Epic">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Турнирная таблица
		</PanelHeader>
		<div className="tournametntTableMenu">
			<ul>
				<li>
					<a onClick = {switcher} href="" className="tournamentTabMenuLink">Турниры</a>
				</li>
				<li>
					<a onClick = {switcher} href="" className="tournamentTabMenuLink" >Матчи</a>
				</li>
				<li>
					<a onClick = {switcher} href="" className="tournamentTabMenuLink">Команды</a>
				</li>
				<li>
					<a onClick = {switcher} href="" className="tournamentTabMenuLink" >Игроки</a>
				</li>
			</ul>
		</div>
		{activeTab == 0 &&
		<Tournaments/>}
		{activeTab == 1 &&
		<Matchs/>}
		{activeTab == 2 &&
		<Players/>}
		{activeTab == 3 &&
		<Teams/>}

	</Panel>
	)
}
