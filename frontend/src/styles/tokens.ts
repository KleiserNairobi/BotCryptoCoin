import { useColorModeValue } from "@chakra-ui/react";

export function useTokens() {
  const corDoTexto = useColorModeValue("black", "white");
  const corDeFundo = useColorModeValue("whiteAlpha.900", "blackAlpha.400");

  return { corDoTexto, corDeFundo };
}
