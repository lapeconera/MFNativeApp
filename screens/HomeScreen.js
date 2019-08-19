import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
          <Text style={styles.WelcomeText}>
          Ally supports you through your therapy journey.
          </Text>
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
