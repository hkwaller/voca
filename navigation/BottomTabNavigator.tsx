import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Word"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Word"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-circle-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-add-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Word"
        component={TabOneScreen}
        options={{ headerTitle: 'Amalie' }}
      />
    </TabOneStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Add"
        component={TabTwoScreen}
        options={{ headerTitle: 'Lägg till ord' }}
      />
    </TabTwoStack.Navigator>
  )
}