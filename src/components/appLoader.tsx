import React from "react";
import { View, Text } from "react-native";
import { Container } from "../screens/Opening/styles";
import Logo from "../../assets/Logo.svg";

export default function AppLoader() {
  return (
    <Container source={require("../../assets/bg.png")}>
      <Logo />
    </Container>
  );
}
