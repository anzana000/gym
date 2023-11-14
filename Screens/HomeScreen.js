import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Header from "../Component/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation, route }) => {
  const { displayName } = route.params;
  console.log("Homescreen displayName", displayName);

  return (
    <View style={styles.homescreen}>
      <Header />
      <Text style={styles.welcomeText}>Welcome back, {displayName}!</Text>
      <View style={styles.heroSection}>
        <ImageBackground
          source={require("../assets/banner.png")}
          style={styles.imageWrap}
        >
          <Image
            source={require("../assets/couple.png")}
            style={styles.homeImage}
          />
        </ImageBackground>
      </View>
      <View style={styles.homeContent}>
        <Text style={styles.fitnessSlogan}>
          Get fit, feel great, with{" "}
          <Text style={{ color: "#bb86fc" }}>Fitness Pro</Text>.
        </Text>
        <Text style={styles.appInfo}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type
        </Text>
        <TouchableOpacity style={styles.homeButton} activeOpacity={0.5}>
          <Text style={styles.buttonText}> Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreen: {
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  welcomeText: {
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 10,
    fontWeight: "600",
    // textTransform: "capitalize",
  },
  heroSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrap: {
    marginTop: 20,
    marginBottom: 20,
    resizeMode: "contain",
    width: 400,
    height: 400,
  },
  homeImage: {
    width: 420,
    height: 420,
    resizeMode: "contain",
  },
  homeContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },

  homeButton: {
    width: 200,
    // backgroundColor: "linear-gradient(to right, #bb86fc, #d6c2ff)",
    backgroundColor: "#bb86fc",
    padding: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  fitnessSlogan: {
    fontSize: 20,
    fontWeight: "bold",
  },
  appInfo: {
    fontSize: 13,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 15,
  },
});
