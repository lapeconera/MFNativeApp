import React, { Component } from 'react';
import { Button, Text, } from 'native-base';
import { observer } from 'mobx-react';
import ToDoStore from '../ToDoStore';

class HeaderNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: false,
            headerText: "Select",
        }
    }

    onSelect = () => {
        if (this.state.selected === false) {
            this.setState({ headerText: "Cancel"});

        } else {
            this.setState({ headerText: "Select"})
        }

        this.setState({ selected: !this.state.selected})
    }

    render() {

        const { headerText, selected } = this.state;

        return (
            <Button
                haswords 
                transparent
                value={selected}
                onPress={() => this.onSelect()}
            >
                <Text>{headerText}</Text>
            </Button>          
        )
    }
}


export default observer(HeaderNav);