import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import Welcome from './components/Welcome.js'
import Login from './screens/Login.js'
import Alerts from './components/Alerts.js'
import AddAlerts from './components/AddAlerts.js'
import Home from './components/Home.js'
import Settings from './components/Settings.js'

import Comments from './screens/Comments.js'
import CommentsFeed from './screens/CommentsFeed.js'
import SetNotification from './screens/SetNotification.js'

export const AlertsScreen = StackNavigator({
  AlertsScreen: {
    screen: Alerts,
    navigationOptions: {
      title: 'Alerts'
    }
  }
});

export const CommentsScreen = StackNavigator({
  CommentsScreen: {
    screen: Comments,
    navigationOptions: {
      title: 'Comments'
    }
  },
  AddAlerts: {
    screen: AddAlerts,
    navigationOptions: {
      title: 'Create Alert'
    }
  }
});

export const SetNotificationScreen = StackNavigator({
  SetNotificationScreen: {
    screen: SetNotification,
    navigationOptions: {
      title: 'Set Time'
    }
  }
});

export const SettingsScreen = StackNavigator({
  SettingsScreen: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings'
    }
  }
});

export const Tabs = TabNavigator({
  Comments: {
    screen: CommentsScreen,
    navigationOptions: {
      tabBarLabel: 'Comments',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='comment' size={24} color={tintColor}/>
    }
  },
  Alerts: {
    screen: AlertsScreen,
    navigationOptions: {
      tabBarLabel: 'Alerts',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='bell' size={24} color={tintColor}/>
    }
  },
  TrainList: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Entypo name='home' size={24} color={tintColor}/>
    }
  },
  SetNotification: {
    screen: SetNotificationScreen,
    navigationOptions: {
      tabBarLabel: 'Set Time',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-timer' size={24} color={tintColor}/>
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-settings' size={24} color={tintColor}/>
    }
  }
},
{
  initialRouteName: 'TrainList',
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'rgb(0, 122, 255)',
    labelStyle: {
      fontSize: 12
    },
    iconStyle: {
      fontSize: 52
    },
    style: {
      backgroundColor: '#fff'
    }
  }
})

// export const AddAlerts = StackNavigator({
//   Settings: {
//     screen: Settings,
//   },
//   Settings: {
//     screen: Settings,
//   }
// },{
//     mode: 'model',
//     headerMode: 'none'
// })


export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Sign in'
    }
  }
},{
    mode: 'model',
    headerMode: 'none',
})

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});
