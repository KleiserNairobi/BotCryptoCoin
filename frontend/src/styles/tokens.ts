import { useColorModeValue } from "@chakra-ui/react";

export function useTokens() {
  const corDoTexto = useColorModeValue("black", "white");
  const corDeFundo = useColorModeValue("menu.light", "menu.dark");

  const bgTelaLoginEsquerda = useColorModeValue("white", "gray.700");
  const bgTelaLoginDireita = useColorModeValue("gray.50", "gray.800");

  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorda = useColorModeValue("orange.400", "orange.400");

  const buttonBgPrimario = useColorModeValue("orange.400", "orange.400");
  const buttonBgSecundario = useColorModeValue("orange.400", "orange.400");

  const bgIcon = useColorModeValue("bgIcon.light", "bgIcon.dark");
  const bgMenu = useColorModeValue("menu.light", "menu.dark");
  const bgMenuFocus = useColorModeValue("bgMenu.light", "bgMenu.dark");
  const menuLabel = useColorModeValue("menuLabel.light", "menuLabel.dark");
  const menuTitle = useColorModeValue("menuTitle.light", "menuTitle.dark");
  const menuTitleBold = useColorModeValue(
    "menuTitleBold.light",
    "menuTitleBold.dark"
  );

  const bgMain = useColorModeValue("main.light", "main.dark");

  const title = useColorModeValue("title.light", "title.dark");
  const subtitle = useColorModeValue("subtitle.light", "subtitle.dark");
  const titleYellow = useColorModeValue(
    "titleYellow.light",
    "titleYellow.dark"
  );

  const line = useColorModeValue("line.light", "line.dark");

  return {
    corDoTexto,
    corDeFundo,
    bgTelaLoginEsquerda,
    bgTelaLoginDireita,
    inputBg,
    inputBorda,
    buttonBgPrimario,
    buttonBgSecundario,
    bgMenu,
    bgMain,
    title,
    subtitle,
    bgIcon,
    menuLabel,
    menuTitle,
    menuTitleBold,
    bgMenuFocus,
    titleYellow,
    line,
  };
}
