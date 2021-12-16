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
align-items:center;
justify-content:center;
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
color:${ ({color})=> color==='white' ? colors.bg_white : color==='blue' ? colors.primary :colors.secondary};
font-family:${fonts.regular};
font-size:${fonts.p};
text-align:center;
margin-top:${hp('2%')}px;
`

export const Input=styled.TextInput`
width:100%;
height:${hp('8%')}px;
background-color:${colors.bg_white};
border-radius: 10px;
margin-top:${hp('2%')}px;
`