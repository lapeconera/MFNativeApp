import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ActionScreen from './ActionScreen'

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <ActionScreen />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
