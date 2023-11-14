import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Component/Header";
import { FIREBASE_AUTH } from "./Firebase";

const ProfileScreen = ({ navigation }) => {
  const handleSignOut = () => {
    FIREBASE_AUTH.signOut()
      .then(() => navigation.replace("Login"))
      .catch((err) => alert("You got an error", err.message));
  };
  return (
    <View>
      <Header />
      <Text>ProfileScreen</Text>
      <Button title="LOGOUT" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
