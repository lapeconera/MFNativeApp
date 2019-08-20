import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Content, List } from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;

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