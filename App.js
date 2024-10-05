import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
function App() {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <View>
        <Text>hello</Text>
      </View>
      <ExpoStatusBar style="auto" translucent={true} />
    </SafeAreaProvider>
  );
}

export default App;
