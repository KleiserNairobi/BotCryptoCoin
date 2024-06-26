import { useColorModeValue } from "@chakra-ui/react";

export function useTokens() {
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

  return {
    bgDesktop,
    bgMain,
    headerBg,
    headerBtnBg,
    headerBtnBgHover,
    headerBtnIcon,
    headerBtnIconHover,
    headerAvatarBg,
    mainBtnBg,
    mainBtnBgHover,
    mainBtnIcon,
    mainBtnIconHover,
    mainBtnPrimaryBg,
    mainBtnPrimaryBgHover,
  };
}
