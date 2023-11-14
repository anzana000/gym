import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Workout from "../Component/Workout";
import { gymData } from "./Data";
import { ScrollView } from "react-native";
import Header from "../Component/Header";

const WorkoutScreen = () => {
  return (
    <ScrollView>
      <Header />
      <View style={styles.workoutScreen}>
        <Text style={styles.welcomeText}>Hey John!</Text>
        <Text style={styles.title}>
          Choose your <Text style={styles.highlight}>activity</Text>
        </Text>

        {/* <FlatList
        horizontal
        data={gymData}
        renderItem={({ item }) => <Workout item={item} />}
        keyExtractor={(item) => item.name}
        style={styles.flatList}
      /> */}
        <View style={styles.wrapper}>
          {gymData.map((data) => (
            <Workout item={data} key={data.name} />
          ))}
        </View>
      </View>
      <View style={styles.recentWorkouts}>
        <Text style={styles.recentTitle}>Recent workouts</Text>
        <View style={styles.wrapper}>
          {gymData.map((data) => (
            <Workout item={data} key={data.name} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  workoutScreen: {
    paddingLeft: 15,
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    textTransform: "capitalize",
  },
  highlight: {
    color: "#bb86fc",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  workouts: {
    display: "flex",
    flexWrap: "wrap",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 15,
  },
  recentWorkouts: {
    paddingLeft: 15,
  },
  recentTitle: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
  },
});
