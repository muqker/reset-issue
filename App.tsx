import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Stack = createStackNavigator()

const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: '/home',
      Page: '/page',
    },
  },
}

const Page = () => {
  return <Text>Welcome to Page</Text>
}

const Home = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Page')}>
      <Text>Click to go to Page</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  // Render app
  return (
    <NavigationContainer {...{ linking }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
