import React from 'react';
import { List, ListItem, CheckBox, Icon, Text, Button } from 'native-base';

const ToDoItem = ({ToDo}) => {
    return (
        <ListItem>
            <CheckBox
                onPress = { () => console.log(`show this completed: ${ToDo}`) }
            />
            <Text>{ToDo.title}</Text>
            <Button
                transparent
                onPress = { () => console.log(`This has been cancelled.`) }
            >
                <Icon name = { 'trash' } />                
            </Button>
        </ListItem> 
    )
}

export default ToDoItem;