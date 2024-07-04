import { ReactNode, createContext, useContext, useState } from "react";
import { ILogin } from "../models/LoginModel";
import { autenticar } from "../services/LoginService";
import apiBack from "../services/apiBack";

type User = {
  id: string;
  name: string;
  email: string;
};

type AppContextType = {
  title: string;
  setTitle: (title: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  login: (data: ILogin) => Promise<boolean>;
  logout: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Home");
  const [user, setUser] = useState<User | null>(null);

  async function login(data: ILogin): Promise<boolean> {
    try {
      const response = await autenticar(data);
      if (response.data) {
        setUser(response.data);
        localStorage.setItem("token", response.data.token);
        apiBack.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    delete apiBack.defaults.headers.common["Authorization"];
  }

  return (
    <AppContext.Provider
      value={{ title, setTitle, user, setUser, login, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
