import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from '../colors'
import { Home, Contacts, Services } from '../screens'

const { Navigator, Screen } = createBottomTabNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.blueSenac,
          headerShown: false,
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Services"
          component={Services}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="phone-call" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
