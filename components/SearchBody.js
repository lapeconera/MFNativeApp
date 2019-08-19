import React from 'react';
import {ScrollView,Text,View} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';

class SearchBody extends React.Component{
    render(){
        var actions = this.props.data;
        if (!actions){
            return  <View/>
        } 
        else
        return(
          
                <Content padder>
                    <ScrollView style={{flex: 1}}>
                          
                            <Text style={styles.list}>
                            {actions}
                            </Text>
                          
                    </ScrollView>
                </Content>
           
           
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

export default SearchBody