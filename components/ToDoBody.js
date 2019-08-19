import React, { Component } from 'react';
import { View, Text, Input, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

const initialState = {
    title: "",
};

class ToDoBody extends Component {
    state = initialState;

    onChangeText = (key, value) => {
        this.setState({[key]: value});
    };

    addToDo = () => {
        ToDoStore.addToDo(this.state)
        this.setState(initialState)
    };

    render() {
        const { todos } = ToDoStore;
        console.log('todos:', todos);

        return (
            <View>
                <Input 
                    style={styles.inputStyle}
                    placeholder="What have you done?"
                    value={this.state.title}
                    onChangeText={ (value) => this.onChangeText("title", value)}
                />
                <Button onPress={this.addToDo} style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  inputStyle:{
    marginTop: 40,
    height: 50,
    width:300,
  },
  action: {
    fontSize: 24,
  },
  button: {
    width: 100,
  },
  buttonText: { 
    color: '#fff',
  }
});


export default ToDoBody;