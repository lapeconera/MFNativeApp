import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { Header,Item,Icon,Input,Button } from "native-base";
import SearchBody from '../components/SearchBody';
import ToDoStore from '../ToDoStore';
import { observer } from 'mobx-react';
import axios from 'axios';

class SearchScreen extends Component {
    state = {
        actionSearch: "",
        data: {},
        onCall: true,
    }
 
    searchAction = () =>{
        this.setState({onCall:true});
        if(this.state.actionSearch === ""){
            return;
        }
        let self = this;
        axios.get('https://actions-manager-api.herokuapp.com/actions')
        .then( res => {
            console.log(res.data);
            self.setState({data: res.data});
            self.setState({onCall:false})
        })
        .catch( err => {
            console.log(err)
        });
    }

    //     const { ToDos } = ToDoStore;
    //     {ToDos.map((ToDo) =>   
    //         {this.state.actionSearch === ToDo.title ?  
    //             this.setState({data: ToDo.title, onCall: false})
    //             :
    //             console.log(ToDos)
    //         }
    //     )};
    // }

    renderBody = () => {
        if(this.state.onCall) {
            return(
                <View >
                <Text style={styles.noAction}>No actions found</Text>
                </View>
            )
        }
        else{
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }
    
    render() {
        return (
         <View style={styles.wholeStyle}>
            <View style={styles.container}>
                <Item style={styles.searchContainer} searchBar rounded>
                        <Input 
                        style={styles.inputStyle}
                        value={this.state.actionSearch}
                        onChangeText={(actionSearch)=>this.setState({actionSearch})}
                        placeholder="Search"
                        />
                <Icon name="ios-search" onPress={this.searchAction}/>   
                </Item>
                <View>
                {this.renderBody()}
                </View>
            </View>
         </View>
        )
    }
}

export default observer(SearchScreen)

const styles = StyleSheet.create({
    wholeStyle: {
      flex: 1,
      backgroundColor: '#fbefdacf',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20%',
    },
    searchContainer: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1000,
    width:200
    },
    inputStyle:{
        color: '#234644',
      },
    noAction: {
        flex: 1,
        fontSize:16,
        alignItems: 'center',
        color:'grey',
        paddingTop: 30,
      }
});