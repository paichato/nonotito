import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import colors from "../../lib/colors";
import fonts from "../../lib/fonts";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const Container=styled(ImageBackground)`
flex:1;
alignItems:center;
justifyContent:center;
padding-left:${wp('5%')}px;
padding-right:${wp('5%')}px;
`

export const BigTitle=styled.Text`
color:${colors.bg_white};
font-family:${fonts.semibold};
font-size:${fonts.h2};
text-align:center;
`
export const Txt=styled.Text`
color:${colors.bg_white};
font-family:${fonts.regular};
font-size:${fonts.p};
text-align:center;
`

export const Input=styled.TextInput`

`