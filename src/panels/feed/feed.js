import React from 'react';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import './feed.css';



export const Feed = (props) => {
    return(
        <>
        <CardGrid>
            <Card size="l" style={{marginTop:'25px'}}>
                <div className="FeedBlock FeedBlock__1">
                    <span>Создать турнир</span>
                    <Button mode="primary">Перейти</Button>
                </div>
            </Card>
            <Card size="l">
                <div className="FeedBlock FeedBlock__2">
                    <span>Трансляции игр</span>
                    <Button mode="primary">Перейти</Button>
                </div>
            </Card>

            <Card size="m">
                <div className="FeedBlock FeedBlock__3">
                    <span>Дисциплины</span>
                    <Button mode="primary">Перейти</Button>
                </div>
            </Card>
            <Card size="m">
                <div className="FeedBlock FeedBlock__4">
                    <span>Магазин игр</span>
                    <Button mode="primary">Перейти</Button>
                </div>
            </Card>
            <Card size="l">
                <div className="FeedBlock FeedBlock__5">
                    <span>Турнирная таблица</span>
                    <Button mode="primary" onClick={props.go} data-to="tournamenttable">Перейти</Button>
                </div>
            </Card>


        </CardGrid>

            <div style={{margin:'25px 0 12px 12px', fontSize:'18px', color:'#eee'}}>
                <span >Новости</span>
            </div>
            <div style={{margin:'12px', fontSize:'15px', color:'#eee'}}>
                <span>Свежий выпуск передачи «Навигатор цифрового мира»: последние новости о новинках из мира технологий, гаджетов и виртуальной реальности.</span>
                <div style={{margin:'25px'}}/>
                <span>Смотрите «Навигатор цифрового мира» каждую неделю только в сообществе «Навигатор игрового мира»:  <a style={{color:'#5e88b9'}} href="https://m.vk.com/gaming">vk.com/gamenavigator</a> </span>
            </div>

            <CardGrid>
            
            <Card size="l" style={{backgroundColor:'red', marginBottom:'120px'}}>
                <div className="FeedBlock" style={{padding:'0',  height:'212px'}}>
                    <iframe src="//vk.com/video_ext.php?oid=-353324&id=456246609&hash=3c6b84fea02ad261&hd=2" width="100%" height="100%" frameBorder="0"></iframe>
                </div>
            </Card>

            </CardGrid>
        </>
    )
}