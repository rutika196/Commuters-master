import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import { alerts } from '../data/Alert_Data'
import SVGImage from 'react-native-svg-image';

import * as AlertsAPI from '../utils/AlertsAPI'
// import MTA from 'mta-gtfs'

export default class AlertFeeds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alerts: []
    }
  }

  componentDidMount() {
    AlertsAPI.getAll().then((alerts) => {
      this.setState({ alerts })
    })

  }
  render() {
    const alertsData = this.state.alerts
    return (
      <View style={styles.container}>
        { alertsData.map( a => (
          <View
            style={styles.box}
            key={a.id}>
            <View
              style={styles.content}>

                { a.trains.map( train => (
                  <SVGImage
                    style={{ width: 30, height: 30 }}
                    source={{uri:train.image}}
                    key={train.id}
                  />
                ))}

                <View
                  style={styles.images}>
                  { a.service == 'Good Service' ? <Text style={styles.greenText}>{a.service}</Text>
                    : a.service == 'Delays' ? <Text style={styles.redText}>{a.service}</Text>
                    : a.service == 'Service Change' ? <Text style={styles.yellowText}>{a.service}</Text>
                    : <Text style={styles.orangeText}>{a.service}</Text>
                  }
              </View>
            </View>
          </View>

        ))}
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
  },
  box: {
    paddingBottom: 15,
  },
  content: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'flex-start',
    shadowColor: '#eee',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    borderRadius: 10,
  },
  images:{
    width: 150
  },
  greenText: {
    fontWeight: 'bold',
    paddingTop: 5,
    color: 'green'
  },
  yellowText: {
    fontWeight: 'bold',
    paddingTop: 5,
    color: 'rgb(255, 204, 0)'
  },
  redText: {
    fontWeight: 'bold',
    paddingTop: 5,
    color: 'red'
  },
  orangeText: {
    fontWeight: 'bold',
    paddingTop: 5,
    color: 'rgb(255, 149, 0)'
  }
});
