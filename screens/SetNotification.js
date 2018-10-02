import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import LoginForm from '../screens/LoginForm.js'

export default class SetNotification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/alerts`)
      .then(res => {
        console.log(res)
        return res.json()
      }).then(data => {
        console.log('data', data)
        let alerts = data;
        console.log('alerts', alerts)
        this.setState({ alerts })
      })
      .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });
  }
  navigateToSettingsPage = () => {
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            this.state.alerts.map( ({id, name, image, service}) => {
              <View key={id}>
                <Text style={styles.closeBtn}>{name}</Text>
              </View>
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },
  closeBtn: {
    color: '#333'
  }
});
