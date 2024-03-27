import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/login";
import Main from "./src/screens/Main";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // const Stack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    //   {/* <View style={styles.container}> */}
    //     {/* <Login /> */}
    //     <Main />
    //     <StatusBar style="auto" />
    //   {/* </View> */}
    // </NavigationContainer>
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      {/* <View style={styles.container}> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
