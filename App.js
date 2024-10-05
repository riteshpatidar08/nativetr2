import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'react-native';
import * as React from 'react';
function App() {
     const [searchQuery, setSearchQuery] = React.useState('');
console.log(StatusBar.currentHeight)
  return (
    <SafeAreaProvider style={{flex:1}}>
      <View style={{marginTop:StatusBar.currentHeight, padding:20 ,backgroundColor:'maroon' ,height:150 , justifyContent:'center'}}>
        <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
      </View>
      <ExpoStatusBar  translucent={true} backgroundColor='maroon' />
    </SafeAreaProvider>
  );
}

export default App;
