import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { StatusBar, Platform, View } from 'react-native'

import Layout from './layout'
import configureStore from './stores'

const store = configureStore()

if (Platform.OS === 'ios') {
  StatusBar.setBarStyle('light-content')
} else {
  StatusBar.setBarStyle('dark-content')
  StatusBar.setTranslucent(true)
}

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Layout />
        </View>
      </Provider>
    )
  }
}
