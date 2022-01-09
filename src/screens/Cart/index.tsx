import React from "react";
import { View, Text } from "react-native";
import ButtonWrapper from "../../components/ButtonWrapper";
import MainHeader from "../../components/MainHeader";
import { Banner, BannerLeft, Container, MainContainer } from "./styles";
import BackIcon from "../../assets/back.svg";
import { Txt } from "../Opening/styles";

export default function Cart({navigation}) {

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <MainHeader>
      <ButtonWrapper action={handleGoBack} Icon={<BackIcon />} />
          <Txt
            // margin
            bold
            color={"blue"}
          >
            Carrinho
          </Txt>
          <Txt margin>        </Txt>
      </MainHeader>
      <MainContainer>
        <Banner>
          <BannerLeft>
          <Txt margin color='white' medium >
          Rua Três de Maio, 50
          </Txt>
          <Txt margin color='white' >
          Jardim Olavo Bilac
          </Txt>
          </BannerLeft>
          <Txt margin>
            >
          </Txt>

        </Banner>
      </MainContainer>
    </Container>
  );
}
