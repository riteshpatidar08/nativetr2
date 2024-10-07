import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'react-native';
import * as React from 'react';
import { Card } from 'react-native-paper';
function App() {
 
  console.log(StatusBar.currentHeight);
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
     <Text>Hello</Text>
      <ExpoStatusBar translucent={true}  />
    </SafeAreaProvider>
  );
}

export default App;
