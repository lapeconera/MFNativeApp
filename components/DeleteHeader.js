import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import ToDoStore from '../ToDoStore';

class DeleteHeader extends Component {
        
    deleteSelected = () => {

    }

    render() {
        return (
            <Button 
                hasText transparent
                onPress={() => deleteSelected()}
            >
                <Text>Delete All</Text>
            </Button>
        )
    }
  
}

export default DeleteHeader