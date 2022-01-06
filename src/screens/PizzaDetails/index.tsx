import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { DetailsContainer, Header, Main } from "./styles";
import HeartIcon from "../../assets/heart.svg";
import ButtonWrapper from "../../components/ButtonWrapper";
import { Txt } from "../Opening/styles";

export default function PizzaDetails() {
  return (
      <View style={{  flex:1, height:'100%' }}>

      
    <Image
      style={{ width: "100%", height: "50%", resizeMode: "cover", alignSelf:'flex-start', top:0 }}
      source={require("../../assets/pizzas/pizza4.jpg")}
    />
    <Main>
      <Header>
      <ButtonWrapper Icon={<HeartIcon />} />
      <Txt
            // margin
            bold
            color={"white"}
          >Marguerita</Txt>
          <ButtonWrapper Icon={<HeartIcon />} />
      </Header>
      <DetailsContainer>

      </DetailsContainer>  
    </Main>
      
   
    </View>
  );
}
