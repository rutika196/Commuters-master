import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import TrainList from './TrainList.js'
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/ height
const LATITUDE_DELTA = 0.0022
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      initialPosition: {
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0,
          longitudeDelta: 0
      },
      markerPosition: {
          latitude: 0,
          longitude: 0
      }
    }
  }
  watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({ initialPosition: initialRegion })
      this.setState({ markerPosition: initialRegion})
    }, (error) => alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeOut: 20000, maximumAge: 10000})

  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)

    var lastRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

    this.setState({ initialPosition: lastRegion })
    this.setState({ markerPosition: lastRegion})
  })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
        <MapView
        style={styles.map}
        region={this.state.initialPosition}>
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}/>
            </View>
          </MapView.Marker>
        </MapView>
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
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007aff',
    borderWidth: 3,
    borderColor: 'white'
  },
})
