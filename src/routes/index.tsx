import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from '../colors'
import {
  Home,
  Contacts,
  Services,
  CodeOfConduct,
  Tips,
  Invite,
  Salary,
  Videos,
  Calendar,
} from '../screens'

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
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Serviços"
          component={Services}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="briefcase" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Contatos"
          component={Contacts}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="phone-call" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name="youtube" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="CodeOfConduct"
          component={CodeOfConduct}
          options={{ tabBarButton: () => null }}
        />
        <Screen
          name="Tips"
          component={Tips}
          options={{ tabBarButton: () => null }}
        />
        <Screen
          name="Invite"
          component={Invite}
          options={{ tabBarButton: () => null }}
        />
        <Screen
          name="Salary"
          component={Salary}
          options={{ tabBarButton: () => null }}
        />
        <Screen
          name="Calendar"
          component={Calendar}
          options={{ tabBarButton: () => null }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
