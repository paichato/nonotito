import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DetailsContainer,
  DetailsHeader,
  DetailsHeaderColumn,
  Divider,
  Header,
  Main,
} from "./styles";
import HeartIcon from "../../assets/heart.svg";
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
          <ButtonWrapper Icon={<HeartIcon />} />
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
              <Txt margin bold color={"blue"}>
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
              <Txt margin bold color={"blue"}>
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
        </DetailsContainer>
      </Main>
    </View>
  );
}
