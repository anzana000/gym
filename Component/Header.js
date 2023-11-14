import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={require("../assets/gymlogo.png")} style={styles.logo} />
        <Text style={styles.appname}>Physical Fitness and Beauty</Text>
      </View>
      <Ionicons name="person" size={20} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",

    // backgroundColor: "red",
  },
  appname: {
    fontSize: 18,
    fontWeight: "600",
  },
});
