import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/color";


export default function Home(){

  return(
   <SafeAreaView>
    <ScrollView>
      <View style={styles.firstContainer}>
      <View style={styles.navbar}>
        <View>
          <Image source={require('../../assets/image/menu.png')} />
        </View>
        <View></View>
      </View>
      </View>
    </ScrollView>
   </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  firstContainer:{
    backgroundColor:colors.violet,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    
  },
  navbar:{
    alignItems:'center',
    justifyContent:'space-between'
  }
})