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
    gray: {
      "900": "#171923",
      "800": "#1A202C",
      "700": "#2D3748",
      "600": "#4A5568",
      "500": "#718096",
      "400": "#A0AEC0",
      "300": "#CBD5E0",
      "200": "#E2E8F0",
      "100": "#EDF2F7",
      "50": "#F7FAFC",
    },
    yellow: {
      "900": "#5F370E",
      "800": "#744210",
      "700": "#975A16",
      "600": "#B7791F",
      "500": "#D69E2E",
      "400": "#ECC94B",
      "300": "#F6E05E",
      "200": "#FAF089",
      "100": "#FEFCBF",
      "50": "#FFFFF0",
    },
  },
  fundo: {
    light: "gray.50",
    dark: "yellow.900",
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("gray.100", "gray.700")(props),
        color: mode("gray.600", "white")(props),
      },
    }),
  },
});
