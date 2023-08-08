import React from "react";
import { Image } from "react-native";
import { Marker as RNMarker } from "react-native-maps";

import styles from "./styles";

const Marker = (props) => {
  const { lat, lon, name, address } = props.venue;

  const CustomMarker = () => (
    <Image
      source={{
        uri:
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/" +
          "parking_lot_maps.png",
      }}
      style={styles.image}
    />
  );

  return (
    <RNMarker
      coordinate={{
        latitude: lat,
        longitude: lon,
      }}
      title={name}
      description={address}
      // image={<CustomMarker />}
    >
      <CustomMarker />
    </RNMarker>
  );
};

export default Marker;
