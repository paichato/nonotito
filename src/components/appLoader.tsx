import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Container, Txt } from "../screens/Opening/styles";
import Logo from "../assets/Logo.svg";
import * as Animatable from "react-native-animatable";

export default function AppLoader() {
  const [takingLong, setTakingLong] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTakingLong(true);
    }, 2000);
  }, []);

  return (
    <Container source={require("../assets/bg.png")}>
      <Animatable.View
        useNativeDriver
        // duration={500}
        iterationCount="infinite"
        animation="pulse"
        // direction="alternate"
      >
        <Animatable.View
          useNativeDriver
          duration={2000}
          iterationCount="infinite"
          animation="flash"
          // direction="alternate"
        >
          <Logo />
        </Animatable.View>
      </Animatable.View>
      {/* {takingLong && (
        <Animatable.View
          useNativeDriver
          // duration={500}
          // iterationCount="infinite"
          animation="fadeInUp"
          // direction="alternate"
        >
          <Txt>Carregando...</Txt>
        </Animatable.View>
      )} */}
    </Container>
  );
}
