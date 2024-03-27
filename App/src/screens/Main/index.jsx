import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";
import HomeIcon from "../../assets/home-24.png";
import CodeIcon from "../../assets/code-50.png";
import ProfileIcon from "../../assets/profile-30.png";
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <View> */}
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <View> */}
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <View> */}
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        labeled={false}
        labelStyle={{ fontSize: 12, borderRadius: 50 }}
        barStyle={{
          backgroundColor: "#1F2029",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Image
                source={HomeIcon}
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Project"
          component={Notifications}
          options={{
            tabBarLabel: "Project",
            tabBarIcon: ({ color }) => (
              <Image
                source={CodeIcon}
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Image
                source={ProfileIcon}
                style={{
                  width: 26,
                  height: 26,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
