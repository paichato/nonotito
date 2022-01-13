import styled from "styled-components/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../lib/colors";

export const Container=styled(ImageBackground)`
flex:1;

`

export const MainContainer=styled.View`
height: ${hp('75%')}px;
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
margin-bottom: ${hp('1.5%')}px;
`

export const BannerLeft=styled.View`
width: 60%;
align-items:flex-start;

`

export const PizzaWrapper=styled.TouchableOpacity`
width: 100%;
height: ${hp('6%')}px;
/* background-color:${colors.grad1}; */
border-radius:16px;
flex-direction: row;
align-items: center;
justify-content:space-between;
margin-bottom: ${hp('1.5%')}px;
padding:0px 5px;
margin-top: ${hp('1.5%')}px;
`

export const PizzaImage=styled.Image`
width: 25%;
border-radius:16px;

`

export const PizzaDetails=styled.View`
/* width: 30%; */
`

export const CupomContainer=styled(TouchableOpacity)`
width: 100%;
height: ${hp('6%')}px;
background-color:${colors.unselected_light};
flex-direction: row;
align-items: center;
justify-content:space-between;
padding:0px ${wp('5%')}px;
border-radius: 10px;
/* margin-top:${hp('1.5%')}px; */
margin-bottom:${hp('1.5%')}px;

`

export const SubTotalWrapper=styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content:space-between;
padding:0px ${wp('5%')}px;
margin-bottom:${hp('1.0%')}px;
`

export const Divider=styled.View`
width: 100%;
height: 1px;
background-color:${colors.bg_white};
`

export const Footer=styled.View`
background-color:${colors.grad1};
height: ${hp('10%')}px;
/* align-self: flex-end; */
align-items: center;
justify-content: center;
`
export const FooterButton=styled(TouchableOpacity)`
background-color:${colors.secondary};
width: 90%;
height: ${hp('6%')}px;
align-self: center;
justify-content:center;
border-radius:12px;
`

export const AddMoreContainer=styled.View`
flex-direction: row;
align-items: center;
justify-content:space-around;
margin-top: ${hp('1%')}px;
`

export const AddMoreWrapper=styled(TouchableOpacity)`
height: ${wp('26%')}px;
width: ${wp('26%')}px;
border-radius: 10px;
background-color: ${colors.grad1};

`

export const PaymentTypeWrapper=styled(TouchableOpacity)`
flex-direction: row;
align-items:center;
justify-content:space-between;
height: ${wp('24%')}px;
width: 100%;
border-width: ${({selected})=>selected ? 2 :0}px;
border-color: ${({selected})=>selected ? colors.secondary : colors.grad1};
border-radius:16px;
padding-right: ${wp('5%')}px;
`
export const PaymentLeft=styled.View`
flex-direction: row;
width: 80%;

`

export const PaymentRight=styled(TouchableOpacity)`

`