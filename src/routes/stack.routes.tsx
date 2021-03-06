import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Opening from "../screens/Opening";
import Register from "../screens/Register";
import AppRoutes from "./app.routes";
import PizzaDetails from "../screens/PizzaDetails";
import Cart from "../screens/Cart";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import CartDetails from "../screens/CartDetails";
import CartPayment from "../screens/CartPayment";
import Location from "../screens/Location";

const { Screen, Navigator } = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();

export default function StackRoutes() {
  // const options = {
  //   headerBackTitleVisible: false,
  //   cardStyleInterpolator: ({ current: { progress } }) => {
  //     return {
  //       cardStyle: {
  //         opacity: progress,
  //       },
  //     };
  //   },
  // };

  return (
    // <Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
    //   <Screen name="Opening" component={Opening} />
    //   <Screen name="Register" component={Register} />
    //   <Screen name="Home-Tab" component={AppRoutes} />
    //   <Stack.Screen
    //     name="PizzaDetails"
    //     component={PizzaDetails}
    //     // screenOptions={() => options}
    //     sharedElements={(route) => {
    //             const { item } = route.params;
    //             return [item.id];
    //           }}
    //   />
    //   <Screen name="Cart" component={Cart} />

    // </Navigator>
    <Stack.Navigator
      initialRouteName="Opening"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Opening" component={Opening} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home-Tab" component={AppRoutes} />
      <Stack.Screen
        name="PizzaDetails"
        component={PizzaDetails}
        screenOption={{
          gestureEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return { cardStyle: { opacity: progress } };
          },
          transitionSpec: {
            open: { animation: "timing", config: { duration: 1000 } },
            close: { animation: "timing", config: { duration: 1000 } },
          },
          useNativeDriver: true,
        }}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === "Search" || showing) {
            const { item } = route.params;
            return [
        
                `item.${item.id}.${item.name}`,
              
             
            ];
          }
        }}
        // screenOptions={() => options}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CartPayment" component={CartPayment} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}
