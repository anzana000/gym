import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ChangePasswordScreen = ({ navigation }) => {
  const [newpass, setNewPass] = useState("");
  const [currentpass, setCurrentPass] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.changecontainer}>
        <Text>Let's change your password!</Text>
        <View style={styles.changeContent}>
          <TextInput
            value={currentpass}
            onChangeText={(text) => setCurrentPass(text)}
            placeholder="Current Password"
            style={styles.inputfield}
          />
          <TextInput
            value={newpass}
            onChangeText={(text) => setNewPass(text)}
            placeholder="New Password"
            style={styles.inputfield}
          />
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.saveBtnText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  changecontainer: {
    marginTop: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  changeContent: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputfield: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    width: 300,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 5,
    fontSize: 16,
    color: "#000",
  },
  saveBtn: {
    backgroundColor: "#000",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  saveBtnText: {
    color: "#fff",
  },
});
