import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Vasia from './panels/Vasia';
import {TournamentTable} from './panels/TouramentTable/index';
import CompetenceWelcom from './panels/CompetenceWelcom';
import Epic from './panels/Epic';
import Organizers from './panels/Organizers';
import Comment from './panels/Comment';
import Icreated from './panels/Icreated';




const App = () => {
	const [activePanel, setActivePanel] = useState('tournamenttable');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
			<Vasia id = 'vasia' go = {go} />
			<TournamentTable id = 'tournamenttable' go = {go} />

			<CompetenceWelcom id = 'CompetenceWelcom' go = {go} />
			<Epic id = 'Epic' go = {go} />
			<Organizers  id = 'Organizers' fetchedUser={fetchedUser} go = {go}/>
			<Comment id='Comment' go = {go}/>
			<Icreated id='Icreated' go = {go}/>
		</View>
	);
}

export default App;

