import React from "react";
import { View, Text, Image } from "react-native";
import { Banner, Container, Header, HeaderCenter, HeaderWrapper } from "./styles";
import Pin from "../../assets/location-pin.svg";
import { Txt } from "../Opening/styles";
import ButtonWrapper from "../../components/ButtonWrapper";
import BannerImg from '../../assets/frete-img.svg'

export default function Home() {
  return (
    <Container>
        <HeaderWrapper>
        <Header>
        <Pin/>
        <HeaderCenter>
            <Txt margin bold  size="h2" color='black'  position="left">
                Casa
            </Txt>
            <Txt margin bold   color='gray' position="left">242 ST Marks Eve, Finland </Txt>
            
            </HeaderCenter>  
            <ButtonWrapper Icon={<Pin/>} />
      </Header>
      <Banner>
        <BannerImg width={'100%'} height={'100%'} />
      </Banner>
        </HeaderWrapper>
        <Header>
            
        </Header>
    
    </Container>
  );
}
