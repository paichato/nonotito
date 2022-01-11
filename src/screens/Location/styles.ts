import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import colors from "../../lib/colors";

export const MainView=styled.View`
height:${hp('45%')}px;
width: ${wp('100%')}px;

`

export const DeliverGuyContainer=styled(TouchableOpacity)`
height:${hp('14%')}px;
width: ${wp('100%')}px;
background-color: ${colors.primary};
border-radius:10px;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding-left: ${wp('5%')}px;
padding-right: ${wp('5%')}px;
`

export const DeliverGuyImage=styled.Image`
border-radius:15px;

`