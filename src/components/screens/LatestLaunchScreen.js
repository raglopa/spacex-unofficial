import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class LatestLaunchScreen extends Component {
  static navigationOptions = { title: 'Latest launch' }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>coming soon...</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({})
