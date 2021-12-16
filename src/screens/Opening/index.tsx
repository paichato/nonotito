import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BigTitle, Container, Input, Txt } from "./styles";
import Logo from "../../assets/Logo.svg";

export default function Opening() {
  return (
    <Container source={require("../../assets/bg.png")}>
      <Logo />
      <BigTitle>Aonde deseja{'\n'} pedir hoje?</BigTitle>
      <Txt color='white' >Digite o CEP de entrega</Txt>
      <Input/>
      <TouchableOpacity>
        <Txt>Não sabe o seu CEP?</Txt>
      </TouchableOpacity>
    </Container>
  );
}
