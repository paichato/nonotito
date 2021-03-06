import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFocusEffect } from "@react-navigation/native";

export default function Opening({ navigation }) {
  const [clicked, setClicked] = useState(false);
  const [focus, setFocus] = useState(false);
  const [next, setNext] = useState(false);

  const handleFocus = () => {
    if (!focus) setFocus(true);
  };

  const handleUnFocus = () => {
    // Keyboard.dismiss();
    setFocus(false);
  };

  const handleCEP = () => {
    console.log("here");

    setClicked(true);
  };

  const handleConfirm = () => {
    setNext(true);
    setTimeout(() => {
      navigation.navigate("Home-Tab");
    }, 200);
    // navigation.navigate("Home-Tab");
  };

  useFocusEffect(
    useCallback(() => {
      setNext(false);
    }, [])
  );

  return (
    <TouchableWithoutFeedback
    //  onPress={handleUnFocus}
    >
      <Animatable.View
        duration={200}
        animation={next && "fadeOutUp"}
        style={{ flex: 1 }}
        useNativeDriver
      >
        <Container
          source={
            next
              ? require("../../assets/bg-white.png")
              : require("../../assets/bg.png")
          }
        >
          <KeyboardAvoidingView
            // enabled={false}
            keyboardVerticalOffset={Platform.OS === "ios" ? 10 : -10}
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Animatable.View
            useNativeDriver
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              animation={!clicked ? "pulse" : "slideInUp"}
            >
              <>{!focus && <Logo />}</>
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
                useNativeDriver
                  style={{ width: "100%" }}
                  animation={!clicked ? "fadeIn" : "fadeOut"}
                >
                  <TouchableOpacity>
                    <Txt>N??o sabe o seu CEP?</Txt>
                  </TouchableOpacity>
                </Animatable.View>
              </>
            )}

            {clicked && (
              <RegisterContainer>
                {!focus && (
                  <Animatable.View animation="fadeInDown">
                    <AddressHeader>
                      <IconWrapper>
                        <Pin />
                      </IconWrapper>
                      <></>
                      <AddressWrapper>
                        <Txt color="white" position="left">
                          Rua Tr??s de Maio, 50 - Jardim Olavo Bilac S??o Bernardo
                          do Campo - SP 09725-810 - Brazil
                        </Txt>
                      </AddressWrapper>
                    </AddressHeader>
                  </Animatable.View>
                )}
                <Animatable.View
                  useNativeDriver
                  animation="fadeInLeft"
                  delay={100}
                >
                  <Txt position="left" color="white">
                    Endere??o
                  </Txt>
                </Animatable.View>
                <Animatable.View useNativeDriver animation="zoomIn" delay={100}>
                  <TxtInput
                    // onPressOut={handleUnFocus}
                    onFocus={handleFocus}
                    onSubmitEditing={handleUnFocus}
                  />
                </Animatable.View>
                <Animatable.View
                  useNativeDriver
                  animation="fadeInLeft"
                  delay={300}
                >
                  <Txt position="left" color="white">
                    Bairro
                  </Txt>
                </Animatable.View>
                <Animatable.View useNativeDriver animation="zoomIn" delay={300}>
                  <TxtInput
                    onFocus={handleFocus}
                    onSubmitEditing={handleUnFocus}
                  />
                </Animatable.View>
                <AddressHeader>
                  <View style={{ width: "48%", marginTop: 30 }}>
                    <Animatable.View
                      useNativeDriver
                      animation="fadeInLeft"
                      delay={500}
                    >
                      <Txt position="left" color="white">
                        N??mero
                      </Txt>
                    </Animatable.View>
                    <Animatable.View
                      useNativeDriver
                      animation="zoomIn"
                      delay={500}
                    >
                      <TxtInput
                        onFocus={handleFocus}
                        onSubmitEditing={handleUnFocus}
                      />
                    </Animatable.View>
                  </View>
                  <View style={{ width: "48%", marginTop: 30 }}>
                    <Animatable.View
                      useNativeDriver
                      animation="fadeInRight"
                      delay={700}
                    >
                      <Txt position="left" color="white">
                        Complemento
                      </Txt>
                    </Animatable.View>
                    <Animatable.View
                      useNativeDriver
                      animation="zoomIn"
                      delay={700}
                    >
                      <TxtInput
                        onFocus={handleFocus}
                        onSubmitEditing={handleUnFocus}
                      />
                    </Animatable.View>
                  </View>
                </AddressHeader>
                <>
                  <Animatable.View
                    useNativeDriver
                    animation="slideInUp"
                    delay={1000}
                  >
                    <RegisterButton onPress={handleConfirm}>
                      <Txt color="white">Fazer Pedido</Txt>
                    </RegisterButton>
                  </Animatable.View>
                </>
              </RegisterContainer>
            )}
          </KeyboardAvoidingView>
        </Container>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}
