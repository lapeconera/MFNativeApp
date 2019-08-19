import React, { Component } from 'react';
import { Content, Body, Text, ListItem, CheckBox, Icon } from 'native-base';

class ToDoItem extends Component {
    
    
    render() {
        return (
            <Content>
                <ListItem>
                    <CheckBox checked={true} />
                        <Body>
                            <Text>Daily Stand Up</Text>
                        </Body>
                        <Icon name="trash"></Icon>
                </ListItem>
            </Content>
        )
    }
}

export default ToDoItem;