import React from "react";
import { View, Text } from "react-native";
import { Container } from "../screens/Opening/styles";
import Logo from "../assets/Logo.svg";
import * as Animatable from "react-native-animatable";

export default function AppLoader() {
  return (
    <Container source={require("../assets/bg.png")}>
      <Animatable.View useNativeDriver duration={5000} animation='pulse'>
      <Logo />  
      </Animatable.View>
      
    </Container>
  );
}
