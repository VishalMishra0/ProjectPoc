import { View, Text } from 'react-native'
import React from 'react'
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './Navigation/StackNaviagtion';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>

      <StackNavigation/>

    </NavigationContainer>
  )
}

export default App



