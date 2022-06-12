import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import api from '../services/api';

type AddressProps = {
  id: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zip_code: string;
  district: string;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  blood_type: string;
  birth_date: string;
  address_id: string;
  address: AddressProps;
  gender: string;
};

type AuthStateProps = {
  token: string;
  user: UserProps;
};

type SignInCredentialsProps = {
  email: string;
  password: string;
};

type AuthContextDataProps = {
  user: UserProps;
  setUser(user: UserProps): void;
  signIn(credentials: SignInCredentialsProps): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthStateProps>({} as AuthStateProps);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@nsb:token",
        "@nsb:user",
      ]);

      if (token[1] && user[1]) {
        setData({
          token: token[1],
          user: JSON.parse(user[1]),
        });
      }

      // Loading?
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("user/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@nsb:token", token],
      ["@nsb:user", JSON.stringify(user)],
    ]);

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@nsb:token", "@nsb:user"]);

    setData({} as AuthStateProps);
  }, []);

  const setUser = useCallback(async (user) => {
    await AsyncStorage.setItem("@nsb:user", JSON.stringify(user));

    setData({ ...data, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
