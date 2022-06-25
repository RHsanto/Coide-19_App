import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/text';
import { typography } from './src/theme/typography';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    GraphikBold: require('./assets/fonts/GraphikBold.otf'),
    GraphikMedium: require('./assets/fonts/GraphikMedium.otf'),
    GraphikExtralight: require('./assets/fonts/GraphikExtralight.otf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
     <StatusBar style="auto" />
    </>
  );
}


