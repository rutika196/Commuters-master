import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default class Welcome extends React.Component {
  passit = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/Octocat.png')}
          />
          <Text style={styles.heading}>
            Welcome to Commuter.
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this._onPressButton}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={this.passit()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyleDark} onPress={this._onPressButton}>
            <Text>
              <FontAwesome name='facebook-f' size={20} color='white'/>
            </Text>
            <Text style={styles.buttonTextDark}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center'
  },
  logoContainer: {
    flexDirection: 'column',
    marginTop: 100,
    marginLeft: 30
  },
  logo: {
    width: 70,
    height: 70
  },
  heading: {
    color: '#333',
    fontSize: 31,
    fontFamily: 'AppleSDGothicNeo-Light',
    marginTop: 30
  },
  contentContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center'
  },
  buttonStyle: {
    width: 250,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderWidth: 1,
    // d6d7da
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  buttonText: {
    color: '#777',
    fontSize:18
  },
  buttonStyleDark: {
    flexDirection: 'row',
    width: 250,
    height: 50,
    backgroundColor: '#777',
    borderRadius: 30,
    borderWidth: 1,
    // d6d7da
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  buttonTextDark: {
    paddingLeft: 15,
    color: '#fff',
    fontSize:18
  }
});
