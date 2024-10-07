import React from 'react'
import {View , Text} from 'react-native'
function DetailsScreen({route}) {
    const {itemDescription , itemName} = route.params
  return (
   <View>
    <Text>{itemDescription}</Text>
    <Text>{itemName}</Text>
   </View>
  )
}

export default DetailsScreen
