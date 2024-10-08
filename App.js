import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'react-native';
import * as React from 'react';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/TabNavigator';
import DrawerNavigator from './src/DrawerNavigator';
import { theme } from './src/infrastructure';
import { ThemeProvider } from 'styled-components/native';
function App() {
 
  console.log(StatusBar.currentHeight);
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaProvider style={{ flex: 1 }}>
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
      <ExpoStatusBar translucent={true}  />
    </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
