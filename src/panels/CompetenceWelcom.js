import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import Group from '@vkontakte/vkui/dist/components/Group/Group';

const osName = platform();

const CompetenceWelcom = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Ваши компетенции
		</PanelHeader>
		<>
		<Group>
			<Cell asideContent={<Switch />}>Организатор</Cell>
			<Cell asideContent={<Switch />}>Коментатор</Cell>
			<Cell asideContent={<Switch />}>Ведущий</Cell>
			<Cell asideContent={<Switch />}>HR менеджер</Cell>
			<Cell asideContent={<Switch />}>Киберспортсмен</Cell>
			<Cell asideContent={<Switch />}>Техническая поддержка</Cell>
			<Cell asideContent={<Switch />}>Аренда</Cell>
		</Group>

		<FixedLayout vertical='bottom'>
			<Div>
				<Button mode='commerce' size="xl" level="2" onClick={props.go} data-to="Epic">
					Готово
				</Button>
			</Div>
		</FixedLayout>
		</>

	</Panel>
);

CompetenceWelcom.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CompetenceWelcom;
