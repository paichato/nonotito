import React from "react";
import { View, Text } from "react-native";
import { BigTitle, Container, Txt } from "./styles";
import Logo from "../../assets/Logo.svg";

export default function Opening() {
  return (
    <Container source={require("../../assets/bg.png")}>
      <Logo />
      <BigTitle>Aonde deseja{'\n'} pedir hoje?</BigTitle>
      <Txt>Digite o CEP de entrega</Txt>
    </Container>
  );
}
