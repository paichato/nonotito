import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Txt } from "../Opening/styles";
import { Container } from "./styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../lib/colors";
import { Divider } from "../Cart/styles";
import Bell from "../../assets/bell.svg";
import Cupon from "../../assets/cupon.svg";
import Heart from "../../assets/heart.svg";
import Settings from "../../assets/settings.svg";
import Help from "../../assets/help.svg";

export default function Profile() {
  const Item = ({ title, desc, icon }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", height: hp(6), marginTop: hp(2) }}
      >
        <View
          style={{
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>

        <View
          style={{ width: "80%", height: "100%", justifyContent: "center" }}
        >
          <Txt position="left" color="blue" bold margin>
            {title}
          </Txt>
          <Txt position="left" color="white" medium margin>
            {desc}
          </Txt>
        </View>
      </TouchableOpacity>
    );
  };

  const Item_Alt = ({ title, icon }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", height: hp(6), marginTop: hp(2) }}
      >
        <View
          style={{
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </View>

        <View
          style={{ width: "80%", height: "100%", justifyContent: "center" }}
        >
          <Txt
            style={{ color: colors.unselected }}
            position="left"
            color="white"
            bold
            margin
          >
            {title}
          </Txt>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Container source={require("../../assets/bg-grad.png")}>
      <Txt style={{ marginTop: hp(10) }} color="blue" size="h2" bold>
        Perfil
      </Txt>
      <TouchableOpacity
        style={{
          height: hp(6),
          borderWidth: 2,
          borderColor: colors.unselected_light,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop:hp(3)
        }}
      >
        <Txt color="white" margin>
          Entrar ou cadastrar-se
        </Txt>
      </TouchableOpacity>
      <View style={{marginTop:hp(3)}}>

      </View>
      <Item
        icon={<Bell />}
        title="Notificações"
        desc="Central de notificações"
      />
      <Item
        icon={<Cupon />}
        title="Cupons"
        desc="Veja seus cupons de desconto"
      />
      <Item
        icon={<Heart />}
        title="Favoritos"
        desc="Veja seus pratos favoritos"
      />
      <View style={{marginTop:hp(5)}}>

      </View>
      <Item_Alt icon={<Help />} title="Ajuda" />
      <Item_Alt icon={<Settings />} title="Configurações" />
    </Container>
  );
}
