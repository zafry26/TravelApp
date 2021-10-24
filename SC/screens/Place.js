import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  PlatformColor,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";

import { COLORS, SIZES, FONTS, icons } from "../constants";

import {
  HeaderBar,
  TextIconButton,
  Rating,
  TextButton,
  WeatherScroll,
} from "../components";

import SlidingUpPanel from "rn-sliding-up-panel";

import MapView, { PROVIDER_GOOGLE, MARKER, Marker } from "react-native-maps";

import { MapStyle } from "../styles";

const Place = ({ navigation, route }) => {
  const [refreshkey, setRefreshKey] = React.useState(false);
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const [selectedHotel, setSelectedHotel] = React.useState(null);

  let _panel = React.useRef(null);

  React.useEffect(() => {
    console.log("masuk place");
    let { selectedPlace } = route.params;
    setSelectedPlace(selectedPlace);
  }, []);

  const renderPlaces = () => {
    return (
      <ImageBackground
        source={selectedPlace?.image}
        style={{ width: "100%", height: "100%" }}
      >
        <HeaderBar
          title=""
          leftOnPressed={() => navigation.goBack()}
          right={false}
          containerStyle={{ marginTop: SIZES.padding * 2 }}
        ></HeaderBar>

        <WeatherScroll></WeatherScroll>

        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
            justifyContent: "flex-end",
            marginBottom: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
              {selectedPlace?.name}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ marginRight: 5, color: COLORS.white, ...FONTS.h3 }}
              >
                {selectedPlace?.rate}
              </Text>
              <Image
                source={icons.star}
                style={{ width: 20, height: 20 }}
              ></Image>
            </View>
          </View>

          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.white,
              ...FONTS.body3,
            }}
          >
            {selectedPlace?.description}
          </Text>
          <TextIconButton
            label="Book a flight"
            icon={icons.aeroplane}
            customeContainerStyle={{ marginTop: SIZES.padding }}
            onPress={() => console.log("bOOK A FLIGHT")}
          ></TextIconButton>
        </View>
      </ImageBackground>
    );
  };

  const renderMap = () => {
    return (
      <SlidingUpPanel
        ref={(c) => (_panel = c)}
        draggableRange={{ top: SIZES.height + 120, bottom: 120 }}
        showBackdrop={false}
        snappingPoints={[SIZES.height + 120]}
        height={SIZES.height + 120}
        friction={0.7}
      >
        <View style={{ flex: 1, backgroundColor: "transparent" }}>
          <View
            style={{
              height: 120,
              backgroundColor: "transparent",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={icons.up_arrow}
              style={{ width: 20, height: 20, tintColor: COLORS.white }}
            ></Image>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              SWIPE FOR DETAILS
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MapView
              style={{ width: "100%", height: "100%" }}
              provider={PROVIDER_GOOGLE}
              initialRegion={selectedPlace?.mapInitialRegion}
            >
              {selectedPlace?.hotels.map((hotel, index) => (
                <Marker
                  key={index}
                  coordinate={hotel.latlng}
                  identifier={hotel.id}
                  onPress={() => {
                    setSelectedHotel(hotel);
                  }}
                >
                  <Image
                    source={
                      selectedHotel?.id == hotel.id
                        ? icons.bed_on
                        : icons.bed_off
                    }
                    resizeMode="contain"
                    style={{ width: 50, height: 50 }}
                  ></Image>
                </Marker>
              ))}
            </MapView>
            <HeaderBar
              style={{ color: COLORS.black }}
              title={selectedPlace?.name}
              onPress={() => _panel.hide()}
              right={true}
              containerStyle={{
                position: "absolute",
                top: SIZES.padding * 2,
                color: COLORS.lightGray,
              }}
            ></HeaderBar>

            {selectedHotel && (
              <View
                style={{
                  position: "absolute",
                  bottom: 30,
                  left: 0,
                  right: 0,
                  padding: SIZES.radius,
                }}
              >
                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>
                  Hotels in {selectedPlace?.name}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: SIZES.radius,
                    padding: SIZES.radius,
                    borderRadius: 15,
                    backgroundColor: COLORS.transparentBlack1,
                  }}
                >
                  <Image
                    source={selectedHotel?.image}
                    resizeMode="cover"
                    style={{ width: 90, height: 120, borderRadius: 15 }}
                  ></Image>

                  <View
                    style={{
                      flex: 1,
                      marginLeft: SIZES.radius,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                      {selectedHotel?.name}
                    </Text>
                    <Rating
                      style={{ marginTop: SIZES.base }}
                      rate={selectedHotel?.rate}
                    ></Rating>

                    <View
                      style={{ flexDirection: "row", marginTop: SIZES.base }}
                    >
                      <TextButton
                        label="Details"
                        customContainerStyle={{
                          marginTop: SIZES.base,
                          height: 45,
                          width: 100,
                          //   position: "absolute",
                          //   bottom: -30,
                          //   width: 100,
                        }}
                        customLabelStyle={{ ...FONTS.H3 }}
                        onPress={() => exploreButtonHandler()}
                      ></TextButton>
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: COLORS.lightGray,
                            ...FONTS.body5,
                            fontSize:
                              Platform.OS === "ios" ? SIZES.body4 : SIZES.body5,
                          }}
                        >
                          from RM {selectedHotel?.price} / night
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </SlidingUpPanel>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {renderPlaces()}
      {renderMap()}
    </View>
  );
};

export default Place;
