import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { FutureForecast } from "../components";

const WeatherScroll = (data) => {
  return (
    <ScrollView horizontal={true} style={style.scrollView}>
      <CurrentTempEl dataCurrent={data} />
      {data?.data?.forecast?.forecastday.slice(1).map((e) => {
        return <FutureForecast data={e} />;
      })}
    </ScrollView>
  );
};

const CurrentTempEl = (dataCurrent) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dt = new Date(
    dataCurrent.dataCurrent?.data?.forecast?.forecastday[0].date
  );

  const day = dt.getDay();
  const img = {
    uri: "https:" + dataCurrent.dataCurrent?.data?.current?.condition.icon,
  };
  return (
    <View style={style.currentTempContainer}>
      <Image source={img} style={style.image}></Image>
      <View style={style.otherContainer}>
        <Text style={style.day}>{days[day]}</Text>
        <Text style={style.temp}>
          Avg Temp :{" "}
          {dataCurrent.dataCurrent?.data?.forecast?.forecastday[0].day
            .avgtemp_c + " c"}
        </Text>
        <Text style={style.temp}>
          {" "}
          Avg Humidity :{" "}
          {dataCurrent.dataCurrent?.data?.forecast?.forecastday[0].day
            .avghumidity + " %"}
        </Text>
        <Text></Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  scrollView: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
    padding: 30,
  },
  image: { width: 150, height: 150 },

  currentTempContainer: {
    flexDirection: "row",
    backgroundColor: "#00000033",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 10,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default WeatherScroll;
