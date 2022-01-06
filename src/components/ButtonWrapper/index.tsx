import React from "react";
import { View, Text } from "react-native";
import { Container } from "./styles";

export default function ButtonWrapper({ action, Icon, color }) {
  return <Container color={color} onPress={action}>{Icon}</Container>;
}
