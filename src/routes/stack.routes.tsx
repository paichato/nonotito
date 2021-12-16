import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Opening from "../screens/Opening";
import Register from "../screens/Register";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Opening" component={Opening} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
