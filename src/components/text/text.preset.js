import { colors } from "../../theme/color";
import { typography } from "../../theme/typography";


const BASE ={
  fontFamily:typography.primary,
  fontSize:16,

}

const BOLD ={
  fontFamily:typography.primaryBold,
  fontSize:16,
  color:colors.white
}

export const presets ={
  default: BASE,
  bold:BOLD,
  h1:{
    ...BOLD,
    fontSize:32,
  },
  h2:{
    ...BOLD,
    fontSize:28,
  },
  h3:{
    ...BOLD,
    fontSize:24,
  },
  h4:{
    ...BOLD,
    fontSize:20,
  },
  small:{
    fontSize:14,
    color:colors.white,
  }
}