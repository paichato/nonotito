import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import {
  Banner,
  CategoriasTitleWrapper,
  CategoryContainer,
  CategoryWrapper,
  Container,
  Header,
  HeaderCenter,
  HeaderWrapper,
  PizzaAddButton,
  PizzaContainer,
  PizzaDetails,
  PizzaImage,
  PizzaWrapper,
  Spacer,
} from "./styles";
import Pin from "../../assets/location-pin.svg";
import { Txt } from "../Opening/styles";
import ButtonWrapper from "../../components/ButtonWrapper";
import BannerImg from "../../assets/frete2.svg";
import HeartIcon from "../../assets/heart.svg";
import PizzaIcon from "../../assets/pizza-icon.svg";
import VegIconYellow from "../../assets/vegs-yellow.svg";
import VegIcon from "../../assets/vegs.svg";
import BebidasIconYellow from "../../assets/bebidas-yellow.svg";
import BebidasIcon from "../../assets/bebidas.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../lib/colors";
import FilterIcon from "../../assets/filter.svg";
import PlusIcon from "../../assets/plus.svg";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  let startAncestor;
  let startNode;
  const names = [
    { id: 0, name: "Pizzas" },
    { id: 1, name: "Vegs" },
    { id: 2, name: "Bebidas" },
  ];

  const popularPizzas = [
    {
      id: 0,
      name: "Marguerita",
      price: "47,50",
      img: require("../../assets/pizzas/pizza.png"),
    },
    {
      id: 1,
      name: "Milho",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },
  ];

  const popularRefris = [
    {
      id: 0,
      name: "H2O Limão",
      price: "5,50",
      img: require("../../assets/refris/refri1.png"),
    },
    {
      id: 1,
      name: "Guaraná",
      price: "10,00",
      img: require("../../assets/refris/refri4.png"),
    },
  ];

  const [selected, setSelected] = useState({ id: 0, selected: true });

  const navigation = useNavigation();

  const handleItemSelect = (id) => {
    const selectedData = popularPizzas.filter((item) => item.id === id);
    navigation.navigate("PizzaDetails", { item: selectedData[0] });
  };

  const CatItem = ({ id }) => {
    return (
      <Animatable.View duration={150} animation="lightSpeedIn">
        <CategoryWrapper
          onPress={() => handleCategorySelect(id)}
          selected={selected.id === id}
        >
          {id === 0 ? (
            <PizzaIcon
              fill={selected.id === id ? "#C49753" : colors.unselected}
            />
          ) : id === 1 ? (
            selected.id === id ? (
              <VegIconYellow />
            ) : (
              <VegIcon fill="#C49753" />
            )
          ) : id === 2 ? (
            selected.id === id ? (
              <BebidasIconYellow />
            ) : (
              <BebidasIcon fill="#C49753" />
            )
          ) : null}
          <Txt
            margin
            bold
            color={selected.id === id ? colors.secondary : "gray"}
          >
            {names[id].name}
          </Txt>
        </CategoryWrapper>
      </Animatable.View>
    );
  };

  const handleCategorySelect = (id) => {
    setSelected({ id: id });
  };

  return (
    <Animatable.View
      // ref={(ref) => (startAncestor = nodeFromRef(ref))}
      useNativeDriver
      style={{ flex: 1 }}
      animation="fadeInUp"
    >
      <Container>
        <HeaderWrapper>
          <Header>
            <Pin />
            <HeaderCenter>
              <Txt margin bold size="h2" color="black" position="left">
                Casa
              </Txt>
              <Txt margin bold color="gray" position="left">
                242 ST Marks Eve, Finland{" "}
              </Txt>
            </HeaderCenter>
            <ButtonWrapper Icon={<HeartIcon />} />
          </Header>

          <Banner activeOpacity={0.99}>
            <Animatable.View
              useNativeDriver
              duration={300}
              delay={500}
              style={{ flex: 1, width: "100%" }}
              animation="fadeIn"
            >
              <BannerImg width={"100%"} height={"100%"} />
            </Animatable.View>
          </Banner>
        </HeaderWrapper>

        <CategoriasTitleWrapper>
          <Txt color="black" size="h1" bold>
            Categorias
          </Txt>
          <TouchableOpacity onPress={() => console.log("hello")}>
            <Txt medium>Veja tudo</Txt>
          </TouchableOpacity>
        </CategoriasTitleWrapper>
        <Spacer />
        {/* <CategoryContainer
        data={names}
        horizontal
        contentSyle
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryWrapper>
            <Pin />
            <Txt>{item.name}</Txt>
          </CategoryWrapper>
        )}
      /> */}
        <CategoryContainer>
          {/* <CategoryWrapper selected>
        <PizzaIcon  fill="#C49753" />
        <Txt margin bold >{names[0].name}</Txt>
      </CategoryWrapper>
      <CategoryWrapper>
        <VegIcon fill={"red"} />
        <Txt margin bold >{names[1].name}</Txt>
      </CategoryWrapper>
      <CategoryWrapper>
        <BebidasIcon />
        <Txt margin bold >{names[2].name}</Txt>
      </CategoryWrapper> */}
          {names.map((item) => (
            <CatItem id={item.id} />
          ))}
        </CategoryContainer>

        <Animatable.View useNativeDriver animation="fadeInUp">
          <CategoriasTitleWrapper>
            <Txt color="black" size="h2" bold>
              Mais populares
            </Txt>
            <TouchableOpacity onPress={() => console.log("hello")}>
              <FilterIcon />
            </TouchableOpacity>
          </CategoriasTitleWrapper>
        </Animatable.View>
        <Spacer />
        <PizzaContainer
          data={selected.id === 0 ? popularPizzas : popularRefris}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                useNativeDriver
                delay={index * 300}
                animation="fadeInRight"
              >
                <PizzaWrapper
                  onPress={() => handleItemSelect(item.id)}
                  key={item}
                >
                  <SharedElement
                    id={`item.${item.id}.${item.name}`}
                    style={{ width: "25%" }}
                    // onNode={(node) => (startNode = node)}
                  >
                    <PizzaImage
                      style={{ resizeMode: "cover" }}
                      resizeMode="cover"
                      source={item.img}
                      // source={{uri:item.img}}
                    />
                  </SharedElement>

                  <PizzaDetails>
                    <Txt position="left" margin color="blue" bold>
                      {item.name}
                    </Txt>
                    <Txt position="left" margin color="gray" bold>
                      R$ {item.price}
                    </Txt>
                  </PizzaDetails>
                  <PizzaAddButton>
                    <Txt margin color="blue" bold>
                      Add
                    </Txt>
                    <PlusIcon />
                  </PizzaAddButton>
                </PizzaWrapper>
              </Animatable.View>
            );
          }}
        />
      </Container>
    </Animatable.View>
  );
}
