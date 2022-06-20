import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getToken() {
  try {
    return await AsyncStorage.getItem("@nsb:token");
  } catch (err) {
    throw err;
  }
}

export async function deleteToken() {
  try {
    return await AsyncStorage.multiRemove(["@nsb:token", "@nsb:user"]);
  } catch (err) {
    throw err;
  }
}
