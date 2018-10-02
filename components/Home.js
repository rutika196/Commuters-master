import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import TrainList from './TrainList.js'
import Map from './Map.js'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.map}>
          <Map/>
        </View>
        <TrainList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    flex:1,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  }
})
