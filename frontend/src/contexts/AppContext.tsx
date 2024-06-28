import { ReactNode, createContext, useContext, useState } from "react";
import { ILogin } from "../models/LoginModel";
import { logar } from "../services/LoginService";

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
  login: (data: ILogin) => Promise<void>;
  logout: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Home");
  const [user, setUser] = useState<User | null>(null);

  async function login(data: ILogin) {
    try {
      const response = await logar(data);
      setUser(response.data.user);
    } catch (error) {
      console.error("Falha ao logar", error);
    }
  }

  function logout() {
    setUser(null);
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
