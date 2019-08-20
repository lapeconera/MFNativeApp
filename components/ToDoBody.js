import React, { Component } from 'react';
import { View, Text, Input, Button, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';

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
        const { ToDos } = ToDoStore;

        return (
            <Content>
                <View>
                    <Input 
                        style={styles.inputStyle}
                        placeholder="What have you done?"
                        value={this.state.title}
                        onChangeText={ (value) => this.onChangeText("title", value)}
                    />
                <Button 
                        onPress={this.addToDo} style={styles.button}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </Button>
                </View>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
  inputStyle:{
    height: 50,
    width: 200,
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