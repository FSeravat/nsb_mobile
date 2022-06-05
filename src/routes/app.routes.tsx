import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateProfile from "../screens/UpdateProfile";
import DonateRequest from "../screens/DonateRequest";
import Main from "../screens/Main";
import Location from "../screens/Location";
import Requests from "../screens/Requests";
import Notification from "../screens/Notification";

const App = createNativeStackNavigator();

export default function Routes() {
  return (
    <App.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <App.Screen name="Main" component={Main} />
      <App.Screen name="UpdateProfile" component={UpdateProfile} />
      <App.Screen name="DonateRequest" component={DonateRequest} />
      <App.Screen name="Location" component={Location} />
      <App.Screen name="Requests" component={Requests} />
      <App.Screen name="Notification" component={Notification} />
    </App.Navigator>
  );
}
