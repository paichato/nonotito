import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container, Input, InputContainer } from "./styles";
import SearchIcon from "../../assets/Search.svg";
import colors from "../../lib/colors";
import {
  CategoriasTitleWrapper,
  CategoryContainer,
  CategoryWrapper,
  PizzaAddButton,
  PizzaContainer,
  PizzaDetails,
  PizzaImage,
  PizzaWrapper,
  Spacer,
} from "../Home/styles";
import { Txt } from "../Opening/styles";

import BannerImg from "../../assets/frete-img.svg";
import HeartIcon from "../../assets/heart.svg";
import PizzaIcon from "../../assets/pizza-icon.svg";
import VegIconYellow from "../../assets/vegs-yellow.svg";
import VegIcon from "../../assets/vegs.svg";
import BebidasIconYellow from "../../assets/bebidas-yellow.svg";
import BebidasIcon from "../../assets/bebidas.svg";
import FilterIcon from "../../assets/filter.svg";
import PlusIcon from "../../assets/plus.svg";
import * as Animatable from "react-native-animatable";

export default function Search() {
  const names = [
    { id: 0, name: "Pizzas" },
    { id: 1, name: "Vegs" },
    { id: 2, name: "Bebidas" },
  ];

  const popularPizzas = [
    {
      id: 0,
      name: "Americana",
      price: "45,00",
      img: require("../../assets/pizzas/pizza.png"),
    },
    {
      id: 1,
      name: "Alho e Oleo",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 2,
      name: "Apresuntada",
      price: "30,00",
      img: require("../../assets/pizzas/pizza3.png"),
    },

    {
      id: 3,
      name: "Bacon",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 4,
      name: "Calabresa",
      price: "30,00",
      img: require("../../assets/pizzas/pizza3.png"),
    },

    {
      id: 5,
      name: "Crocante",
      price: "30,00",
      img: require("../../assets/pizzas/pizza.png"),
    },

    {
      id: 6,
      name: "Escarola",
      price: "37,50",
      img: require("../../assets/pizzas/pizza3.png"),
    },

    {
      id: 7,
      name: "Frango",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 8,
      name: "Fran c/Catupiry",
      price: "37,50",
      img: require("../../assets/pizzas/pizza3.png"),
    },

    {
      id: 9,
      name: "Fran-milho",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 10,
      name: "Marguerita",
      price: "37,50",
      img: require("../../assets/pizzas/pizza.png"),
    },

    {
      id: 11,
      name: "Milho",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 12,
      name: "Mussarela",
      price: "37,50",
      img: require("../../assets/pizzas/pizza3.png"),
    },

    {
      id: 13,
      name: "Napolitana",
      price: "30,00",
      img: require("../../assets/pizzas/pizza1.png"),
    },

    {
      id: 14,
      name: "Tradicional",
      price: "37,50",
      img: require("../../assets/pizzas/pizza3.png"),
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
      name: "H2O Limoneto",
      price: "5,50",
      img: require("../../assets/refris/refri2.png"),
    },
    {
      id: 2,
      name: "Coca-cola",
      price: "5,50",
      img: require("../../assets/refris/refri3.png"),
    },
    {
      id: 3,
      name: "Guaraná",
      price: "10,00",
      img: require("../../assets/refris/refri4.png"),
    },
    {
      id: 4,
      name: "Pepsi",
      price: "10,00",
      img: require("../../assets/refris/refri5.png"),
    },
  ];

  const [selected, setSelected] = useState({ id: 0, selected: true });

  const handleSearch = () => {
    console.log("search");
  };

  const handleCategorySelect = (id) => {
    setSelected({ id: id });
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

  return (
    <Container>
      <InputContainer activeOpacity={1} onPress={handleSearch}>
        <>
          <Input
            selectionColor={colors.secondary}
            inlineImageLeft="../../assets/buscar.png"
          />
          <SearchIcon />
        </>
      </InputContainer>
      <CategoriasTitleWrapper>
        <Txt color="black" size="h1" bold>
          Categorias
        </Txt>
      </CategoriasTitleWrapper>
      <Spacer />
      <CategoryContainer>
        {names.map((item) => (
          <CatItem id={item.id} />
        ))}
      </CategoryContainer>
      <Spacer h={3} />
      <View style={{ flex: 1 }}>
        <PizzaContainer
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          data={selected.id === 0 ? popularPizzas : popularRefris}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                useNativeDriver
                delay={index * 300}
                animation="fadeInRight"
              >
                <PizzaWrapper key={item}>
                  <PizzaImage resizeMode="cover" source={item.img} />
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
      </View>
    </Container>
  );
}
