import styled from "styled-components/native";
import { ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
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
/* padding-top: ${hp('6%')}px; */
`

export const BigTitle=styled.Text`
color:${colors.bg_white};
font-family:${fonts.semibold};
font-size:${fonts.h2}px;
text-align:center;
`
export const Txt=styled.Text`
color:${ ({color})=> color==='white' ? colors.bg_white : color==='blue' ? colors.primary :color==='black'?colors.black : color==='gray'? colors.unselected : colors.secondary};
font-family:${ ({bold,medium})=> bold ? fonts.semibold : medium ? fonts.medium : fonts.regular};
font-size:${({size})=> size==='h1'? fonts.h1 : size==='h2'? fonts.h2 : fonts.p}px;
text-align:${({position})=>position ==='left'? 'left':'center'};
margin-top:${({margin})=> margin ? 0 : hp('2%')}px;
`

export const Input=styled.View`
/* width:100%; */
width:80%;
height:${hp('8%')}px;
background-color:${colors.bg_white};
/* border-radius: 10px; */
/* margin-top:${hp('2%')}px; */
`

export const InputContainer=styled(TouchableOpacity)`

flex-direction: row;
justify-content:center;
align-items: center;
background-color:${colors.bg_white};
height:${hp('8%')}px;
border-radius: 10px;
margin-top:${hp('2%')}px;
width:100%;
`

export const SearchImage=styled.Image`
align-items: center;


`

export const RegisterContainer=styled.View`
width: 100%;
`

export const AddressHeader=styled.View`
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between;
height: ${hp('14.5%')}px;
/* margin-bottom:${hp('2%')}px; */
`
export const IconWrapper=styled.View`
height: 100%;
width: 12%;
align-self: flex-start;
justify-content:center;

`

export const AddressWrapper=styled.View`
width: 88%;
/* height: 100%; */
text-align: left;
align-items: center;
align-self: center;
`

export const TxtInput=styled.TextInput`
width: 100%;
height:${hp('8%')}px;
background-color:${colors.bg_white};
border-radius: 10px;
margin-top:${hp('2%')}px;
padding-left: 16px;
font-family:${fonts.regular};
`

export const RegisterButton=styled(TouchableOpacity)`
width: 100%;
height:${hp('8%')}px;
background-color:${colors.secondary};
margin-top:${hp('5%')}px;
border-radius: 10px;
`