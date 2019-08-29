import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { Header, Right, Button } from 'native-base';
import LogIn from "../components/LogIn";

export default function HomeScreen({ navigation }) {
  _handleLogOut = () => {
      AsyncStorage.removeItem('token');
      alert('You have been logged out.');
  }
  return (
    <View style={styles.container}>
      <Header>
        <Right>
            <Button
            has Text
            transparent
            onPress={() => _handleLogOut()}
          >
            <Text>Logout</Text>
          </Button>
        </Right>
      </Header>
    

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <TouchableOpacity onPress={handleWebPress} style={styles.WebLink}>
            <Text style={styles.WebLinkText}>
            ALLY
            </Text>
          </TouchableOpacity>
         
          <TouchableOpacity onPress={handleMfPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
            by Mentally Friendly
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <LogIn navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function handleWebPress() {
  WebBrowser.openBrowserAsync(
    'http://allyhealth.com.au'

   );
}

function handleMfPress() {
  WebBrowser.openBrowserAsync(
    'https://mentallyfriendly.com/'
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbefdacf',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  WelcomeText:{
    fontSize: 50,
    fontWeight: '600',
    color: 'grey',
    paddingTop: 80,
    marginHorizontal:30,
  },
  WebLink: {
    paddingVertical: 15,
  },
  WebLinkText: {
    fontSize: 60,
    fontWeight: '600',
    color: '#234544',
  },


});
