import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Tournaments from './Tournaments';
// import Matchs from './Matchs';
// import TournamentTables from './TournamentTables';


const osName = platform();

const TournamentTable = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			TournamentTable
		</PanelHeader>
		<div class="tournametntTableMenu">
			<ul>
				<li>
					<a href="" class="tournamentTabMenuLink" href="">Турниры</a>
				</li>
				<li>
					<a href="" class="tournamentTabMenuLink" href="">Матчи</a>
				</li>
				<li>
					<a href="" class="tournamentTabMenuLink" href="">Команды</a>
				</li>
				<li>
					<a href="" class="tournamentTabMenuLink" href="">Игроки</a>
				</li>
			</ul>
		</div>
		<Tournaments/>
	</Panel>
);

TournamentTable.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default TournamentTable;