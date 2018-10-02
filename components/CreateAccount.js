import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import CreateAccountForm from './CreateAccountForm.js'

export default class CreateAccount extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text>
              <Entypo name='chevron-small-left' size={40} color='black'/>
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={styles.title}>Create an Account</Text>
          <CreateAccountForm />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ecf0f1',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingLeft:10,
    paddingRight:20,
    marginTop:30
  },
  topBarButton: {
    marginTop:10,
    color: '#333',
    fontSize: 18
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
