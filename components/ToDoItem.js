import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Modal, View, StyleSheet } from "react-native";
import { Item, Icon, Input, ListItem, Text, Button, Left, Body, CheckBox } from 'native-base';
import ToDoStore from '../ToDoStore';

let deleteArray = [];

class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            inputValue: "",
            isChecked: false,
        };
    }

    async componentDidMount() {
        await this.setState({ inputValue: this.props.ToDo.title });
    }
 
    modal = () => (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                style={styles.modalmessage}
            >
            <View style={{margin: 100}}>
                <View>
                    <Item style={styles.searchContainer} searchBar rounded>
                        <Input 
                        placeholder="Edit" 
                        value={this.state.inputValue}
                        onChangeText = {(inputValue) => this.setState({inputValue})}/>
                        <Icon name="ios-checkmark" onPress={()=> this.editToDo(this.props.ToDo)}/>
                    </Item>
                </View>
            </View>
        </Modal>
    );

    editToDo = (ToDo) => {
        this.setModalVisible(!this.state.modalVisible);
        const updateTodo = this.state.inputValue;
        ToDoStore.editToDo(ToDo, updateTodo);
    }

    deleteToDo = (ToDo) => {
        ToDoStore.deleteToDo(ToDo);
    }

    bulkDelete = (ToDo, deleteArray) => {
        ToDoStore.bulkDelete(ToDo, deleteArray);
    }

    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        });
    }

    checkBoxChange = () => {
        const todo = this.props.ToDo;
        this.setState({ isChecked: !this.state.isChecked})
        
        if (this.state.isChecked !== true) {
            deleteArray.push(todo.id);
        }
        
        if ( this.state.isChecked === true) {
            deleteArray = deleteArray.filter(t => {
                return (t !== todo.id) && (todo.isChecked !== true)
            })
            ToDoStore.deleteArray.push(deleteArray);
        }
    }

    render() {
        return (
            <View>
                { !this.state.modalVisible ? 
                    <ListItem>
                        <Left>
                            <CheckBox
                                checked={this.state.isChecked}
                                onPress={() => this.checkBoxChange()}
                            />
                        </Left>
                        <Body>
                            <Text>{this.props.ToDo.title}</Text>
                        </Body>
                       
                        <Button
                            transparent
                            onPress = {() => this.deleteToDo(this.props.ToDo)}
                        >
                            <Icon name = { 'trash' } />                
                        </Button>
                        <Button 
                            transparent
                            onPress={() => {
                                this.setModalVisible(true);
                            }} 
                        >
                            <Icon name="create"></Icon>              
                        </Button>
                    </ListItem> 
                :
                    <View>
                        { this.modal() }
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalmessage:{
        flex:1,
        alignItems: 'center',
        margin: '30%',

    },
    searchContainer: {
        height: 40,
        borderColor: 'red',
        borderWidth: 1000,
        width:200
    },
    completed: {
        textDecorationLine: "line-through",
    }
});

export default observer(ToDoItem, deleteArray);
