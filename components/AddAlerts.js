import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default class AddAlerts extends React.Component {
  navigateToAlertPage = () => {
    this.props.navigation.navigate('Alerts');
  };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Create an Alert</Text>
        </ScrollView>
      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // ecf0f1
    backgroundColor: '#ffffff'
  },
  title: {
    color: '#333',
    fontSize: 32,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 30,
    fontFamily: 'AppleSDGothicNeo-Light'
  }
});
