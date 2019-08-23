import React, { Component } from 'react';
import { View, Icon, Input, Content, Item } from 'native-base';
import { StyleSheet } from 'react-native';
import ToDoStore from '../ToDoStore';
import uuidv4 from "uuid/v4"

const initialState = {
    id: null,
    title: "",
    done: null,
};

class ToDoBody extends Component {
    state = initialState;

    onChangeText = (value) => {
        this.setState({
          title: value
        });
    };

    addToDo = () => {
        ToDoStore.addToDo({ id: uuidv4(), title: this.state.title, done: false , isChecked: false})
        this.setState(initialState)
    };

    render() {

        return (
            <View style={styles.wholeStyle}>
                <Content>
                    <View style={styles.container}>
                        <Item style={styles.searchContainer} searchBar rounded>
                            <Input 
                                style={styles.inputStyle}
                                placeholder="What have you done?"
                                value={this.state.title}
                                onChangeText={ (value) => this.onChangeText(value)}
                            />
                            <Icon name="ios-add"  onPress={this.addToDo}/>    
                        </Item>
                    </View>
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  wholeStyle: {
    flex: 1,
    backgroundColor: '#fbefdacf',
  },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20%',
      marginHorizontal: '10%'
  },
    searchContainer: {
      height: 40,
      borderColor: 'red',
      borderWidth: 40,
  },
    inputStyle:{
      color: '#234644',
      height: 50,
      width: 200,
  },
    action: {
        fontSize: 24,
    },
    buttonText: { 
        color: '#fff',
    }
});

export default ToDoBody;