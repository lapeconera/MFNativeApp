import React, { Component } from 'react';
import { Container } from 'native-base';
import ToDoBody from '../components/ToDoBody';
import { StyleSheet } from 'react-native';

 class ActionScreen extends Component {
    render() {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

export default ActionScreen;
