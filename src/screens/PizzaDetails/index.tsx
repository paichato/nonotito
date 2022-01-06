import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DetailsCenter,
  DetailsContainer,
  DetailsHeader,
  DetailsHeaderColumn,
  DetailsTextContainer,
  Divider,
  Header,
  Main,
} from "./styles";
import HeartIcon from "../../assets/heart.svg";
import BackIcon from "../../assets/back.svg";
import PlusIcon from "../../assets/plus.svg";
import MinusIcon from "../../assets/minus.svg";
import ButtonWrapper from "../../components/ButtonWrapper";
import { Txt } from "../Opening/styles";

export default function PizzaDetails() {
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
              <Txt margin bold size={"h1"} color={"blue"}>
                1
              </Txt>
              <ButtonWrapper Icon={<MinusIcon />} />
            </DetailsHeaderColumn>
            <DetailsTextContainer>
              <Txt
                margin
                position='left'
                // bold
                // size={'h1'}
                color={"gray"}
              >
                Pizza com molho de tomate, duas camadas da melhor mussarela da
                cidade e oregano.
              </Txt>
            </DetailsTextContainer>
          </DetailsCenter>
        </DetailsContainer>
      </Main>
    </View>
  );
}
