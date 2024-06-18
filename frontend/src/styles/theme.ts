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
    bgDesktop: {
      light: "#C3D6B0",
      dark: "#0C0F16",
    },
    bgMenu: {
      light: "#F9FAF5",
      dark: "#37404E",
    },
    bgMain: {
      light: "#FEFEFE",
      dark: "#37404E",
    },
    bgHeader: {
      light: "#E8EFE2",
      dark: "#37404E",
    },
  },

  // "#537D3D"
  // "#83B868"
  // "#CCD7C5"
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
