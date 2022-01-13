import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import {
  CartButton,
  CategoryWrapper,
  DetailsCenter,
  DetailsContainer,
  DetailsFooter,
  DetailsHeader,
  DetailsHeaderColumn,
  DetailsTextContainer,
  Divider,
  Header,
  Main,
  SizeSelectContainer,
} from "./styles";
import HeartIcon from "../../assets/heart.svg";
import BackIcon from "../../assets/back.svg";
import PlusIcon from "../../assets/plus.svg";
import MinusIcon from "../../assets/minus.svg";
import ButtonWrapper from "../../components/ButtonWrapper";
import { Txt } from "../Opening/styles";
import Animated, { color } from "react-native-reanimated";
import colors from "../../lib/colors";

import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";
import MainHeader from "../../components/MainHeader";
import * as Animatable from "react-native-animatable";

const PizzaDetails = ({ route }) => {
  const navigation = useNavigation();
  let endAncestor;
  let endNode;

  const { item } = route.params;

  const names = [
    { id: 0, name: "Pequena" },
    { id: 1, name: "Media" },
    { id: 2, name: "Grande" },
  ];

  const [selected, setSelected] = useState({ id: 0, selected: true });
  const [quantity, setQuantity] = useState(1);

  const handleCategorySelect = (id) => {
    setSelected({ id: id });
  };

  const handleQtIncrement = () => {
    setQuantity((oldState) => oldState + 1);
  };

  const handleQtDecrement = () => {
    setQuantity((oldState) => (oldState > 1 ? oldState - 1 : oldState));
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCart = () => {
    navigation.navigate("Cart");
  };

  useEffect(() => {
    console.log(item);
  }, []);

  const position = new Animated.Value(0);

  return (
    <View
      // ref={(ref) => (endAncestor = nodeFromRef(ref))}
      style={{ flex: 1, height: "100%" }}
    >
      <SharedElement id={`item.${item.id}.${item.name}`}>
        <Image
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "cover",
            alignSelf: "flex-start",
            borderRadius: 10,
            top: 0,
          }}
          // source={require("../../assets/pizzas/pizza4.jpg")}
          //   source={{ uri: product.img }}
          source={item.img}
        />
      </SharedElement>

      <Main>
        <Animatable.View useNativeDriver duration={1000} animation="slideInDown">
          <MainHeader>
            <ButtonWrapper action={handleGoBack} Icon={<BackIcon />} />
            <Txt
              // margin
              bold
              color={"white"}
              style={{ color: colors.grad1 }}
            >
              {item.name}
            </Txt>
            <ButtonWrapper Icon={<HeartIcon />} />
          </MainHeader>
        </Animatable.View>
        <Animatable.View useNativeDriver duration={2800} animation="slideInUp">
          <DetailsContainer>
          <Animatable.View delay={500} duration={1000} animation="fadeIn">
            <DetailsHeader>
              <DetailsHeaderColumn>
                <Txt size="h2" margin bold color={"blue"}>
                  228
                </Txt>
                <Txt
                  margin
                  // bold
                  color={"gray"}
                >
                  Calorias
                </Txt>
              </DetailsHeaderColumn>

              <Divider />
              <DetailsHeaderColumn>
                <Txt size="h2" margin bold color={"blue"}>
                  20 Min
                </Txt>
                <Txt
                  margin
                  // bold
                  color={"gray"}
                >
                  Entrega
                </Txt>
              </DetailsHeaderColumn>
            </DetailsHeader>
            </Animatable.View>
            <DetailsCenter>
            <Animatable.View  delay={500} duration={1000} animation="fadeIn">
              <DetailsHeaderColumn>
                <ButtonWrapper action={handleQtIncrement} Icon={<PlusIcon />} />
                <Animatable.View useNativeDriver delay={800} duration={1000} animation="flipInX">
                  <Txt bold size={"h2"} color={"blue"}>
                    {quantity}
                  </Txt>
                </Animatable.View>
                <ButtonWrapper
                  action={handleQtDecrement}
                  Icon={<MinusIcon />}
                />
              </DetailsHeaderColumn>
              </Animatable.View>
              <Animatable.View useNativeDriver style={{width:'70%'}} delay={500} duration={1000} animation="fadeIn">
              <DetailsTextContainer>
                <Txt
                  margin
                  position="left"
                  // bold
                  // size={'h1'}
                  color={"gray"}
                >
                  Pizza com molho de tomate, duas camadas da melhor mussarela da
                  cidade e oregano.
                </Txt>
              </DetailsTextContainer>
              </Animatable.View>
            </DetailsCenter>
            <SizeSelectContainer
              renderItem={({ item }) => (
                <Animatable.View useNativeDriver delay={1000} duration={1000} animation="flipInX">
                <CategoryWrapper
                  selected={selected.id === item.id}
                  onPress={() => handleCategorySelect(item.id)}
                >
                  <Txt
                    margin
                    color={selected.id === item.id ? colors.bg_white : "gray"}
                  >
                    {item.name}
                  </Txt>
                </CategoryWrapper>
                </Animatable.View>
              )}
              data={names}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                width: "100%",
                paddingHorizontal: "5%",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            ></SizeSelectContainer>
            <Animatable.View useNativeDriver delay={1200} duration={1000} animation="slideInUp">
            <DetailsFooter>
              <CartButton onPress={handleCart}>
                <>
                  <Txt margin color="white">
                    + Carrinho
                  </Txt>
                </>
              </CartButton>
              <Txt margin color="blue" bold size="h1">
                R${" "}
                {String(
                  Number(item.price.replace(/,/g, ".")) * quantity
                ).replace(/\./g, ",")}
              </Txt>
            </DetailsFooter>
            </Animatable.View>
          </DetailsContainer>
        </Animatable.View>
      </Main>
    </View>
  );
};

PizzaDetails.SharedElement = (route, otherRoute, showing) => {
  if (otherRoute.name === "Search" || showing || route.params) {
    const { item } = route.params;
    return [
      `item.${item.id}.${item.name}`,
      // animation: "move",
    ];
  }
};

export default PizzaDetails;
