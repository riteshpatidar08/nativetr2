import React from 'react'
 import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Settings from './screens/Settings'
import DetailsScreen from './screens/DetailsScreen'
function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Tab" component={TabNavigator} />
        <Drawer.Screen name="Settings" component={Settings} />
<Drawer.Screen name="Details" component={DetailsScreen}/>
       
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
