import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import ButtonWrapper from "../../components/ButtonWrapper";
import MainHeader from "../../components/MainHeader";
import { AddMoreContainer, AddMoreWrapper, Banner, BannerLeft, Container, CupomContainer, Divider, Footer, FooterButton, MainContainer, PaymentLeft, PaymentRight, PaymentTypeWrapper, PizzaDetails, PizzaImage, PizzaWrapper, SubTotalWrapper } from "./styles";
import BackIcon from "../../assets/back.svg";
import { Txt } from "../Opening/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Dots from '../../assets/dots.svg'

import { SharedElement } from "react-navigation-shared-element";

export default function Cart({navigation}) {

  const [selectedPayment,setSelectedPayment]=useState();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelectPayment=(id)=>{
    if(selectedPayment ===id){
      setSelectedPayment(null);
    }else{
      setSelectedPayment(id);
    }
    
  }

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

  const cards = [
    {
      id: 0,
      name: "Elo - Débito",
      number: "2445",
      img: require("../../assets/card1.png"),
    },
    {
      id: 1,
      name: "Hipercard - Crédito",
      price: "2445",
      img: require("../../assets/card2.png"),
    },
    {
      id: 1,
      name: "Dinheiro",
      price: "R$ 59,90",
      img: require("../../assets/card3.png"),
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
                      style={{ resizeMode: "contain", width: "20%", height: "100%" }}
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

  const PaymentItem=({cards})=>{
    return(
      <PaymentTypeWrapper onPress={()=>handleSelectPayment(cards.id)} selected={selectedPayment===cards.id}>
          <PaymentLeft>
            <Image style={{resizeMode:'contain', width: '20%', height: '100%'}} source={require('../../assets/card1.png')}  />
            <View style={{flexDirection:'column', alignItems: 'center', justifyContent: 'center'}} >
              <Txt margin color='blue' >{cards.name}</Txt>
              <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}} >
                <Dots height={'20%'}/>
              <Txt margin color='gray' >{cards.number}</Txt>
              </View>
            </View> 
          </PaymentLeft>
          <PaymentRight>
            <Dots/>
          </PaymentRight>
        </PaymentTypeWrapper>
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
      <MainContainer contentContainerStyle={{height:hp('70%'),width:'100%',paddingHorizontal:wp('5%'),alignItems:'center', justifyContent:'center'}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%',width:'100%'}} contentContainerStyle={{height:'200%',width:'100%'}} >

        
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
        Desconto
          </Txt>
          <Txt margin color='white'  >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <SubTotalWrapper>
        <Txt margin color='white'  >
        Taxa de Entrega
          </Txt>
          <Txt margin color='white'  >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <SubTotalWrapper>
        <Txt margin color='blue' bold >
            Total
          </Txt>
          <Txt margin color='blue' bold size='h2' >
          R$ 57,50
          </Txt>
        </SubTotalWrapper>
        <Divider/>
        <Txt style={{fontSize:hp(1.4), marginTop:5}} margin medium>
        Adicionar mais itens
        </Txt>
        <Txt style={{alignSelf: 'flex-start'}} color='blue'  position='left'  bold>
        Peça também
        </Txt>
        <AddMoreContainer>
          <AddMoreWrapper style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: '100%', height: '70%', resizeMode:'contain'}} source={require('../../assets/refris/refri1.png')} />
            <Txt bold margin color='white'style={{fontSize:hp(1.4)}}>H20 Limão</Txt>
          </AddMoreWrapper>
          <AddMoreWrapper style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: '100%', height: '70%', resizeMode:'contain'}} source={require('../../assets/refris/refri3.png')} />
            <Txt bold margin color='white' style={{fontSize:hp(1.4)}}>H20 Limão</Txt>
          </AddMoreWrapper>
          <AddMoreWrapper style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: '100%', height: '70%', resizeMode:'contain'}} source={require('../../assets/torta.png')} />
            <Txt bold margin color='white' style={{fontSize:hp(1.4)}} >Torta de Limão</Txt>
          </AddMoreWrapper>
        </AddMoreContainer>

        <Txt color='blue'  position='left'  bold>Pagamento</Txt>
        
        </ScrollView>
      </MainContainer>
      <Footer style={{elevation:10}}>
        <FooterButton  >
          <Txt color='white' margin >Continuar</Txt>
        </FooterButton>
      </Footer>
    </Container>
  );
}
