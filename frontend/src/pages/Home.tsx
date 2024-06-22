import { HStack, Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useTokens } from "../styles/tokens";
import { Header } from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Home() {
  const tokens = useTokens();
  const location = useLocation();
  const { setTitle } = useAppContext();
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const pathToTitleMap: { [key: string]: string } = {
      "/dashboard": "Dashboard",
      "/automacoes": "Automações",
      "/ordens": "Ordens",
      "/simbolos": "Símbolos",
      "/usuarios": "Usuários",
      "/configuracoes": "Configurações",
      "/sair": "Sair",
    };
    const title = pathToTitleMap[location.pathname] || "Home";
    setTitle(title);
  }, [location, setTitle]);

  return (
    <HStack
      w={"full"}
      maxW={1480}
      h={"100vh"}
      mx={"auto"}
      gap={0.5}
      overflowX="hidden"
    >
      <Flex
        as={"aside"}
        w={"full"}
        h={"full"}
        maxW={collapse ? 260 : 90}
        bg={tokens.bgMain}
        alignItems={"start"}
        flexDir={"column"}
        justifyContent={"space-between"}
        transition={"ease-in-out .2s"}
      >
        <Sidebar collapse={collapse} />
      </Flex>
      <Flex flexDir={"column"} h={"full"} w={"full"}>
        <Flex minH={20} w={"full"}>
          <Header collapse={collapse} setCollapse={setCollapse} />
        </Flex>
        <Flex
          as={"main"}
          pl={6}
          w={"full"}
          h={"full"}
          bg={tokens.bgMain}
          flexDir={"column"}
          overflow="hidden"
        >
          <Box h={"full"} w={"full"} overflowX="auto">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
    </HStack>
  );
}
