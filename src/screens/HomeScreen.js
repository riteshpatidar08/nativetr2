import React from 'react'
import {View ,Text} from 'react-native'
import { Button } from 'react-native'
import styled from 'styled-components/native' ;

const ButtonStyle = styled.Button`background-color : blue`
const Title = styled.Text`color : red ; font-size : 50px`

function HomeScreen({navigation}) {
  console.log(navigation)
  const product = [{
    id : 1,
    name : "Tv" ,
    Description : '"Tv-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },{
    id: 2,
    name: "Ac",
    Description : '"Ac-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },]

  const navigateTodetails  = (item) => {
    navigation.navigate('Details',{itemDescription : item.Description , itemName : item.name})
  }
  return (
   <View>
  
   {
  product.map((item)=>(
    <View>
    <ButtonStyle onPress={()=>navigateTodetails(item)} title={item.name}  />
    </View>
  ))
   }
   </View>
  )
}

export default HomeScreen
