import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Button from '@vkontakte/vkui/dist/components/Button/Button';

import {User} from './feed/user';

const osName = platform();


const Organizers  = (props) =>  {

    return(
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="Epic">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Организаторы
		</PanelHeader>
        <User id={props.id} go={props.go}/>

	</Panel>
    )
}



// Organizers.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// };

export default Organizers;
