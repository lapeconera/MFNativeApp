import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Content, List, Button, Right, Text } from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';

class ListScreen extends Component {

    static navigationOptions = () => {
        return {
            headerTitle: "All Actions",
            headerRight: (
            <Right>
                    <Button 
                        hasText transparent
                        onPress={() => ToDoStore.bulkDelete()}
                    >
                        <Text>Delete All</Text>
                    </Button>
            </Right>
            ),
        };
    }

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