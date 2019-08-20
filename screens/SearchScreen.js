import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { Header,Item,Icon,Input,Button } from "native-base";
import SearchBody from '../components/SearchBody';
import ToDoStore from '../ToDoStore';

export class SearchScreen extends React.Component {
    state = {
        actionSearch: "",
        data: {},
        onCall: true,
    }
 
    searchAction = () =>{
        {console.log(ToDoStore)}

        this.setState({onCall:true});
        if(this.state.actionSearch === ""){
            return;
        }
        var self = this;

        self.setState({data: "Name"})
        self.setState({onCall: false});
        
    }

    renderBody = () =>{
        if(this.state.onCall){
            return(
                <Text>No actions</Text>
            )
        }
        else{
            return(
                <SearchBody data={this.state.data} totos={this.state.onCall}/>
            )
        }
    }
    render() {
        return (
         <View style={styles.wholeStyle}>
            <View style={styles.container}>
                <Item style={styles.searchContainer} searchBar rounded>
                    <Icon name="ios-search" onPress={this.searchAction}/>
                        <Input 
                        style={styles.inputStyle}
                        value={this.state.actionSearch}
                        onChangeText={(actionSearch)=>this.setState({actionSearch})}
                        placeholder="Search"
                        />
                </Item>
                <View>
                {this.renderBody()}
                </View>
            </View>
         </View>
        )
    }
}

export default SearchScreen

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
});