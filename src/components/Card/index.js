import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Card = (props) => {
  const { venue, onPressCard } = props;
  const { name, address, lat, lon } = venue.item;
  return (
    <TouchableOpacity
      onPress={() => onPressCard({ lat, lon })}
      style={styles.card}
    >
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardText}>{address}</Text>
    </TouchableOpacity>
  );
};

export default Card;
