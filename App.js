import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text/text';
import { typography } from './src/theme/typography';




export default function App() {

  const [loaded] = useFonts({
    GraphikExtralight: require('./assets/fonts/GraphikExtralight.otf'),
    GraphikBlack: require('./assets/fonts/GraphikBlack.otf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text  style={{ fontSize: 30,fontFamily:typography.primaryBold }}>Open up App.js to start working on your app!</Text>
      <Text style={{fontFamily:'GraphikExtralight',fontSize: 30,}}>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
