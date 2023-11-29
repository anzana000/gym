import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import React from "react";

import HomeScreen from "./Screens/HomeScreen";
import WorkoutScreen from "./Screens/WorkoutScreen";
import TimerScreen from "./Screens/TimerScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ActivityScreen from "./Screens/ActivityScreen";
import LoginScreen from "./Screens/LoginScreen";
import ChangePasswordScreen from "./Screens/ChangePasswordScreen";
import Header from "./Component/Header";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = ({ route }) => {
  console.log("Route params in MainTabs:", route.params);
  const { displayName, email } = route.params || {};
  console.log("Maintabs name", displayName);
  console.log("Maintabs email", email);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: "#ddd",
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#ddd",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ displayName: displayName }}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-home" size={24} color="#bb86fc" />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        initialParams={{ displayName: displayName }}
        options={{
          tabBarIcon: () => (
            <Ionicons name="ios-fitness" size={24} color="#bb86fc" />
          ),
        }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="timer" size={24} color="#bb86fc" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ displayName: displayName, email: email }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="#bb86fc" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      {/* <Header /> */}

      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
