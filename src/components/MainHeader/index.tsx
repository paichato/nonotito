import React from "react";
import { View, Text } from "react-native";
import { Header } from "./styles";

export default function MainHeader({ children }) {
  return <Header>{children}</Header>;
}
