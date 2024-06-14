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
      "50": "#D7D8DC",
      "100": "#AEB1B8",
      "200": "#838A93",
      "300": "#5B6370",
      "400": "#49515F",
      "500": "#37404E",
      "600": "#313C4B",
      "700": "#2B3643",
      "800": "#25303C",
      "900": "#1F2A35",
    },
    yellow: {
      "50": "#FFF7E4",
      "100": "#FFEEC8",
      "200": "#FFE5AA",
      "300": "#FEDD8E",
      "400": "#FFD472",
      "500": "#FFC856",
      "600": "#FFBD3A",
      "700": "#FFB11E",
      "800": "#FFA502",
      "900": "#FF9900",
    },
    fundo: {
      light: "#F3F0E9",
      dark: "#0C0F16",
    },
    menu: {
      light: "#FFFFFF",
      dark: "#37404E",
    },
    bgMenu: {
      light: "#FEF6DF",
      dark: "#37404E",
    },
    menuTitle: {
      light: "#A1B3CB",
      dark: "#37404E",
    },
    menuTitleBold: {
      light: "#323D48",
      dark: "#37404E",
    },
    menuLabel: {
      light: "#9C9C9C",
      dark: "#37404E",
    },
    main: {
      light: "#F8F8F6",
      dark: "#2B3643",
    },
    title: {
      light: "#323B4A",
      dark: "#F7FAFC",
    },
    subtitle: {
      light: "#2F3B49",
      dark: "#EDF2F7",
    },
    titleYellow: {
      light: "#FDCE3B",
      dark: "#F7FAFC",
    },
    icon: {
      light: "#2F3B49",
      dark: "#EDF2F7",
    },
    bgIcon: {
      light: "#FFF3D9",
      dark: "#EDF2F7",
    },
    line: {
      light: "#8A9EB7",
      dark: "#EDF2F7",
    },
    bgHeaderCard: {
      light: "#F2EFE8",
      dark: "#EDF2F7",
    },

    // #F2EFE8

    // #F7F7F7 // fundo 2

    // #A1B3CB // cor menu normal

    // #323D48 // cor menu hover

    // #FEF6DF // cor fundo menu hover

    // #9C9C9C // cor subtítulo disable

    // #FFD166 // cor button primario

    // #FAD680 // cor button secundário
  },

  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg: mode("fundo.light", "fundo.dark")(props),
        color: mode("gray.600", "white")(props),
      },
    }),
  },
});
