import { StyleSheet, Text as RNtext } from "react-native";
import { presets } from "./text.preset";


export default function Text({children,preset: preset="default",style}){
//  এখানে আমাদের preset ও react-native এর style এক করা হয়েছে 
  const textStyle =StyleSheet.compose(presets[preset],style); 
  return<RNtext style={textStyle}>{children}</RNtext>
}