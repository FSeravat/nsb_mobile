import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateNewAccount from './screens/CreateNewAccount';
import Login from './screens/Login';
import SliderIntro from './screens/SliderIntro';

export type AuthStackParams = {
  SliderIntro: undefined;
  Login: undefined;
  CreateNewAccount: undefined;
  // ForgotPassword: undefined
};

const Auth = createNativeStackNavigator<AuthStackParams>();

export default function Routes() {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SliderIntro"
    >
      <Auth.Screen name="SliderIntro" component={SliderIntro} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="CreateNewAccount" component={CreateNewAccount} />
    </Auth.Navigator>
  );
}
