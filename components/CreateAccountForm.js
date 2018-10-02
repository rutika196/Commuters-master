import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class CreateAccountForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          NAME
        </Text>
        <TextInput
          returnKeyType='next'
          keyboardAppearance='dark'
          onSubmitEditing={ () => this.emailInput.focus()}
          style={styles.input}
        />

        <Text style={styles.textStyle}>
          EMAIL ADDRESS
        </Text>
        <TextInput
          returnKeyType='next'
          onSubmitEditing={ () => this.passwordInput.focus()}
          keyboardType='email-address'
          keyboardAppearance='dark'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          ref={(input) => this.emailInput = input}
        />

        <Text style={styles.textStyle}>
          PASSWORD
        </Text>
        <TextInput
          secureTextEntry
          returnKeyType='go'
          keyboardAppearance='dark'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <View style={styles.submitBtn}>
          <TouchableOpacity>
            <Text>
              <Ionicons name='ios-arrow-dropright' size={52} color='skyblue'/>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    fontFamily: 'AppleSDGothicNeo-SemiBold'
  },
  textStyle:{
    color: '#333',
    fontSize: 16,
    fontFamily: 'AppleSDGothicNeo-SemiBold'
  },
  submitBtn: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
