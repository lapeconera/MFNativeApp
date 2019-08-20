
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Modal, TouchableHighlight, View, StyleSheet } from "react-native";
import { Container, ListItem, CheckBox, Icon, Text, Button } from 'native-base';
import ToDoStore from '../ToDoStore';

class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
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
                <Text>Hello World!</Text>

                <TouchableHighlight
                    onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text>Hide Modal</Text>
                </TouchableHighlight>
                </View>
            </View>
        </Modal>

    )

    deleteToDo = (ToDo) => {
        ToDoStore.deleteToDo(ToDo)
    };

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
                        onPress = { () => console.log(`show this completed: ${ToDo}`) }
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
    
                    >
                        <Icon name = { 'create' } onPress={() => {
                            this.setModalVisible(true);
                        }} 
                        />                
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

export default observer(ToDoItem);

const styles = StyleSheet.create({

    
        modalmessage:{
            flex:1,
            alignItems: 'center',
            margin: '30%',

        }
    
})