import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DonateRequest from './screens/DonateRequest';
import EditDonateRequest from './screens/EditDonateRequest';
import Main from './screens/Main';
import Notification from './screens/Notification';
import Requests from './screens/Requests';
import UpdateProfile from './screens/UpdateProfile';

export type AppStackParams = {
  Main: undefined;
  UpdateProfile: undefined;
  DonateRequest: undefined;
  Requests: undefined;
  Notification: NotificationProps;
  EditDonateRequest: EditDonateRequestProps;
};

type EditDonateRequestProps = {
  id: string;
  receiver: string;
  blood_type: string;
  blood_bank_id: string;
  start_date: string;
  end_date: string;
};

type NotificationProps = {
  id: string;
  receiver: string;
  blood_type: string;
  blood_bank_id: string;
  start_date: string;
  end_date: string;
  blood_bank: BloodBankProps;
};

type BloodBankProps = {
  name: string;
  address: AdressProps;
};

type AdressProps = {
  city: string;
  complement: string;
  district: string;
  number: string;
  state: string;
  street: string;
  zip_code: string;
};

const App = createNativeStackNavigator<AppStackParams>();

export default function Routes() {
  return (
    <App.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <App.Screen name="Main" component={Main} />
      <App.Screen name="UpdateProfile" component={UpdateProfile} />
      <App.Screen name="DonateRequest" component={DonateRequest} />
      <App.Screen name="EditDonateRequest" component={EditDonateRequest} />
      <App.Screen name="Requests" component={Requests} />
      <App.Screen name="Notification" component={Notification} />
    </App.Navigator>
  );
}
