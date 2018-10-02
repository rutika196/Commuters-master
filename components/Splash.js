import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Splash extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Commuters</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ccc',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Medium'
  }
});
