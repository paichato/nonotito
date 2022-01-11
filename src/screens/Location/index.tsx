import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import ButtonWrapper from "../../components/ButtonWrapper";
import MainHeader from "../../components/MainHeader";
import colors from "../../lib/colors";
import { Txt } from "../Opening/styles";
import { DeliverGuyContainer, DeliverGuyImage, MainView } from "./styles";
import BackIcon from "../../assets/back.svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Phone from "../../assets/phone.svg";
import Done from "../../assets/done.svg";
import Undone from "../../assets/undone.svg";
import Line from "../../assets/line.svg";
// import { GOOGLE_API_KEY } from "react-native-dotenv";

export default function Location({ navigation }) {
  const mapStyle = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#e9e9e9",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 17,
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 29,
        },
        {
          weight: 0.2,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#dedede",
        },
        {
          lightness: 21,
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#ffffff",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#333333",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#f2f2f2",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#fefefe",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  const origin = { latitude: 37.78825, longitude: -122.4324 };

  const destination = { latitude: 37.78825, longitude: -122.4929 };

  console.log(process.env);

  const StatusItem=({title,desc, line, done})=>{
      return(
          <>
        <View style={{ flexDirection: "row", width: "100%", alignItems: 'center', marginLeft:wp('10%') }}>
        {done ? <Done /> : <Undone/>}
        <View style={{marginLeft:wp('5%')}}>
          <Txt margin bold color="blue" position="left">
            {title}
          </Txt>
          <Txt margin color="gray" position="left">
            {desc}
          </Txt>
        </View>
      </View>
      {line && <View style={{marginLeft:wp('15%')}}>
         <Line /> 
      </View>}
      </>
      )
  }

  return (
    <View style={{ flex: 1 }}>
      <MainHeader bg>
        <ButtonWrapper action={handleGoBack} Icon={<BackIcon />} />
        <Txt
          // margin
          bold
          color={"blue"}
        >
          Rastreio
        </Txt>
        <Txt margin> </Txt>
      </MainHeader>
      <MapView
        style={{ height: "30%" }}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={process.env.GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={colors.secondary}
        /> */}
        {/* <Marker style={{top:100}} image={require('../../assets/markers.png')} coordinate={origin} title='origin' /> */}
        <Marker
          style={{ alignItems: "center", justifyContent: "center" }}
          coordinate={origin}
          title="origin"
        >
          <View
            {...Marker}
            style={{
              backgroundColor: colors.grad1,
              borderWidth: 2,
              borderColor: colors.primary,
              borderRadius: 50,
              width: 10,
              height: 10,
              alignSelf: "center",
            }}
          ></View>
        </Marker>
        <Marker
          style={{ alignItems: "center", justifyContent: "center" }}
          coordinate={destination}
          title="destination"
        >
          <View
            {...Marker}
            style={{
              backgroundColor: colors.grad1,
              borderWidth: 2,
              borderColor: colors.primary,
              borderRadius: 50,
              width: 15,
              height: 15,
              alignSelf: "center",
            }}
          ></View>
        </Marker>
      </MapView>
      <MainView>
        <DeliverGuyContainer>
          <DeliverGuyImage
            style={{ height: hp("8%"), width: hp("8%") }}
            source={require("../../assets/deliver.png")}
          />
          <View style={{ width: "40%" }}>
            <Txt position="left" margin bold color="white">
              Lucas Silva
            </Txt>
            <Txt
              position="left"
              margin
              color="gray"
              style={{ color: colors.unselected_light }}
            >
              Entregador
            </Txt>
          </View>
          <ButtonWrapper action={handleGoBack} Icon={<Phone />} />
        </DeliverGuyContainer>
        <View style={{height:10}} ></View>
            <StatusItem done title='Pedido aceito pelo Restaurante' desc='Seu pedido foi aceito' line/>
            <StatusItem title='Preparando pedido' desc='Seu pedido está sendo preparado' line/>
            <StatusItem title='Saiu para Entrega' desc='Seu pedido saiu para entrega' line/>
            <StatusItem title='Seu pedido chegou!' desc='Aproveite'/>
        {/* <View style={{marginLeft:wp('15%')}}>
           <Line /> 
        </View> */}
        
        {/* <View style={{ alignItems: "center" }}>
          <Done />
          <Line />
          <Done />
          <Line />
          <Done />
          <Line />
          <Undone />
        </View> */}
      </MainView>
    </View>
  );
}
