import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BigTitle, Container, Input, InputContainer, Txt } from "./styles";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import colors from "../../lib/colors";
import * as Animatable from "react-native-animatable";

export default function Opening() {
  return (
    <Container source={require("../../assets/bg.png")}>
      <Animatable.View animation="pulse">
        <Logo />
      </Animatable.View>
      <Animatable.View style={{ width: "100%" }} animation="fadeInUp">
        <BigTitle>Aonde deseja{"\n"} pedir hoje?</BigTitle>
        <Txt color="white">Digite o CEP de entrega</Txt>
      </Animatable.View>

      <Animatable.View style={{ width: "100%" }} animation="zoomIn">
        <InputContainer>
          <Input
            selectionColor={colors.secondary}
            inlineImageLeft="../../assets/buscar.png"
          />
          <SearchIcon />
        </InputContainer>
      </Animatable.View>

      <Animatable.View style={{ width: "100%" }} animation="fadeIn">
        <TouchableOpacity>
          <Txt>Não sabe o seu CEP?</Txt>
        </TouchableOpacity>
      </Animatable.View>
    </Container>
  );
}
