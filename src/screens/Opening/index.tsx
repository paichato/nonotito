import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BigTitle, Container, Input,  InputContainer, Txt } from "./styles";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import colors from "../../lib/colors";

export default function Opening() {
  return (
    <Container source={require("../../assets/bg.png")}>
      <Logo />
      <BigTitle>Aonde deseja{'\n'} pedir hoje?</BigTitle>
      <Txt color='white' >Digite o CEP de entrega</Txt>
      <InputContainer>
       <Input selectionColor={colors.secondary} inlineImageLeft='../../assets/buscar.png'  />
        <SearchIcon/>
      </InputContainer>
     
      
      <TouchableOpacity>
        <Txt>Não sabe o seu CEP?</Txt>
      </TouchableOpacity>
    </Container>
  );
}
