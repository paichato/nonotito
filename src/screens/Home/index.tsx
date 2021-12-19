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
} from "./styles";
import Pin from "../../assets/location-pin.svg";
import { Txt } from "../Opening/styles";
import ButtonWrapper from "../../components/ButtonWrapper";
import BannerImg from "../../assets/frete-img.svg";
import HeartIcon from "../../assets/heart.svg";
import PizzaIcon from "../../assets/pizza-icon.svg";
import VegIconYellow from "../../assets/vegs-yellow.svg";
import VegIcon from "../../assets/vegs.svg";
import BebidasIconYellow from "../../assets/bebidas-yellow.svg";
import BebidasIcon from "../../assets/bebidas.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../lib/colors";

export default function Home() {
  const names = [
    { id: 0, name: "Pizzas" },
    { id: 1, name: "Vegs" },
    { id: 2, name: "Bebidas" },
  ];
  const [selected, setSelected] = useState({ id: 0, selected: true });

  const CatItem = ({ id }) => {
    return (
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
        ) : id === 2 ? selected.id === id ? <BebidasIconYellow/> : (
          <BebidasIcon fill="#C49753" />
        ) : null}
        <Txt margin bold color={selected.id === id ? colors.secondary : "gray"}>
          {names[id].name}
        </Txt>
      </CategoryWrapper>
    );
  };

  const handleCategorySelect = (id) => {
    setSelected({ id: id });
  };

  return (
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
        <Banner>
          <BannerImg width={"100%"} height={"100%"} />
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
    </Container>
  );
}
