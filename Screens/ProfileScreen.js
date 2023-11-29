import { Button, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "react-native-vector-icons";
import Header from "../Component/Header";

import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { FIREBASE_AUTH, FIREBASE_EMAIL_AUTH_PROVIDER } from "./Firebase";

const ProfileScreen = ({ navigation, route }) => {
  const { displayName } = route.params;

  const [email, setEmail] = useState("");
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    // Get the current user's email when the component mounts
    const currentUser = FIREBASE_AUTH.currentUser;
    if (currentUser) {
      setEmail(currentUser.email);
    }
  }, []);

  //SIGNOUT

  const handleSignOut = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // User confirmed, proceed with logout
            FIREBASE_AUTH.signOut()
              .then(() => navigation.replace("Login"))
              .catch((err) => alert("You got an error", err.message));
          },
        },
      ],
      { cancelable: false }
    );
  };

  //Reauthenticate
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  //Change password and email
  changePassword = (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log("Password updated!");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeEmail = (currentPassword, newEmail) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updateEmail(newEmail)
          .then(() => {
            console.log("Email updated!");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Handle change password
  const handleChangePassword = () => {
    if (currentpass.trim() === "" || newpass.trim() === "") {
      alert("Please enter both current and new passwords");
      return;
    }

    // Verify the current password
    reauthenticate(currentpass)
      .then(() => {
        // If verification is successful, change the password
        changePassword(currentpass, newpass);
      })
      .catch((error) => {
        console.log("Reauthentication failed:", error);
        alert("Incorrect current password");
      });
  };
  return (
    <View>
      <Header />
      <View style={styles.profileContainer}>
        <Text style={styles.welcomeProfile}>
          Hey <Text style={styles.username}>{displayName} </Text>Welcome to your
          Profile
        </Text>
        <TextInput value={email} style={styles.inputfield} editable={false} />

        <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}>
          <Text>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignOut} style={styles.logoutbtn}>
          <Text style={{ color: "#fff" }}>LOGOUT</Text>
          <AntDesign name="logout" size={18} style={{ color: "#fff" }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  welcomeProfile: {
    fontSize: 16,
    marginBottom: 20,
  },
  username: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  inputfield: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    width: "80%",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 5,
    fontSize: 16,
    color: "#000",
  },
  logoutbtn: {
    backgroundColor: "#000",
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
