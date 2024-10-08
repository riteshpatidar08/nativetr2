import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View ,Text} from 'react-native'
import styled from 'styled-components/native'
import { Button } from 'react-native-paper';
const Title = styled(Text)`font-size : ${props => props.theme.Size[4]}`

function AsyncScreen() {

    const setItem = async() => {
        await AsyncStorage.setItem('name','abc')
        console.log('success')
    }

    const getItem = async() => {
        const name = await AsyncStorage.getItem('name')
        console.warn(name)
    }

  return (
   <View>
<Title>Async Storage</Title>
 <Button mode="outlined" onPress={setItem} >
    Set-Item
  </Button>
 <Button mode="outlined" onPress={getItem} >
  Get-Item
  </Button>
   </View>
  )
}

export default AsyncScreen
