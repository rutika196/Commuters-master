import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import ActionButton from 'react-native-action-button'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import CommentsFeed from './CommentsFeed.js'

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


// <TouchableOpacity onPress={this.navigateToAddAlertPage}>
//   <Text style={styles.actionButtonIcon}>
//     <MaterialCommunityIcons name='plus' size={38} style={styles.actionButtonIcon}/>
//   </Text>
// </TouchableOpacity>

export default class Comments extends React.Component {
  navigateToAddAlertPage = () => {
    this.props.navigation.navigate('AddAlerts');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.searchView}>
            <TextInput
              returnKeyType='next'
              onSubmitEditing={ () => this.passwordInput.focus()}
              placeholder="search"
              keyboardAppearance='dark'
              autoCapitalize='none'
              autoCorrect         ={false}
              style={styles.input}
            />

          </View>
          <CommentsFeed/>
        </ScrollView>
      </View>

    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f3f8fb',
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
    backgroundColor: '#f3f8fb',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    paddingLeft: 10,
    shadowColor: '#eee',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  actionButtonIcon: {
    color: 'rgb(88, 86, 214)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
