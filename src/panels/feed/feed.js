import React from 'react';
import CardGrid from '@vkontakte/vkui/dist/components/CardGrid/CardGrid';
import Card from '@vkontakte/vkui/dist/components/Card/Card';

export const Feed = () => {
    return(
        <CardGrid>
            <Card size="l">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="m">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="m">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="s">
                <div style={{ height: 96 }} />
            </Card>
            <Card size="l">
                <div style={{ height: 96 }} />
            </Card>
        </CardGrid>
    )
}