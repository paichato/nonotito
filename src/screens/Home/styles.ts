import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import colors from "../../lib/colors";
import { FlatList, TouchableOpacity } from "react-native";

export const Container=styled.View`
flex:1;
padding-top:${hp('5%')}px;
padding-bottom:${hp('5%')}px;
padding-left:${wp('5%')}px;
padding-right:${wp('5%')}px;

`

export const HeaderWrapper=styled.View`
height:${hp('30%')}px;
padding:10px 0px;
justify-content:space-between;
`

export const Header=styled.View`
flex-direction: row;
/* height:${hp('8%')}px; */
width: 100%;
align-items: center;
justify-content:space-between;
height:30%;
padding: 0px 10px;
`
export const HeaderCenter=styled.View`
/* flex-direction: row; */
width: 65%;
height:100%;
/* align-items: center; */
justify-content:space-between;
/* text-align:left; */
`

export const Banner=styled.TouchableOpacity`
/* height:${hp('20%')}px; */
height: 60%;
width: 100%;
background-color:${colors.blue};
border-radius: 10px;
align-items: center;
justify-content: center;
`

export const CategoriasTitleWrapper=styled.View`
flex-direction: row;
/* height:${hp('8%')}px; */
width: 100%;
align-items: center;
justify-content:space-between;
/* height:30%; */
/* padding: 0px 10px; */
`

// export const CategoryContainer=styled(FlatList)`
// flex:1;
// `

export const CategoryContainer=styled.View`
/* flex:1; */
flex-direction: row;
align-items: center;
justify-content:space-between;
`

export const CategoryWrapper=styled(TouchableOpacity)`
height: ${hp('13%')}px;
width: ${hp('13%')}px;
background-color:${({selected})=>selected ? colors.blue :colors.unselected_light};
align-items: center;
justify-content:center;
border-radius: 10px;
padding: 10px;
/* padding-top:20px; */
/* padding-bottom:20px; */
/* padding: 20px; */
`


