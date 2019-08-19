import React from 'react';
import { Container } from 'native-base';
import ActionBody from '../components/ActionBody';

const ActionScreen = () => {
    return (
        <Container>
            <ActionBody />
        </Container>
    )
}

ActionScreen.navigationOptions = {
    title: 'Actions',
};