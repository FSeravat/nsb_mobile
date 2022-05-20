import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import UpdateProfile from "./src/screens/UpdateProfile";
import CreateNewAccount from "./src/screens/CreateNewAccount";
import SliderIntro from "./src/screens/SliderIntro";
import DonateRequest from "./src/screens/DonateRequest";
import Main from "./src/screens/Main";
import Location from "./src/screens/Location";
import Requests from "./src/screens/Requests";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SliderIntro"
      >
        <Stack.Screen name="SliderIntro" component={SliderIntro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="DonateRequest" component={DonateRequest} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Requests" component={Requests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
