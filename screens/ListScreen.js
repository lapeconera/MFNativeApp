import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container, Button, Right, Text, Tabs, Tab } from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';
import {StyleSheet} from 'react-native';

class ListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "All Actions",
            headerRight: (
                <Right>
                        <Button 
                            hasText transparent
                            onPress={() => ToDoStore.bulkDeleteToDo()}
                        >
                            <Text>Select</Text>
                        </Button>
                </Right>
            ),
        };
    }

    render() {
        const { ToDos } = ToDoStore;
        
        return (
            <Container>
                    <Tabs style={styles.tab}  >
                        <Tab heading="Actions">
                            {ToDos.map(ToDo => {
                                if (ToDo.done === false) {
                                    return  <ToDoItem key={ToDo.id} ToDo={ToDo} />
                                }
                            })}    
                        </Tab>
                        <Tab heading="Done">
                            {ToDos.map(ToDo => {
                                if (ToDo.done === true) {
                                    return  <ToDoItem key={ToDo.id} ToDo={ToDo} />
                                }
                            })}
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