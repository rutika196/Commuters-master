import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import AlertFeeds from './AlertFeeds.js'


          // <View style={styles.listOfSettings}>
          //   <TouchableOpacity style={styles.buttonStyle}>
          //     <View style={styles.addAlerts}>
          //       <Text style={styles.signOutText}>
          //         Sign out
          //       </Text>
          //     </View>
          //   </TouchableOpacity>
          // </View>

export default class Settings extends React.Component {
  navigateToLoginPage = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.listOfSettings}>
            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.addAlerts}>
                <Text style={styles.buttonText}>
                  Notification
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}>
              <View style={styles.addAlerts}>
                <Text style={styles.buttonText}>
                  Contact Us
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={this.navigateToLoginPage}>
              <View style={styles.addAlerts}>
                <Text style={styles.buttonText}>
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    paddingRight: 20,
    marginTop: 40
  },
  heading: {
    flex:1,
    alignItems: 'center'
  },
  title: {
    color: '#333',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
    alignItems: 'center'
  },
  buttonStyle: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 25,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#333',
    fontSize:18
  },
  signOutText: {
    color: '#333',
    fontSize:18,
    color: 'red'
  }
})
