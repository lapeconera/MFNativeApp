import React, { Component } from 'react';
import { Content, Body, Text, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;

        return (
            <Content>
                <Body>
                    {ToDos.map((ToDo, index) =>                 
                        <ListItem><Text  key={index}>{ToDo.title}</Text></ListItem>
                    )}
                </Body>
            </Content>
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