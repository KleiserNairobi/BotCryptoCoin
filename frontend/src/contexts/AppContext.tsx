import { ReactNode, createContext, useContext, useState } from "react";

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
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Home");
  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{ title, setTitle, user, setUser }}>
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
