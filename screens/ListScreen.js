import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container,Header, Tab, Tabs ,Text} from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';
import {StyleSheet} from 'react-native';
import DoneItem from '../components/DoneItem';

class ListScreen extends Component {
    render() {
        const { ToDos } = ToDoStore;
        
        return (
            <Container>
                
                    <Tabs style={styles.tab}  >
                        <Tab heading="To Do">
                        {ToDos.map((ToDo, index) =>                 
                            <ToDoItem key={index} ToDo={ToDo} />
                        )}
                        </Tab>
                        <Tab heading="Done">
                            <DoneItem/>
                        </Tab>
                        </Tabs>
                      
            </Container>
        )
    }
}

export default observer(ListScreen);

const styles = StyleSheet.create({
    tabsContainerStyle: {
    color: '#234644',
      backgroundColor: '#fbefdacf',
    },
    underlineStyle:{
        color:'red'
    }
})