import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import colors from "../../lib/colors";

export const Container=styled.View`
flex:1;

`

export const MainContainer=styled.View`
height: ${hp('70%')}px;
padding-left: ${wp('5%')}px;
padding-right: ${wp('5%')}px;
width: 100%;
align-items: center;
justify-content: center;
`

export const Banner=styled(TouchableOpacity)`
height: ${hp('10%')}px;
background-color:${colors.primary};
width:${wp('90%')}px;
border-radius: 10px;
flex-direction: row;
align-items: center;
align-self: center;
justify-content:space-around;

`

export const BannerLeft=styled.View`
width: 70%;
align-items:flex-start;

`