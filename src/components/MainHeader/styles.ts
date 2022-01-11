import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import colors from "../../lib/colors";

export const Header=styled.View`
flex-direction: row;
align-items: center;
justify-content:space-between;
height: ${hp('12%')}px;
width: 100%;
padding-left: ${wp('5%')}px;
padding-right: ${wp('5%')}px;
margin-top: ${hp('4%')}px;
background-color:${({bg})=>bg? colors.grad1 : 'rgba(0,0,0,0)'};
`