import React from 'react'
import {View , Text ,Button} from 'react-native' ;


function DetailsScreen({route ,navigation}) {
    const {itemDescription , itemName} = route.params
  return (
   <View>
    <Button title="Go back" onPress={()=> navigation.goBack()}/>
    <Text>{itemDescription}</Text>
    <Text>{itemName}</Text>
   </View>
  )
}

export default DetailsScreen
