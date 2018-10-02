import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import ActionButton from 'react-native-action-button'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import AlertFeeds from './AlertFeeds.js'

// <TouchableOpacity onPress={this._onPressButton}>
//   <Text>
//     <Entypo name='chevron-small-left' size={40} color='black'/>
//   </Text>
// </TouchableOpacity>

// <ActionButton
//   buttonColor="rgb(88, 86, 214)"
//   onPress={this.navigateToAddAlertPage}
//   degrees={0}>
//   <MaterialCommunityIcons name='plus' size={44} style={styles.actionButtonIcon}/>
// </ActionButton>

// <View style={styles.searchView}>
//   <TextInput
//     returnKeyType='next'
//     onSubmitEditing={ () => this.passwordInput.focus()}
//     placeholder="search"
//     keyboardAppearance='dark'
//     autoCapitalize='none'
//     autoCorrect         ={false}
//     style={styles.input}
//   />
// </View>
export default class Alerts extends React.Component {
  navigateToAddAlertPage = () => {
    this.props.navigation.navigate('AddAlerts');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewPad}>
          <AlertFeeds/>
        </ScrollView>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f9faf2',
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
  searchView:{
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    borderWidth: 0,
    fontSize: 16,
    color: '#333',
    paddingLeft: 5
  },
  actionButtonIcon: {
    color: 'rgb(88, 86, 214)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollViewPad: {
    padding: 10
  }
});
