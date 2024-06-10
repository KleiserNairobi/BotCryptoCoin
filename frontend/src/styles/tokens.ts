import { useColorModeValue } from "@chakra-ui/react";

export function useTokens() {
  const corDoTexto = useColorModeValue("black", "white");
  const corDeFundo = useColorModeValue("whiteAlpha.900", "blackAlpha.400");

  const bgTelaLoginEsquerda = useColorModeValue("white", "gray.700");
  const bgTelaLoginDireita = useColorModeValue("gray.50", "gray.800");

  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorda = useColorModeValue("orange.400", "orange.400");

  const buttonBgPrimario = useColorModeValue("orange.400", "orange.400");
  const buttonBgSecundario = useColorModeValue("orange.400", "orange.400");

  return {
    corDoTexto,
    corDeFundo,
    bgTelaLoginEsquerda,
    bgTelaLoginDireita,
    inputBg,
    inputBorda,
    buttonBgPrimario,
    buttonBgSecundario,
  };
}
