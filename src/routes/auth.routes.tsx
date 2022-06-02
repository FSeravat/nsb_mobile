import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNewAccount from "../screens/CreateNewAccount";
import Login from "../screens/Login";
import SliderIntro from "../screens/SliderIntro";

const Auth = createNativeStackNavigator();

export default function Routes() {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SliderIntro"
    >
      <Auth.Screen name="SliderIntro" component={SliderIntro} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="CreateNewAccount" component={CreateNewAccount} />
      {/* // TODO: Esqueceu a senha? */}
    </Auth.Navigator>
  );
}
