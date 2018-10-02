import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import LoginForm from '../screens/LoginForm.js'

// <TouchableOpacity onPress={this._onPressButton}>
//   <Text>
//     <Entypo name='chevron-small-left' size={40} color='rgb(51, 149, 255)'/>
//   </Text>
// </TouchableOpacity>
// <Text style={styles.title}>Log in</Text>

export default class Login extends React.Component {
  navigateToSettingsPage = () => {
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TouchableOpacity onPress={this.navigateToSettingsPage}>
          <View style={styles.closeBtn}>
            <Ionicons name='md-close' size={34} color='#333'/>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <LoginForm/>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    paddingLeft:10,
    paddingRight:20,
    marginTop:30
  },
  title: {
    color: '#333',
    fontSize: 32,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 30,
    fontFamily: 'AppleSDGothicNeo-Light'
  },
  closeBtn: {
    paddingTop: 30,
    paddingLeft: 20,

  }
});
