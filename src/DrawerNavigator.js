import React from 'react'
 import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Settings from './screens/Settings'
function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Tab" component={TabNavigator} />
        <Drawer.Screen name="Settings" component={Settings} />

       
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
