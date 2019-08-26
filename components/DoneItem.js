import React, { Component } from 'react'
import {ScrollView,Text,View} from 'react-native';
import ToDoStore from '../ToDoStore';
import { List, ListItem } from 'native-base';


export class DoneList extends Component {
    state= {
        data: [],
        doneList: []
    }

    componentDidMount(){
        let Dones = [];
        const {ToDos}=ToDoStore;
        
        {ToDos.map((ToDo) =>
            {ToDo.done === true ?
                Dones.push(ToDo)
                    : console.log("donetrue?",ToDo)
            }
             )}
             this.setState({data: Dones })
    }

    render() {
        const {data} = this.state
        return (
                 <View>   
                     {console.log("data?",data)}
                     {data.map (t =>
                        <View key = {t.id}>
                            <Text style={styles.list}>
                            {console.log(t.title)}
                               {t.title} 
                            </Text>
                        </View>
       
                    )}
                </View>
        )
    }
}

export default DoneList

const styles = {
    list: {
      fontSize:20,
      alignItems: 'center',
      color:'grey',
      fontWeight: '800',
      color: 'grey',    
      paddingTop: 30,
      marginHorizontal:30,
    }
}