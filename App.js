import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/StackNavigator';
import {useEffect, useCallback, useState} from "react"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Manrope_500Medium, Manrope_600SemiBold } from '@expo-google-fonts/manrope';


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    
    async function prepare() {
        try {
            await Font.loadAsync({ Pacifico_400Regular});
            await Font.loadAsync({ Manrope_500Medium });
            await Font.loadAsync({ Manrope_600SemiBold });
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (e) {
            console.warn(e);
        } finally {
            setAppIsReady(true);
        }
    }

    prepare();
}, []);

useCallback(async () => {
    if (appIsReady) {
        await SplashScreen.hideAsync();
    }
}, [appIsReady]);

if (!appIsReady) {
    return null;
}

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

