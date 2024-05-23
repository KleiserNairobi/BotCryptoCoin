import { extendTheme } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  // colors: {
  //   gray: {
  //     "900": "#181B23",
  //     "800": "#1F2029",
  //     "700": "#353646",
  //     "600": "#4B4D63",
  //     "500": "#616480",
  //     "400": "#797D9A",
  //     "300": "#9699B0",
  //     "200": "#B3B5C6",
  //     "100": "#D1D2DC",
  //     "50": "#EEEEF2",
  //   },
  // },
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
