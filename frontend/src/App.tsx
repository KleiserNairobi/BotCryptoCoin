//import { Router } from "./Router";
import { AppProvider } from "./contexts/AppContext";
import Login from "./pages/Login";

export default function App() {
  return (
    <AppProvider>
      <Login />
    </AppProvider>
  );
}
