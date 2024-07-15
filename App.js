import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}



//We use Manrope fonts for texts
//"rnfs" like "!" in Html 

//navigation.goBack()
//navigation.navigate("")
//navigation.reset()