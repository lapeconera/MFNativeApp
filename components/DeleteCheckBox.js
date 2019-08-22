import React, { Component } from 'react';
import { CheckBox } from 'native-base';
import { observer } from 'mobx-react';

const deleteArray = [];

class DeleteCheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
        };
    }

    checkBoxChange = () => {
        this.setState({ isChecked: !this.state.isChecked})
        if (this.state.isChecked !== true) {
            deleteArray.push(this.props.ToDo.id);
        }
    }

    render() {
       {console.log(this.props)}
       {console.log(deleteArray)}
       
        return (
            <CheckBox
                checked={this.state.isChecked}
                onPress={() => this.checkBoxChange()}
            />
        )
    }
}

export default observer(DeleteCheckBox);