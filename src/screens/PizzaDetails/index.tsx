import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  CategoryWrapper,
  DetailsCenter,
  DetailsContainer,
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
import { color } from "react-native-reanimated";
import colors from "../../lib/colors";

export default function PizzaDetails() {
  const names = [
    { id: 0, name: "Pequena" },
    { id: 1, name: "Media" },
    { id: 2, name: "Grande" },
  ];

  const [selected, setSelected] = useState({ id: 0, selected: true });

  const handleCategorySelect = (id) => {
    setSelected({ id: id });
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <Image
        style={{
          width: "100%",
          height: "50%",
          resizeMode: "cover",
          alignSelf: "flex-start",
          top: 0,
        }}
        source={require("../../assets/pizzas/pizza4.jpg")}
      />
      <Main>
        <Header>
          <ButtonWrapper Icon={<BackIcon />} />
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
              <ButtonWrapper Icon={<PlusIcon />} />
              <Txt bold size={"h2"} color={"blue"}>
                1
              </Txt>
              <ButtonWrapper Icon={<MinusIcon />} />
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
                  color={selected.id === item.id ? colors.bg_white : 'gray'}
                >
                  {item.name}
                </Txt>
              </CategoryWrapper>
            )}
            data={names}
            contentContainerStyle={{
              width: "100%",
              paddingHorizontal: "5%",
              alignItems: "center",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          ></SizeSelectContainer>
        </DetailsContainer>
      </Main>
    </View>
  );
}
