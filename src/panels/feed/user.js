import React from 'react';
import './user.css';

import Button from '@vkontakte/vkui/dist/components/Button/Button';

import user_1 from './img/9aW1x_9ovxg.jpg'
import user_2 from './img/aYaRA3j1_Pc.jpg'
import user_3 from './img/z0VWLx3VRPk.jpg'
import user_4 from './img/vDzbhkDMSVk.jpg'
import user_5 from './img/1.jpg'
import user_6 from './img/2.jpeg'
import user_7 from './img/3.jpg'
import user_8 from './img/4.jpg'
import user_9 from './img/5.jpg'
import star from './img/star.png'
var sizeStar = '15px';
var marginTopButtons = '2px';
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
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
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
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
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
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
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
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_5} alt=""/>
                </div>
                <div>
                    <div>
                        Михаил Динакоев
                    </div>
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_6} alt=""/>
                </div>
                <div>
                    <div>
                        Алена Шпиц
                    </div>
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_7} alt=""/>
                </div>
                <div>
                    <div>
                        Ирина Бугарь
                    </div>
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_8} alt=""/>
                </div>
                <div>
                    <div>
                        Валентин Сагаров
                    </div>
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

            <div className='userBlock'>
                    <div>
                    <img src={user_9} alt=""/>
                </div>
                <div>
                    <div>
                        Чермен Дауров
                    </div>
                    <div>
                        <img src = {star} style = {{width: sizeStar, height: sizeStar}}/> 4.9
                    </div>
                    <div style={{marginTop: marginTopButtons}}>
                        <Button className='userBlock__button1' mode='commerce' size="m" onClick={props.go} data-to="Comment">Отзывы</Button>
                        <Button  className='userBlock__button' mode='commerce' size="m">Добавить</Button>
                    </div>
                </div>
            </div>

        </>
    )
}
