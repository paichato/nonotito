import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import colors from "../../lib/colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const Container=styled.View`
flex:1;
align-items:center;
/* justify-content:center; */
padding-top:${hp('5%')}px;
padding-bottom:${hp('5%')}px;
padding-left:${wp('5%')}px;
padding-right:${wp('5%')}px;

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
border-radius: 14px;
margin-top:${hp('2%')}px;
width:100%;
`