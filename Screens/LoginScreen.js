import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FIREBASE_AUTH } from "./Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [loginstatus, setLoginStatus] = useState(false);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // navigation.navigate("MainTabs", { displayName: email });
        console.log("User name okkk", uname);
        const { displayName, email, uid } = user;
        navigation.navigate("MainTabs", { displayName: email });
        console.log("User data", { displayName, email, uid });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    if (
      uname.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      cpassword.length == 0
    ) {
      alert("Fields can't be empty");
    } else if (uname.length > 8) {
      alert("Username should be less than 8 characters");
    } else if (password.length < 8 || cpassword < 8) {
      alert("Password should be 8 characters long");
    } else if (password !== cpassword) {
      alert("Passwords donot match");
    } else {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(response.user, {
          displayName: uname,
        });
        console.log("User displayName:", response.user.displayName);
        console.log("Response", response);
      } catch (err) {
        console.log(err);
        alert("Sign up failed", err.message);
      }
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Response", response);
    } catch (err) {
      console.log(err);
      alert("Login  failed", err.message);
    }
  };

  const displaySignup = () => {
    if (!loginstatus) {
      setLoginStatus(true);
    }
  };

  const displaySignin = () => {
    setLoginStatus(false);
  };

  const resetPassword = (Email) => {
    console.log("reset email sent to " + Email);
    sendPasswordResetEmail(auth, Email, null)
      .then(() => {
        alert("reset email sent to " + Email);
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.loginContainer}>
      <Image
        source={require("../assets/gymlogo.png")}
        style={styles.loginImage}
      />

      {loginstatus === true ? (
        <View>
          <TextInput
            placeholder="Username"
            value={uname}
            onChangeText={(text) => setUname(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm Password"
            value={cpassword}
            onChangeText={(text) => setCPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <View>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
              <Text style={styles.loginButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <View style={styles.signupBottom}>
              <Text> Already have an account? </Text>
              <Text onPress={displaySignin} style={{ color: "#0984e3" }}>
                Login
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.forgotText}
            activeOpacity={0.4}
            onPress={() => resetPassword(email)}
          >
            <Text> Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.line}></View>

          <View style={styles.signup}>
            <Text>
              Don't have an account?{" "}
              <Text style={{ color: "#0984e3" }} onPress={displaySignup}>
                Register
              </Text>
            </Text>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 300,
    gap: 30,
    marginBottom: 15,
  },
  loginHeaderText: {
    fontWeight: "600",
    textTransform: "uppercase",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    // backgroundColor: "#fff",
    backgroundColor: "transparent",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderBottomWidth: 1,
    color: "black",
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  loginButton: {
    backgroundColor: "#0984e3",

    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    marginBottom: 20,
  },
  buttonOutline: {
    backgroundColor: "#0984e3",
    borderColor: "#0984e3",
    borderStyle: "solid",
    borderWidth: 1,
  },
  buttonOutlineColor: {
    color: "#0984e3",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  line: {
    width: 300,
    height: 1.5,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  forgotText: {
    fontSize: 13,
    // marginTop: 5,
  },
  loginImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  signup: {
    fontSize: 13,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signupBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontSize: 13,
  },
});
