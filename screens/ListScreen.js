import React, { Component } from 'react';
import { Container, Body, Text, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;

        return (
            <Container>
                    <Body>
                    <ListItem>
                        {ToDos.map((ToDo, index) =>                 
                            <Text  key={index}>{ToDo.title}</Text>
                        )}
                    </ListItem>
                    </Body>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 600,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ListScreen;