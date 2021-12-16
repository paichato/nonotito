import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  AddressHeader,
  AddressWrapper,
  BigTitle,
  Container,
  IconWrapper,
  Input,
  InputContainer,
  RegisterButton,
  RegisterContainer,
  Txt,
  TxtInput,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import SearchIcon from "../../assets/Search.svg";
import colors from "../../lib/colors";
import * as Animatable from "react-native-animatable";
import Pin from "../../assets/location-pin.svg";

export default function Opening() {
  const [clicked, setClicked] = useState(false);

  const handleCEP = () => {
    console.log("here");

    setClicked(true);
  };

  return (
    <Container source={require("../../assets/bg.png")}>
      <Animatable.View animation={!clicked ? "pulse" : "slideInUp"}>
        <Logo />
      </Animatable.View>
      {!clicked && (
        <>
          <Animatable.View
            style={{ width: "100%" }}
            animation={!clicked ? "fadeInUp" : "fadeOutRightBig"}
          >
            <BigTitle>Aonde deseja{"\n"} pedir hoje?</BigTitle>
            <Txt color="white">Digite o CEP de entrega</Txt>
          </Animatable.View>
          <Animatable.View
            style={{ width: "100%" }}
            animation={!clicked ? "zoomIn" : "zoomOut"}
          >
            <InputContainer activeOpacity={1} onPress={handleCEP}>
              <>
                <Input
                  selectionColor={colors.secondary}
                  inlineImageLeft="../../assets/buscar.png"
                />
                <SearchIcon />
              </>
            </InputContainer>
          </Animatable.View>
          <Animatable.View
            style={{ width: "100%" }}
            animation={!clicked ? "fadeIn" : "fadeOut"}
          >
            <TouchableOpacity>
              <Txt>Não sabe o seu CEP?</Txt>
            </TouchableOpacity>
          </Animatable.View>
        </>
      )}

      {clicked && (
        <RegisterContainer>
          <Animatable.View animation="fadeInDown">
            <AddressHeader>
              <IconWrapper>
                <Pin />
              </IconWrapper>

              <AddressWrapper>
                <Txt color="white" position="left">
                  Rua Três de Maio, 50 - Jardim Olavo Bilac São Bernardo do
                  Campo - SP 09725-810 - Brazil
                </Txt>
              </AddressWrapper>
            </AddressHeader>
          </Animatable.View>
          <Animatable.View useNativeDriver animation="fadeInLeft" delay={100}>
            <Txt position="left" color="white">
              Endereço
            </Txt>
          </Animatable.View>
          <Animatable.View useNativeDriver animation="zoomIn" delay={100}>
            <TxtInput />
          </Animatable.View>
          <Animatable.View useNativeDriver animation="fadeInLeft" delay={300}>
            <Txt position="left" color="white">
              Bairro
            </Txt>
          </Animatable.View>
          <Animatable.View useNativeDriver animation="zoomIn" delay={300}>
            <TxtInput />
          </Animatable.View>
          <AddressHeader>
            <View style={{ width: "48%", marginTop: 24 }}>
              <Animatable.View
                useNativeDriver
                animation="fadeInLeft"
                delay={500}
              >
                <Txt position="left" color="white">
                  Número
                </Txt>
              </Animatable.View>
              <Animatable.View useNativeDriver animation="zoomIn" delay={500}>
                <TxtInput />
              </Animatable.View>
            </View>
            <View style={{ width: "48%", marginTop: 24 }}>
              <Animatable.View
                useNativeDriver
                animation="fadeInRight"
                delay={700}
              >
                <Txt position="left" color="white">
                  Complemento
                </Txt>
              </Animatable.View>
              <Animatable.View useNativeDriver animation="zoomIn" delay={700}>
                <TxtInput />
              </Animatable.View>
            </View>
          </AddressHeader>
          <Animatable.View useNativeDriver animation="slideInUp" delay={1000}>
            <RegisterButton>
              <Txt color="white">Fazer Pedido</Txt>
            </RegisterButton>
          </Animatable.View>
        </RegisterContainer>
      )}
    </Container>
  );
}
