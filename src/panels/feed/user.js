import React from 'react';
import './user.css';

import Button from '@vkontakte/vkui/dist/components/Button/Button';

import user_1 from './img/9aW1x_9ovxg.jpg'
import user_2 from './img/aYaRA3j1_Pc.jpg'
import user_3 from './img/z0VWLx3VRPk.jpg'
import user_4 from './img/vDzbhkDMSVk.jpg'

export const User = (props) => {
    return(
        <>
            <div className='userBlock'>
                <div>
                    <img src={user_1}  alt=""/>
                </div>
                <div>
                    <div>
                        Заур Иванов
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Комментарии</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_2} alt=""/>
                </div>
                <div>
                    <div>
                        Олег Данилов
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button className='userBlock__button1' mode='commerce' size="m">Комментарии</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_3} alt=""/>
                </div>
                <div>
                    <div>
                        Harry Houdini
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button className='userBlock__button1' mode='commerce' size="m">Комментарии</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_4} alt=""/>
                </div>
                <div>
                    <div>
                        Гурген Саумов
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button className='userBlock__button1' mode='commerce' size="m">Комментарии</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

        </>
    )
}
