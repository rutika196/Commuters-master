import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import * as UsersAPI from '../utils/UsersAPI'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      users: [],
      isLoggedIn: false,
      loginStatus: false
    }
  }

  componentDidMount() {
        fetch(`http://localhost:3000/users`)
          .then(res => {
            console.log(res)
            return res.json()
          }).then(data => {
            console.log('data', data)
            let users = data;
            console.log('user', users)
            this.setState({ users })
          })
          .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
          });
  }

  handlefunc = () => {
    this.state.users.map( (a) =>{
      if (this.state.username === a.username && this.state.password === a.password){
        this.setState({isLoggedIn: true})
        this.setState({loginStatus: false})
        console.log('correct')
      }

    })
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          returnKeyType='next'
          onSubmitEditing={ () => this.passwordInput.focus()}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          placeholder='Email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          returnKeyType='go'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder='Password'
          keyboardAppearance='dark'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        <View style={styles.submitBtn}>
          { this.state.loginStatus?
            <Text>Wrong username or password.</Text>: <Text></Text>
          }
          <TouchableOpacity onPress={this._onPressButton}>
            <Text style={styles.topBarButton}>Forgot password, { this.state.isLoggedIn}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlefunc}>
              <Ionicons name='ios-arrow-dropright' size={52} color='rgb(51, 149, 255)'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 80,
    paddingRight: 20,
    paddingBottom: 20
  },
  input: {
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingLeft: 20,
    // borderBottomWidth: 1,
    // borderColor: 'rgb(90, 200, 255)',
    marginBottom: 25,
    fontSize: 16,
    color: '#333',
  },
  textStyle:{
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBarButton: {
    marginTop: -40,
    color: 'steelblue',
    fontSize: 18
  },
  submitBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }
});
