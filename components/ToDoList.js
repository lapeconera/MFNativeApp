import React, { Component } from 'react'
import {ScrollView,Text,View} from 'react-native';

export class ToDoList extends Component {
    render() {
        
        return (
            <div>
                 <View>
                    <ScrollView style={{flex: 1}}>     
                            <Text style={styles.list}>
                            {actions}
                            </Text>  
                    </ScrollView>
                </View>
            </div>
        )
    }
}



export default ToDoList
