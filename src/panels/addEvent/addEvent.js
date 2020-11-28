import React from 'react';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import PropTypes from 'prop-types';

import './addEvent.css';

export const AddEvent = (props) => {

    return(
        <>
            <Div className='center'>
                <Button className='mc' size="l" mode="commerce" onClick={props.go} data-to="Organizers">Найти организатора</Button>
                <Button className='mc' size="l" mode="secondary">Сам создам</Button>
            </Div> 
        </>
    )
}