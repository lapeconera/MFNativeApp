import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ToDoBody from '../components/ToDoBody';

const ActionScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <ToDoBody />
        </ScrollView>
    )
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