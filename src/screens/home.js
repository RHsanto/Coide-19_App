import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/color";
import { Feather } from '@expo/vector-icons';
import { spacing } from "../theme/spacing";

export default function Home(){

  return(
   <SafeAreaView>
    <ScrollView>
      <View style={styles.firstContainer}>
      <View style={styles.navbar}>
        <Image source={require('../../assets/image/menu.png')} />
        <Feather name="bell" size={24} color="white" />
      </View>
      <View style={styles.covidView}>
        <Text preset="h1">Covid-19</Text>
        <Text>Covid-19</Text>
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
    paddingHorizontal:spacing[8]
    
  },
  navbar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:spacing[6],
   
  },
  covidView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:spacing[10]
  }
})