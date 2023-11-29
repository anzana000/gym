import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import React, { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../Screens/Firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const [username, setUsername] = useState("");
  const [usermail, setUserMail] = useState("");
  const [showprofile, setShowProfile] = useState(false);
  useEffect(() => {
    // Get the current user's email when the component mounts
    const currentUser = FIREBASE_AUTH.currentUser;
    console.log("Header currentuser", currentUser);
    if (currentUser) {
      setUsername(currentUser.displayName);
      setUserMail(currentUser.email);
    }
  }, []);

  const toggleProfile = () => {
    setShowProfile((showprofile) => !showprofile);
  };
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={require("../assets/gymlogo.png")} style={styles.logo} />
        <Text style={styles.appname}>Physical Fitness and Beauty</Text>
      </View>
      <TouchableOpacity onPress={toggleProfile} activeOpacity={0.4}>
        <Ionicons name="person" size={20} />
      </TouchableOpacity>
      {showprofile && (
        <View style={styles.userprofile}>
          <Text>{username}</Text>
          <View style={styles.line}></View>
          <Text>{usermail}</Text>
        </View>
      )}
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
    position: "relative",
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
  userprofile: {
    position: "absolute",
    bottom: -60,
    right: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    width: 160,
    padding: 10,
    borderRadius: 5,
  },
  line: {
    backgroundColor: "#ccc",
    height: 1,
    width: "90%",
    marginVertical: 5,
  },
});
