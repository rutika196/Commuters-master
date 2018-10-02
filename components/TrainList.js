import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
export default class TrainList extends React.Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.box}>
          <View style={styles.outline}>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.strictRow}>
                <MaterialIcons name="search" size={24} color= '#777'/>
                <Text style={styles.textColor}>Get me somewhere</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.outline}>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.strictRow}>
                <Entypo name="home" size={24} color= '#777'/>
                <Text style={styles.textColor}>Get me to home</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  menu: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    width: 330,
  },
  outline: {
    padding: 5,
    // backgroundColor: 'rgba(76, 217, 100, 0.5)',
    borderRadius: 10,
    marginBottom: 10
  },
  btn: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: '#aaa',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  textColor: {
    color: '#777',
    paddingLeft: 20,
    paddingTop: 2,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  strictRow: {
    flexDirection: 'row'
  }
})
