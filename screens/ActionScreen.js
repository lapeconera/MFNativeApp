import React from 'react';
import { Container, View } from 'native-base';
import ToDoBody from '../components/ToDoBody';

 class ActionScreen extends React.Component{
    render(){
    return (
        <Container>
            <ToDoBody />
        </Container>
    )
}
 }

ActionScreen.navigationOptions = {
    title: 'Actions',
};

export default ActionScreen