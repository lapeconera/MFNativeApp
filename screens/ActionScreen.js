import React from 'react';
import { Container, View,Body, Content, Text, Input } from 'native-base';
import ActionBody from '../components/ActionBody';

 class ActionScreen extends React.Component{
    render(){
    return (
        <Container>
            <View>
                <Text>Actions</Text>
            </View>
        </Container>
    )
}
 }

ActionScreen.navigationOptions = {
    title: 'Actions',
};

export default ActionScreen