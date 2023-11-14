import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "react-native-vector-icons";
import Stopwatch from "../Component/Stopwatch";

const ActivityScreen = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.activityScreen}>
      <View style={styles.backbutton}>
        <Entypo
          name="chevron-thin-left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.activityContent}>
        <Text style={styles.activityName}> {item.name}</Text>
        <Image source={item.image} style={styles.activityImage} />
      </View>
      <View style={styles.timer}>
        <Stopwatch />
      </View>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  activityScreen: {
    backgroundColor: "#bb86fc",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backbutton: {
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
    marginBottom: 20,
  },
  activityContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activityName: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  activityImage: {
    width: 400,
    height: 400,
    resizeMode: "contain",
    marginTop: 10,
  },
  timer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#fff",
    paddingVertical: 30,
    borderRadius: 10,
  },
});
