import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Opening from "../screens/Opening";
import Register from "../screens/Register";
import AppRoutes from "./app.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false,animation: 'fade', }}>
      <Screen name="Opening" component={Opening} />
      <Screen name="Register" component={Register} />
      <Screen name="Home-Tab" component={AppRoutes} />
    </Navigator>
  );
}
