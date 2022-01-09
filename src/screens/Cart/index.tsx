import React from "react";
import { View, Text } from "react-native";
import ButtonWrapper from "../../components/ButtonWrapper";
import MainHeader from "../../components/MainHeader";
import { Banner, BannerLeft, Container, CupomContainer, MainContainer, PizzaDetails, PizzaImage, PizzaWrapper, SubTotalWrapper } from "./styles";
import BackIcon from "../../assets/back.svg";
import { Txt } from "../Opening/styles";

import { SharedElement } from "react-navigation-shared-element";

export default function Cart({navigation}) {

  const handleGoBack = () => {
    navigation.goBack();
  };

  const cart = [
    {
      id: 0,
      name: "Marguerita",
      price: "47,50",
      img: require("../../assets/pizzas/pizza.png"),
    },
    {
      id: 1,
      name: "Guaraná",
      price: "10,00",
      img: require("../../assets/refris/refri4.png"),
    },
  ];


  const handleItemSelect = (id) => {
    // const selectedData = popularPizzas.filter((item) => item.id === id);
    // navigation.navigate("PizzaDetails", { item: selectedData[0] });
    console.log(id);
    
  };

  const CartItem=({item})=>{
    return (
<PizzaWrapper
                  onPress={() => handleItemSelect(item.id)}
                  
                >
                  
                    <PizzaImage
                      style={{ resizeMode: "cover", width: "25%", height: "100%" }}
                      resizeMode="contain"
                      source={item.img}
                      // source={require('../../assets/pizzas/pizza6.jpg')}
                    />
                

                  <PizzaDetails style={{width:'40%'}}>
                    <Txt position="left" margin color="blue" bold>
                      {/* Marguerita */}
                      {item.name}
                    </Txt>
                  
                  </PizzaDetails  >
                  
                    <Txt margin color="blue" bold>
                      R$ {item.price}
                    </Txt>
                   
                </PizzaWrapper>
    )
  }

  return (
    <Container source={require('../../assets/bg-white.png')} >
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
        {cart.map((item)=>{
          return(
            <CartItem item={item} />
          )

        })
          
        }

        <CupomContainer>
          <Txt margin color='blue' bold >
            Cupom
          </Txt>
          <Txt margin color='white'size='h1'>+</Txt>
        </CupomContainer>
        <SubTotalWrapper>
        <Txt margin color='white'  >
            Subtotal
          </Txt>
          <Txt margin color='white'  >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <SubTotalWrapper>
        <Txt margin color='white'  >
            Subtotal
          </Txt>
          <Txt margin color='white'  >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <SubTotalWrapper>
        <Txt margin color='white'  >
            Subtotal
          </Txt>
          <Txt margin color='white'  >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <SubTotalWrapper>
        <Txt margin color='blue' bold >
            Subtotal
          </Txt>
          <Txt margin color='blue' bold size='h2' >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        
      </MainContainer>
    </Container>
  );
}
