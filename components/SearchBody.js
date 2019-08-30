import React, { Component } from 'react';
import {ScrollView,Text,View} from 'react-native';
import ToDoStore from '../ToDoStore';

class SearchBody extends Component {
    render() {
        let actions = this.props.data;
        if (!actions){
            return <View/>
        } 
        return(
                <View>
                    <ScrollView style={{flex: 1}}>     
                            <Text style={styles.list}>
                            {actions}
                            </Text>  
                    </ScrollView>
                </View>
        )
    }
}

const styles = {
    list: {
      fontSize:16,
      alignItems: 'center',
      color:'grey',
      paddingTop: 30,
      
    }
}

export default  SearchBody 