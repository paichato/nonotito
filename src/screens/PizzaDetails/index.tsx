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

import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";
import { useNavigation } from "@react-navigation/native";

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
    setQuantity((oldState) => oldState - 1);
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
      ref={(ref) => (endAncestor = nodeFromRef(ref))}
      style={{ flex: 1, height: "100%" }}
    >
     
      <SharedElement resize='clip' animation='fade' id={item.id} >
        <Image
          style={{
            width: "100%",
            height: "70%",
            resizeMode: "cover",
            alignSelf: "flex-start",
            top: 0,
          }}
          // source={require("../../assets/pizzas/pizza4.jpg")}
          //   source={{ uri: product.img }}
          source={item.img}
        />
      </SharedElement>

      <Main>
        <Header>
          <ButtonWrapper action={handleGoBack} Icon={<BackIcon />} />
          <Txt
            // margin
            bold
            color={"white"}
          >
            Marguerita
          </Txt>
          <ButtonWrapper Icon={<HeartIcon />} />
        </Header>
        <DetailsContainer>
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
          <DetailsCenter>
            <DetailsHeaderColumn>
              <ButtonWrapper action={handleQtIncrement} Icon={<PlusIcon />} />
              <Txt bold size={"h2"} color={"blue"}>
                {quantity}
              </Txt>
              <ButtonWrapper action={handleQtDecrement} Icon={<MinusIcon />} />
            </DetailsHeaderColumn>
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
          </DetailsCenter>
          <SizeSelectContainer
            renderItem={({ item }) => (
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
          <DetailsFooter>
            <CartButton onPress={handleCart}>
              <>
                <Txt margin color="white">
                  + Carrinho
                </Txt>
              </>
            </CartButton>
            <Txt margin color="blue" bold size="h1">
              R$ 47,50
            </Txt>
          </DetailsFooter>
        </DetailsContainer>
      </Main>
    </View>
  );
};

PizzaDetails.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: item.id,
      animation: "move",
      resize: "clip",
    },
  ];
};

export default PizzaDetails;
