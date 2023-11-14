import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Workout = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.workoutContainer}
      activeOpacity={0.4}
      onPress={() => {
        navigation.navigate("Activity", { item });
      }}
    >
      <Image
        source={item.image}
        style={{ width: 60, height: 60, resizeMode: "contain" }}
      />
      <Text style={styles.workoutText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Workout;

const styles = StyleSheet.create({
  workoutContainer: {
    height: 110,
    width: 110,
    backgroundColor: "#bb86fc",
    borderRadius: 10,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    elevation: 24,
  },
  workoutImage: {
    height: 60,
    width: 60,
  },
  workoutText: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#fff",
  },
});
