import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'

import createRootNavigator from '../navigation/appNavigation'

// eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {
  render() {
    const Navigator = createAppContainer(createRootNavigator())
    return (
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    )
  }
}
