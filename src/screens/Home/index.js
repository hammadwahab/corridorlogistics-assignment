import _ from "lodash";
import React, { useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-native-reanimated-carousel";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { fetchVenues } from "../../services/api";
import { Card, Marker } from "../../components";
import { setVenues } from "../../redux/actions";

import styles from "./styles";

const Home = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const mapRef = useRef(null);

  const dispatch = useDispatch();
  const venues = useSelector((state) => state.venues);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVenues();
        dispatch(setVenues(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const animateMapToCoordinates = (e) => {
    const { lat, lon } = e;

    mapRef?.current?.animateCamera({
      center: {
        latitude: lat,
        longitude: lon,
      },
      duration: 1000,
    });
  };

  return _.isArray(venues) && venues.length > 1 ? (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={(styles.map, StyleSheet.absoluteFill)}
        initialRegion={{
          latitude: _.isEmpty(venues) ? 37.78825 : venues[0].lat,
          longitude: _.isEmpty(venues) ? -122.4324 : venues[0].lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {venues &&
          venues?.map((venue) => <Marker key={venue.id} venue={venue} />)}
      </MapView>
      <View
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Carousel
          width={windowWidth}
          loop={false}
          height={windowHeight * 0.4}
          data={venues}
          scrollAnimationDuration={1000}
          renderItem={(i) => (
            <Card
              onPressCard={(e) => animateMapToCoordinates(e)}
              key={i.id}
              venue={i}
            />
          )}
        />
      </View>
    </View>
  ) : null;
};

export default Home;
