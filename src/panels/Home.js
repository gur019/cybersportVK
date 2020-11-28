import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import './Home.css';

const Home = ({ id, go, fetchedUser }) => (
	<Panel centered = {true} id={id} >
		<PanelHeader>CyberSport VK</PanelHeader>
		

		<Group  title="Navigation Example">
			{fetchedUser &&
			<Group>
				<Div className='User'>
					{fetchedUser.photo_200 ? <Avatar size = {150} src={fetchedUser.photo_200}/> : null}
					<h2>Привет, {fetchedUser.first_name} !</h2>
					<h3>Этот сервис поможет поможет Вам в организации и участии в турнирах</h3>
				</Div>
			</Group>
			}
			<FixedLayout vertical='bottom'>
					<Div>
						<Button mode='commerce' size="xl" level="2" onClick={go} data-to="CompetenceWelcom">
							ОК, все понятно
						</Button>
					</Div>
			</FixedLayout>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
