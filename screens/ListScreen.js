import React, { Component } from 'react';
import { Content, Body, Text, ListItem , View } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';
import { observer } from 'mobx-react';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;

        return (
            <Content>
                <Body>
                    <View>
                    {ToDos.map((ToDo, index) =>                 
                        <ListItem><Text  key={index}>{ToDo.title}</Text></ListItem>
                    )}
                    </View>
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

export default observer(ListScreen);