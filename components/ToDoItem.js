import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Modal, View, StyleSheet } from "react-native";
import { Item, Icon, Input, Text, CheckBox } from 'native-base';
import ToDoStore from '../ToDoStore';
import Swipeout from 'react-native-swipeout';

class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            inputValue: "",
            isChecked: false,
            done: false
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
                            onChangeText = {(inputValue) => this.setState({inputValue})}
                        />
                        <Icon 
                            name="ios-checkmark" 
                            onPress={()=> this.editToDo(this.props.ToDo)}
                        />
                    </Item>
                </View>
            </View>
        </Modal>
    );

    editToDo = (ToDo) => {
        this.setModalVisible(!this.state.modalVisible);
        const updateTodo = this.state.inputValue;
        ToDoStore.editToDo(ToDo, updateTodo);
    };

    deleteToDo = (ToDo) => {
        ToDoStore.deleteToDo(ToDo);
    };

    doneToDo = (ToDo) => {
        ToDoStore.doneToDo(ToDo)
    };
   
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        });
    }

    checkBoxChange = (isChecked, ToDo) => {
        this.setState({isChecked: !this.state.isChecked})
        ToDoStore.onSelect(isChecked, ToDo);
    }

    render() {
        let swipeBtns1 = [
            {
                text: 'Edit',
                backgroundColor: '#234544',
                onPress: () => { this.setModalVisible(true) }
            }, 
            {
                text: 'Delete',
                backgroundColor: '#fbefd9',
                color: '#234544',
                onPress: () => { this.deleteToDo(this.props.ToDo) }
            },
        ];

        let swipeBtns2 = [
            {
                text: 'Done',
                backgroundColor: '#fbefd9',
                color: '#234544',
                onPress: () => { this.doneToDo(this.props.ToDo) }
            },
        ]

        const { ToDo } = this.props;
        const { isChecked } = this.state;

        return (
            <View>
                {console.log(this.props)}
                { !this.state.modalVisible ?
                    <Swipeout 
                        left={swipeBtns2}
                        right={swipeBtns1}
                        autoClose={true} 
                        transparent
                    >
                        <CheckBox 
                            checked={isChecked}
                            onPress={() => this.checkBoxChange(isChecked, ToDo)}
                        />
                        <View style={styles.Swipe}>
                            <Text style={styles.SwipeText} >{ToDo.title}</Text>
                            <Text sytle={styles.SwipeDate}>Friday 2019.00.00 </Text>
                        </View>
                    </Swipeout>  
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
        Swipe: {
            paddingTop: 30,
            marginHorizontal:30,
        },
        SwipeText: {
            fontSize: 20,
            fontWeight: '800',
            color: 'grey',    
        },
        SwipeDate: {
            fontSize: 13,
            color: 'grey',
            paddingTop: 30,
            marginHorizontal:30,
        },
 })

export default observer(ToDoItem);