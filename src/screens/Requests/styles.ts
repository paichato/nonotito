import { ImageBackground } from "react-native";
import styled from "styled-components";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export const Container=styled(ImageBackground)`
flex:1;
padding-left:${wp('5%')}px;
padding-right:${wp('5%')}px;
`