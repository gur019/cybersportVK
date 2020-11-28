import React from 'react';
import { platform, IOS } from '@vkontakte/vkui';
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
import Group from '@vkontakte/vkui/dist/components/Group/Group';

import Header from '@vkontakte/vkui/dist/components/Header/Header';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import Input from '@vkontakte/vkui/dist/components/Input/Input';

import img1 from './feed/img/1.jpg';
import img2 from './feed/img/2.jpeg';
import img4 from './feed/img/4.jpg';
import img5 from './feed/img/5.jpg';
import img6 from './feed/img/123.jpg';
import img7 from './feed/img/Безымянный.png';
import img8 from './feed/img/woman.jpg';
import img9 from './feed/img/6a01c68feedf07718ab19f98377052e4_ce_4669x2915x0x100_cropped_960x600.jpg';
import img10 from './feed/img/0010830-kibersport-po-russki-prognoz-na-pyat-let.jpg';
import img11 from './feed/img/282253_xhdrgf.jpg';
import img12 from './feed/img/c44a0e44ab4bcc791a1875cb0f7f9ec9.jpg';
import img13 from './feed/img/cybersport-on-schools.jpg';
import img14 from './feed/img/kibersport-670x351-1.jpg';
import img15 from './feed/img/oleg-gospodarec-NxxPdqtHtWs-unsplash-1024x604.jpg';

const osName = platform();


const Icreated  = (props) =>  {

    const itemStyle = {
        flexShrink: 0,
        width: 80,
        height: 94,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 12
      };
      

    return(
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="Epic">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Поиск сотрудников
		</PanelHeader>


		<>

        <FormLayout>
            <FormLayoutGroup top="Название игры">
                <Input type="text" placeholder="CS:GO" />
            </FormLayoutGroup>
        </FormLayout>

        <p style={{marginLeft:'12px', fontSize:'14px', color:'#606263'}}>Тип мероприятия</p>
		<Group>
			<Cell asideContent={<Switch />}>Online / Offline</Cell>
            <Cell asideContent={<Switch />}>Коммерческое / Бесплатное</Cell>
            <Cell asideContent={<Switch />}>Требуется спонсор</Cell>
		</Group>

        <p style={{marginLeft:'12px', fontSize:'14px', color:'#606263'}}>Выберите необходимого сотрудника</p>
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
				<Button mode='commerce' size="xl" level="2"  onClick={props.go} data-to="Epic">
					Готово
				</Button>
			</Div>
		</FixedLayout>
		</>

        <>

        <Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Организатор</Header>}>
            <HorizontalScroll>
            <div style={{ display: 'flex' }}>
                <div style={{ ...itemStyle, paddingLeft: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img1}  alt=""/></Avatar>
                Элджей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
                Ольга
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
                Сергей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img5}  alt=""/></Avatar>
                Илья
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img6}  alt=""/></Avatar>
                Алексей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img7}  alt=""/></Avatar>
                Костя
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img8}  alt=""/></Avatar>
                Миша
                </div>
                <div style={{ ...itemStyle, paddingRight: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
                Вадим
                </div>
            </div>
            </HorizontalScroll>
        </Group>


        </>

        <>

        <Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Коментатор</Header>}>
            <HorizontalScroll>
            <div style={{ display: 'flex' }}>
                <div style={{ ...itemStyle, paddingLeft: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img8}  alt=""/></Avatar>
                Элджей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
                Ольга
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img6}  alt=""/></Avatar>
                Сергей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img12}  alt=""/></Avatar>
                Илья
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img5}  alt=""/></Avatar>
                Алексей
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
                Костя
                </div>
                <div style={itemStyle}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
                Миша
                </div>
                <div style={{ ...itemStyle, paddingRight: 4 }}>
                <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
                Вадим
                </div>
            </div>
            </HorizontalScroll>
        </Group>


        </>


        <>

<Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Ведущий</Header>}>
    <HorizontalScroll>
    <div style={{ display: 'flex' }}>
        <div style={{ ...itemStyle, paddingLeft: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img13}  alt=""/></Avatar>
        Элджей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img11}  alt=""/></Avatar>
        Ольга
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img15}  alt=""/></Avatar>
        Сергей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
        Илья
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img13}  alt=""/></Avatar>
        Алексей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img12}  alt=""/></Avatar>
        Костя
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img15}  alt=""/></Avatar>
        Миша
        </div>
        <div style={{ ...itemStyle, paddingRight: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
        Вадим
        </div>
    </div>
    </HorizontalScroll>
</Group>


</>


<>

<Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">HR менеджер</Header>}>
    <HorizontalScroll>
    <div style={{ display: 'flex' }}>
        <div style={{ ...itemStyle, paddingLeft: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img8}  alt=""/></Avatar>
        Элджей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img7}  alt=""/></Avatar>
        Ольга
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img6}  alt=""/></Avatar>
        Сергей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
        Илья
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img5}  alt=""/></Avatar>
        Алексей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img1}  alt=""/></Avatar>
        Костя
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
        Миша
        </div>
        <div style={{ ...itemStyle, paddingRight: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
        Вадим
        </div>
    </div>
    </HorizontalScroll>
</Group>


</>


<>

<Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Киберспортсмен</Header>}>
    <HorizontalScroll>
    <div style={{ display: 'flex' }}>
        <div style={{ ...itemStyle, paddingLeft: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img9}  alt=""/></Avatar>
        Элджей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img10}  alt=""/></Avatar>
        Ольга
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img11}  alt=""/></Avatar>
        Сергей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img12}  alt=""/></Avatar>
        Илья
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img13}  alt=""/></Avatar>
        Алексей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
        Костя
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img15}  alt=""/></Avatar>
        Миша
        </div>
        <div style={{ ...itemStyle, paddingRight: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img12}  alt=""/></Avatar>
        Вадим
        </div>
    </div>
    </HorizontalScroll>
</Group>


</>

<>

<Group style={{ paddingBottom: 8 }} header={<Header mode="secondary">Техническая поддержка</Header>}>
    <HorizontalScroll>
    <div style={{ display: 'flex' }}>
        <div style={{ ...itemStyle, paddingLeft: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img5}  alt=""/></Avatar>
        Элджей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
        Ольга
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img6}  alt=""/></Avatar>
        Сергей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img7}  alt=""/></Avatar>
        Илья
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img8}  alt=""/></Avatar>
        Алексей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img1}  alt=""/></Avatar>
        Костя
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
        Миша
        </div>
        <div style={{ ...itemStyle, paddingRight: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
        Вадим
        </div>
    </div>
    </HorizontalScroll>
</Group>


</>

<>

<Group style={{ paddingBottom: 8 , marginBottom:'70px'}} header={<Header mode="secondary">Аренда оборудования</Header>}>
    <HorizontalScroll>
    <div style={{ display: 'flex' }}>
        <div style={{ ...itemStyle, paddingLeft: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
        Элджей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img12}  alt=""/></Avatar>
        Ольга
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img6}  alt=""/></Avatar>
        Сергей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img14}  alt=""/></Avatar>
        Илья
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img8}  alt=""/></Avatar>
        Алексей
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img11}  alt=""/></Avatar>
        Костя
        </div>
        <div style={itemStyle}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img2}  alt=""/></Avatar>
        Миша
        </div>
        <div style={{ ...itemStyle, paddingRight: 4 }}>
        <Avatar size={64} style={{ marginBottom: 8 }}><img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={img4}  alt=""/></Avatar>
        Вадим
        </div>
    </div>
    </HorizontalScroll>
</Group>


</>



	</Panel>
    )
}
export default Icreated;