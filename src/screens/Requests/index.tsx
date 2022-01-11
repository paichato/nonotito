import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Txt } from "../Opening/styles";
import { Container } from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../lib/colors";
import { Divider } from "../Cart/styles";

export default function Requests({navigation}) {
  const Items = () => {
    return (
      <View style={{ flexDirection: "row", width: "100%", marginTop: hp(1) }}>
        <Txt
          bold
          style={{
            backgroundColor: colors.unselected_light,
            width: 25,
            borderRadius: 5,
          }}
          margin
          color="blue"
        >
          1
        </Txt>
        <Txt style={{ marginLeft: 5 }} medium margin color="white">
          Pizza de Marguerita (média)
        </Txt>
      </View>
    );
  };

  const handleProgress=()=>{
    navigation.navigate('Location');
  }

  return (
    <Container source={require("../../assets/bg-grad.png")}>
      <Txt style={{ marginTop: hp(10) }} color="blue" size="h2" bold>
        Meus Pedidos
      </Txt>
      <TouchableOpacity onPress={handleProgress} style={{flexDirection: "row", width: "100%", backgroundColor: colors.primary, borderWidth:2, height:'6%', alignItems: "center", justifyContent: "center", marginTop:10, borderRadius:10}}>
        <Txt margin color='white' bold>Em progresso</Txt>
        <Txt margin size='h1'> ></Txt>
      </TouchableOpacity>
      <Txt
        style={{ marginTop: hp(6) }}
        position="left"
        color="blue"
        size="h2"
        medium
      >
        Peça de novo
      </Txt>
      <Items />
      <Items />
      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary,
          width: "100%",
          height: hp(6),
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          marginTop: hp(3),
        }}
      >
        <Txt margin color="white">
          Adicionar a sacola
        </Txt>
      </TouchableOpacity>

      <Txt
        style={{ marginTop: hp(5) }}
        color="blue"
        size="h2"
        bold
        position="left"
      >
        Histórico
      </Txt>

      <Txt style={{ marginTop: hp(6) }} color="blue" size="h2" position="left">
        Pedido concluído
      </Txt>
      <Items />
      <Items />
      <Divider style={{ marginTop: 20 }} />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 5,
        }}
      >
        <TouchableOpacity>
          <Txt margin>Ajuda</Txt>
        </TouchableOpacity>
        <TouchableOpacity>
          <Txt margin>Adicionar á sacola</Txt>
        </TouchableOpacity>
      </View>
      
    </Container>
  );
}
