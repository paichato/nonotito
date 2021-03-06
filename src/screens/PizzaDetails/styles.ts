import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import colors from "../../lib/colors";
import { TouchableOpacity } from "react-native";

export const Header=styled.View`
flex-direction: row;
align-items: center;
justify-content:space-between;
height: ${hp('12%')}px;
width: 100%;
padding-left: ${wp('5%')}px;
padding-right: ${wp('5%')}px;
margin-top: ${hp('4%')}px;
`

export const Main=styled.View`
height: ${hp('100%')}px;
width: ${wp('100%')}px;
position: absolute;
z-index: 2;
elevation:5;
`

export const DetailsContainer=styled.View`
height: ${hp('60%')}px;
background-color:${colors.grad1}
border-radius:30px;
margin-top: ${hp('24%')}px;

/* align-items:center; */
/* align-self: flex-end; */

/* align-self:flex-end; */
`
export const DetailsHeader=styled.View`

height: ${hp('6%')}px;
width: 55%;
flex-direction: row;
align-items: center;
justify-content:space-between;
align-self: center;
margin-top: ${hp('4%')}px;

`

export const DetailsHeaderColumn=styled.View`
align-items: center;
justify-content:space-around;
flex-direction: column;
/* padding-top: 5px; */
/* height: 100%; */

`

export const Divider=styled.View`
height: 100%;
background-color:${colors.bg_white};
width: 2px;

`

export const DetailsCenter=styled.View`
height: 40%;
flex-direction: row;
width: 80%;
align-items: center;
justify-content: space-between;
align-self: center;
margin-top: ${hp('4%')}px;
`
export const DetailsTextContainer=styled.View`
/* height: ${hp('10%')}px; */
width: 100%;
text-align:left;
align-self: center;
`

export const CategoryWrapper=styled(TouchableOpacity)`
height: ${hp('6%')}px;
width: ${wp('25%')}px;
background-color:${({selected})=>selected ? colors.blue :colors.unselected_light};
align-items: center;
justify-content:center;
border-radius: 10px;
padding: 10px;
/* padding-top:20px; */
/* padding-bottom:20px; */
/* padding: 20px; */
`

export const SizeSelectContainer=styled.FlatList`
height: ${hp('8%')}px;
flex-direction:row;

`

export const DetailsFooter=styled.View`
width: 100%;
height: ${hp('10%')}px;
flex-direction:row;
bottom: 0px;
align-self: center;
padding-left: ${wp('5%')}px;
padding-right: ${wp('5%')}px;
align-items: center;
justify-content:space-between;
`

export const CartButton=styled(TouchableOpacity)`
width: 60%;
height: ${hp('6%')}px;
border-radius:10px;
align-items:center;
justify-content:center;
background-color:${colors.secondary};

`