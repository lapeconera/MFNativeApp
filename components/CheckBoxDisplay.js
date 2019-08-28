import React from 'react';
import { CheckBox } from 'native-base';

export default CheckBoxDisplay = (isChecked, ToDo) => {

    checkBoxChange = (isChecked, ToDo) => {
        this.setState({isChecked: !isChecked})
        ToDoStore.onSelect(isChecked, ToDo);
    }
    
    return (
        <CheckBox 
            checked={isChecked}
            onPress={() => this.checkBoxChange(isChecked, ToDo)}
        />
    )
}

