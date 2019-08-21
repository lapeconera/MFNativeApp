import React, { Component } from 'react';
import { Modal, View, StyleSheet } from "react-native";
import { Item, Icon, Input } from 'native-base';
import ToDoStore from '../ToDoStore';

class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            inputValue: "",
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
        ToDoStore.editToDo(ToDo,updateTodo);
    }

    deleteToDo = (ToDo) => {
        ToDoStore.deleteToDo(ToDo);
    }

    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        });
    }

    render() {
        return (
            <View>
                { !this.state.modalVisible ? 
                    <ListItem>
                        <CheckBox
                            onPress = { () => console.log(`This has been checked`) }
                        />
                        <Text>{this.props.ToDo.title}</Text>
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
                            <Icon name = { 'create' } />                
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
    }
});

export default ToDoItem;
