import React from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";

export default function ButtonWrapper({ action, Icon }) {
  return <Container onPress={action}>{Icon}</Container>;
}
