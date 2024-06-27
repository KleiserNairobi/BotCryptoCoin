import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  colors: {
    bgDesktop: { light: "#C3D6B0", dark: "#181818" },
    bgMain: { light: "#F9FAF5", dark: "#252A36" },
    headerBg: { light: "#E8EFE2", dark: "#191E26" },
    headerBtnBg: { light: "#F9FAF3", dark: "#2E323D" },
    headerBtnBgHover: { light: "#D5E3C8", dark: "#424651" },
    headerBtnIcon: { light: "#537D3D", dark: "#9DA0A6" },
    headerBtnIconHover: { light: "gray.800", dark: "gray.100" },
    headerAvatarBg: { light: "#6B9A52", dark: "#424651" },
    mainBtnBg: { light: "#EAEEE4", dark: "#1A2029" },
    mainBtnBgHover: { light: "#D5E3C8", dark: "#181818" },
    mainBtnIcon: { light: "#537D3D", dark: "#B8BBBF" },
    mainBtnIconHover: { light: "gray.800", dark: "gray.100" },
    mainBtnPrimaryBg: { light: "#BAD5A8", dark: "#4C505B" },
    mainBtnPrimaryBgHover: { light: "#84B969", dark: "#565A65" },
    menuBg: { light: "transparent", dark: "transparent" },
    menuBgActive: { light: "#BAD5A8", dark: "#424651" },
    menuBgHover: { light: "#EAEFE8", dark: "#2E323D" },
    menuBgHoverActive: { light: "#BAD5A8", dark: "#424651" },
    menuIcon: { light: "#537D3D", dark: "#BCBFC3" },
    menuTitleActive: { light: "gray.800", dark: "gray.200" },
    menuTitleInactive: { light: "gray.600", dark: "gray.400" },
  },

  // "#537D3D" "#BEC2C6" headerBtnIcon / mainBtnIcon
  // "#6B9A52" "#BCBFC3" headerAvatarBg
  // "#83B868" "#B8BBBF"
  // "#84B969" "#9DA0A6" mainBtnPrimaryBgHover
  // "#9FC789" "#8D9098"
  // "#BAD5A8" "#6A6E7A" mainBtnPrimaryBg
  // "#C3D6B0" "#565A65" desktop
  // "#D5E3C8" "#424651" headerBtnBgHover / mainBtnBgHover
  // "#DBE3D5" "#2E323D"
  // "#CCD7C5" "#252A36"
  // "#E8EFE2" "#191E26" headerBg
  // "#EAEEE4" "#1F2530" mainBtnBg
  // "#F9FAF3" "#1A2029" headerBtnBg
  // "#F9FAF4" "#212121"
  // "#F9FAF5" "#181818" main

  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("bgDesktop.light", "bgDesktop.dark")(props),
        color: mode("gray.900", "white")(props),
      },
    }),
  },
});
