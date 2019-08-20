import React, { Component } from 'react';
import { View, Text,Icon, Input, Button, Content, Item } from 'native-base';
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
        const { ToDos } = ToDoStore;
        // console.log('ToDos:', ToDos);

        return (
          <View style={styles.wholeStyle}>
            <Content>
              
            <View style={styles.container}>
            <Item style={styles.searchContainer} searchBar rounded>
            
                    <Input 
                        style={styles.inputStyle}
                        placeholder="What have you done?"
                        value={this.state.title}
                        onChangeText={ (value) => this.onChangeText("title", value)}
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
    },
  inputStyle:{
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