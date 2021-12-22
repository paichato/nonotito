import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Platform } from "react-native";
import colors from "../lib/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeIcon from "../assets/Home.svg";
import SearchIcon from "../assets/Search.svg";
import RequestsIcon from "../assets/Bag.svg";
import ProfileIcon from "../assets/Profile.svg";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Requests from "../screens/Requests";
import Profile from "../screens/Profile";
import fonts from "../lib/fonts";

const { Screen, Navigator } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: colors.grad1,
        tabBarActiveBackgroundColor: colors.grad1,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderWidth: 0,
          height: Platform.OS === "ios" ? 88 : hp(10),
          padding: 0,
          elevation: 0,

          //   borderTopColor: colors.yellow,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.regular,
          //   paddingBottom: 10,
          fontSize: fonts.p,
          //   color: "red",
        },
        tabBarItemStyle:
          Platform.OS === "ios"
            ? { paddingVertical: hp(0.5) }
            : { paddingVertical: hp(1.5) },
      }}
      tabBarOptions={{
        activeTintColor: colors.secondary,

        inactiveTintColor: colors.unselected,
        labelPosition: "bellow-icon",
        // tabBarLabelStyle: {
        //   fontFamily: fonts.regular,
        //   padding: 0,
        //   fontSize: fonts.h1,
        //   color: "red",
        // },

        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
          borderWidth: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <HomeIcon stroke={color} size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SearchIcon size={size} stroke={color} />
          ),
        }}
      />
      <Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: ({ size, color }) => (
            <RequestsIcon size={size} stroke={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <ProfileIcon size={size} stroke={color} />
          ),
        }}
      />
      {/* <Screen name="MovieDetails" component={MoviesDetails} /> */}
    </Navigator>
  );
}
