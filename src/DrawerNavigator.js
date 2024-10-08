import React from 'react'
 import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import Settings from './screens/Settings'
import DetailsScreen from './screens/DetailsScreen'
import AsyncScreen from './screens/AsyncScreen'

import ImagePick from './screens/ImagePick'
function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Tab" component={TabNavigator} />
        <Drawer.Screen name="Settings" component={Settings} />
<Drawer.Screen name="Details" component={DetailsScreen}/>
       <Drawer.Screen name="Image" component={ImagePick}/>
       <Drawer.Screen name="AsyncStorage" component={AsyncScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
