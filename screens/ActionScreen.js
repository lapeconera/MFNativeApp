import React from 'react';
import { Container, View } from 'native-base';
import ToDoBody from '../components/ToDoBody';

 class ActionScreen extends React.Component{
    render(){
    return (
        <Container>
            <ToDoBody />
        </Container>
    )
}
 }

ActionScreen.navigationOptions = {
    title: 'Actions',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

export default ActionScreen;
