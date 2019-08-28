import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { Container, Right, Tabs, Tab } from 'native-base';
import ToDoStore from '../ToDoStore';
import ToDoItem from '../components/ToDoItem';
import HeaderNav from '../components/HeaderNav';
import CheckBoxDisplay from '../components/CheckBoxDisplay';

class ListScreen extends Component {

    static navigationOptions = ({ navigation }) => {     
        return {
            headerTitle: "All Actions",
            headerRight: (
                <Right>
                    <HeaderNav />
                </Right>
            )
        };
    }

    checkBoxChange = (isChecked, ToDo) => {
        this.setState({isChecked: !this.state.isChecked})
        ToDoStore.onSelect(isChecked, ToDo);
    }

    checkBoxDisplay = () => {
        return (
            <CheckBox 
                checked={isChecked}
                onPress={() => this.checkBoxChange(isChecked, ToDo)}
            />
        )
    }


    onChangeHeaderOption = () => {
        returninitialState = !initialState
    }

    render() {
        const { ToDos } = ToDoStore;
        
        return (
            <Container>
                <Tabs style={styles.tab}  >
                    <Tab heading="Actions">
                        {ToDos.map(ToDo => {
                            if (ToDo.done === false) {
                                return <ToDoItem key={ToDo.id} ToDo={ToDo} />                                   
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

const styles = StyleSheet.create({
    tabsContainerStyle: {
        color: '#234644',
        backgroundColor: '#f2f2f2',
    },
    underlineStyle:{
        color:'red'
    }
});

export default observer(ListScreen);