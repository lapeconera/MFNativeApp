import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Content, List, Text } from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;
        // console.log(ToDos[0].title)
        return (
            <Container>
                <Content>
                    <List>
                        {ToDos.map((ToDo, index) =>                 
                            <ToDoItem key={index} ToDo={ToDo} />
                        )}
                    </List>
                </Content>
            </Container>
        )
    }
}

export default observer(ListScreen);