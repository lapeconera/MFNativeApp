import React from 'react';
import { ListItem, CheckBox, Icon, Text, Button, Right, Left, Body } from 'native-base';


const ToDoItem = ({ToDo}) => {
    state = {
        checked: true,
    }

    return (
        <ListItem>
            <Left>
                <CheckBox
                    value={this.state.checked}
                    onPress={() => console.log(`checked`) }
                />
            </Left>
            <Body>
                <Text>
                    {ToDo.title}
                </Text>
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={ () => console.log(`delete this todo`) }
                >
                    <Icon name = { 'trash' } />                
                </Button>
            </Right>
        </ListItem> 
    )
}

export default ToDoItem;