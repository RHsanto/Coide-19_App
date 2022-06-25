import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/color";
import { spacing } from "../theme/spacing";
import { Octicons ,FontAwesome,Feather,MaterialCommunityIcons } from '@expo/vector-icons';

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
        <View>
        <Text preset="h3">Covid-19</Text>
        </View>
        <View style={styles.dropdown}>
        <Image style={{width:30,height:30, borderRadius:'50%'}} source={require('../../assets/image/download.png')} />
        <Text preset="small" style={styles.usa}>USA</Text>
      <Octicons name="triangle-down" size={24} style={{color:colors.grey,marginRight:spacing[2]}} /> 
        </View>
      </View>
    {/*description section  */}
      <View>
       <Text preset="h4">Are you feeling sick?</Text>
       <Text preset="small" style={{marginTop:spacing[3], lineHeight:22,}}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
      </View>
  {/* contact btn */}
      <View style={styles.contactBtn}>
       <View style={[styles.commonBtn,{backgroundColor:colors.orange}]}>
       <FontAwesome name="phone" size={20} color="white" />
        <Text>Call Now</Text>
       </View>
       <View style={[styles.commonBtn,{backgroundColor:colors.blue}]}>
       <Feather name="message-circle" size={20} color="white" />
        <Text>Send SMS</Text>
       </View>
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
    paddingVertical:spacing[6]
  },
  dropdown:{
    backgroundColor:colors.white,
    padding:spacing[2],
    flexDirection:'row',
    alignItems:'center',
    borderRadius:'50%'

  },
  usa:{
   color:colors.black,
   paddingLeft:spacing[2],
   paddingRight:spacing[3]
  },
  contactBtn:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   paddingVertical:spacing[5]
   
  },
  commonBtn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width: '47%',
    borderRadius:'50%',
    paddingVertical:spacing[4],
    paddingHorizontal:spacing[5],
    
  },
 
})