import { useColorModeValue, useColorMode, useTheme } from "@chakra-ui/react";

export function useTokens() {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const bgDesktop = useColorModeValue("bgDesktop.light", "bgDesktop.dark");
  const bgMain = useColorModeValue("bgMain.light", "bgMain.dark");
  const headerBg = useColorModeValue("headerBg.light", "headerBg.dark");
  const headerBtnBg = useColorModeValue(
    "headerBtnBg.light",
    "headerBtnBg.dark"
  );
  const headerBtnBgHover = useColorModeValue(
    "headerBtnBgHover.light",
    "headerBtnBgHover.dark"
  );
  const headerBtnIcon = useColorModeValue(
    "headerBtnIcon.light",
    "headerBtnIcon.dark"
  );
  const headerBtnIconHover = useColorModeValue(
    "headerBtnIconHover.light",
    "headerBtnIconHover.dark"
  );
  const headerAvatarBg = useColorModeValue(
    "headerAvatarBg.light",
    "headerAvatarBg.dark"
  );
  const mainBtnBg = useColorModeValue("mainBtnBg.light", "mainBtnBg.dark");
  const mainBtnBgHover = useColorModeValue(
    "mainBtnBgHover.light",
    "mainBtnBgHover.dark"
  );
  const mainBtnIcon = useColorModeValue(
    "mainBtnIcon.light",
    "mainBtnIcon.dark"
  );
  const mainBtnIconHover = useColorModeValue(
    "mainBtnIconHover.light",
    "mainBtnIconHover.dark"
  );

  const mainBtnPrimaryBg = useColorModeValue(
    "mainBtnPrimaryBg.light",
    "mainBtnPrimaryBg.dark"
  );

  const mainBtnPrimaryBgHover = useColorModeValue(
    "mainBtnPrimaryBgHover.light",
    "mainBtnPrimaryBgHover.dark"
  );

  const menuTitleActive =
    colorMode === "light"
      ? theme.colors.menuTitleActive.light
      : theme.colors.menuTitleActive.dark;
  const menuTitleInactive =
    colorMode === "light"
      ? theme.colors.menuTitleInactive.light
      : theme.colors.menuTitleInactive.dark;

  const menuBg = useColorModeValue("menuBg.light", "menuBg.dark");
  const menuBgActive = useColorModeValue(
    "menuBgActive.light",
    "menuBgActive.dark"
  );
  const menuBgHover = useColorModeValue(
    "menuBgHover.light",
    "menuBgHover.dark"
  );
  const menuBgHoverActive = useColorModeValue(
    "menuBgHoverActive.light",
    "menuBgHoverActive.dark"
  );
  const menuIcon = useColorModeValue("menuIcon.light", "menuIcon.dark");

  const headerTitle =
    colorMode === "light"
      ? theme.colors.headerTitle.light
      : theme.colors.headerTitle.dark;
  const headerSubtitle =
    colorMode === "light"
      ? theme.colors.headerSubtitle.light
      : theme.colors.headerSubtitle.dark;

  const mainBorder = useColorModeValue("mainBorder.light", "mainBorder.dark");

  return {
    bgDesktop,
    bgMain,
    headerBg,
    headerBtnBg,
    headerBtnBgHover,
    headerBtnIcon,
    headerBtnIconHover,
    headerAvatarBg,
    headerTitle,
    headerSubtitle,
    mainBtnBg,
    mainBtnBgHover,
    mainBtnIcon,
    mainBtnIconHover,
    mainBtnPrimaryBg,
    mainBtnPrimaryBgHover,
    mainBorder,
    menuTitleActive,
    menuTitleInactive,
    menuBg,
    menuBgActive,
    menuBgHover,
    menuBgHoverActive,
    menuIcon,
  };
}
