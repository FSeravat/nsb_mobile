import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AddressProps = {
  id: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zip_code: string;
  neighborhood: string;
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
};

type AuthStateProps = {
  token: string;
  user: UserProps;
};

type SignInCredentialsProps = {
  login: string;
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

  const signIn = useCallback(async ({ login, password }) => {
    // const reponse = await api.post("sessions", {
    //   login,
    //   password,
    // });

    // const {token, user} = response.data

    const token = "123123123123123123";

    const user = {
      name: "Lula",
      email: "aquaman@hotmail.com",
      cpf: "123123123123",
      blood_type: "A+",
      birth_date: "1990-05-22",
    } as UserProps; // Remover essa forçagem de tipagem

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
