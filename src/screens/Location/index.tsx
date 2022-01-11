import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import colors from "../../lib/colors";
// import { GOOGLE_API_KEY } from "react-native-dotenv";

export default function Location() {
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

  const origin = { latitude: 37.78825, longitude: -122.4324 };

  const destination = { latitude: 37.78825, longitude: -122.4929 };

  
  console.log(process.env);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ height: "50%" }}
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
    </View>
  );
}
