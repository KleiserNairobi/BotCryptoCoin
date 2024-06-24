import { useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdBrightness2,
  MdLockOutline,
  MdMailOutline,
  MdOutlineWbSunny,
} from "react-icons/md";
import { Input } from "../components/Form/Input";
import { useTokens } from "../styles/tokens";
import { TbUser } from "react-icons/tb";
import { NButton } from "../components/Form/NButton";
import { NIconButton } from "../components/Form/NIconButton";

export default function Login() {
  const tokens = useTokens();
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const { toggleColorMode, colorMode } = useColorMode();

  // function toggleLogin() {
  //   setLogin(!login);
  // }

  return (
    <Flex
      w={"100%"}
      h={"100%"}
      //maxW={1480}
      mx={"auto"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex
        w={"50%"}
        h={"100vh"}
        bg={tokens.headerBg}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Flex
          w={"100%"}
          h={"80vh"}
          mt={36}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Image
            objectFit={"cover"}
            src="./src/assets/images/ImgCrypto.png"
            alt="imagem crypto moeda"
            w={"80vh"}
            h={"40vw"}
          />
          <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
          >
            <Box>
              <Text
                fontSize={"3xl"}
                fontWeight={"bold"}
                letterSpacing={"tight"}
              >
                Nairobi
                <Text as={"span"} fontSize={"md"} ml={1} color={"orange.400"}>
                  Bot Crypto Coin
                </Text>
              </Text>
            </Box>
            <Text mt={-2} fontSize={13}>
              Copyright by 2024 Nairobi Sistemas
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={"50%"}
        h={"100vh"}
        bg={tokens.bgMain}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {login ? (
          <Flex w={"80%"} flexDirection={"column"}>
            <Box mb={50} flexDir={"row"}>
              <NIconButton
                aria-label="lua"
                icon={
                  colorMode === "light" ? (
                    <MdOutlineWbSunny />
                  ) : (
                    <MdBrightness2 />
                  )
                }
                onClick={toggleColorMode}
              />
              <NButton
                ml={2}
                size={"md"}
                title="Registrar"
                onClick={() => setLogin(!login)}
              />
            </Box>
            <Heading>Login</Heading>
            <Text>Digite seu e-mail e senha para entrar!</Text>
            <Stack mt={10} spacing={4}>
              <Input
                name="loginEmail"
                type="email"
                label="E-Mail *"
                icon={MdMailOutline}
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
              <Input
                name="loginPassword"
                type="password"
                label="Senha *"
                icon={MdLockOutline}
              />
            </Stack>
            <NButton mt={16} size={"lg"} type="submit" title="Entrar" />
          </Flex>
        ) : (
          <Flex w={"80%"} flexDirection={"column"}>
            <Box mb={50} flexDir={"row"}>
              <NIconButton
                aria-label="lua"
                icon={
                  colorMode === "light" ? (
                    <MdOutlineWbSunny />
                  ) : (
                    <MdBrightness2 />
                  )
                }
                onClick={toggleColorMode}
              />
              <NButton ml={2} title="Logar" onClick={() => setLogin(!login)} />
            </Box>
            <Heading>Registrar-se</Heading>
            <Text>Informe os dados abaixo para se registrar!</Text>
            <Stack mt={10} spacing={4}>
              <Input
                name="cadUsername"
                type="text"
                label="Nome *"
                icon={TbUser}
              />
              <Input
                name="cadEmail"
                type="email"
                label="E-Mail *"
                icon={MdMailOutline}
              />
              <Input
                name="cadPassword"
                type="password"
                label="Senha *"
                icon={MdLockOutline}
              />
              <Input
                name="cadConfPassword"
                type="password"
                label="Confirme a senha *"
                icon={MdLockOutline}
              />
            </Stack>
            <NButton mt={16} size={"lg"} type="submit" title="Confirmar" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
