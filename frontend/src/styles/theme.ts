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
  textStyles: {
    menu: {
      fontFamily: "Roboto",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
  colors: {
    bgDesktop: {
      light: "#C3D6B0",
      dark: "#0C0F16",
    },
    bgMain: {
      light: "#F9FAF5",
      dark: "#37404E",
    },

    headerBg: { light: "#E8EFE2", dark: "#37404E" },
    headerBtnBg: { light: "#F9FAF3", dark: "#37404E" },
    headerBtnBgHover: { light: "#D5E3C8", dark: "#37404E" },
    headerBtnIcon: { light: "#537D3D", dark: "#37404E" },
    headerBtnIconHover: { light: "gray.800", dark: "#37404E" },
    headerAvatarBg: { light: "#6B9A52", dark: "#37404E" },

    mainBtnBg: { light: "#EAEEE4", dark: "#37404E" },
    mainBtnBgHover: { light: "#D5E3C8", dark: "#37404E" },
    mainBtnIcon: { light: "#537D3D", dark: "#37404E" },
    mainBtnIconHover: { light: "gray.800", dark: "#37404E" },
  },

  // "#537D3D"
  // "#6B9A52"
  // "#83B868"
  // "#84B969"
  // "#9FC789"
  // "#BAD5A8"
  // "#CCD7C5"
  // "#DBE3D5"
  // "#EAEEE4"
  // "#F9FAF4"

  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("bgDesktop.light", "bgDesktop.dark")(props),
        color: mode("gray.900", "white")(props),
      },
    }),
  },
});
