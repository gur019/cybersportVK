import React from 'react';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

export const Tv = () => {
    return(
        <>
        {/* <Group separator="hide" header={<Header mode="secondary">NAVI.s1mple 35\15 KD vs NiP на de_train. csgo navi</Header>}>
            <CardGrid>
                <Card size="l">
                    <div style={{ height: 300 }}>
                        <iframe src="//vk.com/video_ext.php?oid=-67433146&id=456241417&hash=9f9f12040af2eccf&hd=2" width="100%" height="100%" frameBorder="0" ></iframe>
                    </div>
                </Card>
            </CardGrid>
        </Group> */}
        <Group separator="hide" header={<Header mode="secondary">Flamie - ЛУЧШИЕ МОМЕНТЫ В 2020 ГОДУ. NAVI. csgo. киберспорт.</Header>}>
            <CardGrid>
                <Card size="l">
                    <div style={{ height: 300 }}>
                        <iframe src="//vk.com/video_ext.php?oid=-67433146&id=456240995&hash=6c615aadabfc2b6f&hd=2" width="100%" height="100%" frameBorder="0"></iframe>
                    </div>
                </Card>
            </CardGrid>
        </Group>
        <Group separator="hide" header={<Header mode="secondary">Смотрим Стрим на канале Hard Play на Twitch</Header>}>
            <CardGrid>
                <Card size="l">
                    <div style={{ height: 300 }}>
                        <iframe src="//vk.com/video_ext.php?oid=-148052375&id=456239358&hash=73603e22cfcee3a0&hd=2" width="100%" height="100%" frameBorder="0"></iframe>
                    </div>
                </Card>
            </CardGrid>
        </Group>
        <Group separator="hide" header={<Header mode="secondary">[Evil Alesha] NAVI JUNIOR БУДУЩИЕ ЗВЕЗДЫ КИБЕРСПОРТА?</Header>}>
            <CardGrid>
                <Card size="l">
                    <div style={{ height: 300 }}>
                        <iframe src="//vk.com/video_ext.php?oid=-167803862&id=456245801&hash=fa3659921dc59872&hd=2" width="100%" height="100%" frameBorder="0"></iframe>
                    </div>
                </Card>
            </CardGrid>
        </Group>
    </>
    )
}