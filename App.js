import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash.js'
import Welcome from './components/Welcome.js'
import Login from './screens/Login.js'
import CreateAccount from './components/CreateAccount.js'
import Alerts from './components/Alerts.js'
import AddAlerts from './components/AddAlerts.js'
import { Tabs, Root } from './router.js'

export default class App extends React.Component {

  render() {
    return (
        <Root/>
        // <Splash/>
        // <Welcome/>
        // <Login/>
        // <CreateAccount/>
        // <Alerts/>
        // <Tabs/>
      // <AddAlerts/>
)
  }
}
