import React from 'react'
import { Provider } from 'react-redux'

import Sentry from 'sentry-expo'

import store from './store'
import RootNavigator from './navigation/RootNavigator'

import SplashScreen from './components/SplashScreen'

Sentry.enableInExpoDevelopment = false
Sentry.config(
  'https://7cf1ca1114a54c2eaba14a87d721f303@sentry.io/1215376'
).install()

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.isReady ? (
          <RootNavigator />
        ) : (
          <SplashScreen
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        )}
      </Provider>
    )
  }
}
