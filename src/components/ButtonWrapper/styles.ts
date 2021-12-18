import styled from "styled-components/native";
import {TouchableOpacity} from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import colors from "../../lib/colors";

export const Container=styled(TouchableOpacity)`
width: ${wp('8%')}px;
height: ${wp('8%')}px;
border-radius: 10px;
background-color: ${colors.unselected};
align-items: center;
justify-content:center;
`