import { useState } from "react";
import {
  Flex,
  Button,
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
        bg={tokens.bgHeader}
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
        bg={tokens.bgMenu}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {login ? (
          <Flex w={"80%"} flexDirection={"column"}>
            <Box mb={50} flexDir={"row"}>
              <IconButton
                aria-label="lua"
                icon={
                  colorMode === "light" ? (
                    <MdOutlineWbSunny />
                  ) : (
                    <MdBrightness2 />
                  )
                }
                bgColor={tokens.bgHeader}
                color={"#537D3D"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#D5E3C8",
                }}
                onClick={toggleColorMode}
              />
              <Button
                ml={2}
                onClick={() => setLogin(!login)}
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
              >
                Registrar
              </Button>
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
              <Button
                type="submit"
                mt={16}
                size={"lg"}
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
              >
                Entrar
              </Button>
            </Stack>
          </Flex>
        ) : (
          <Flex w={"80%"} flexDirection={"column"}>
            <Box mb={50} flexDir={"row"}>
              <IconButton
                aria-label="lua"
                icon={
                  colorMode === "light" ? (
                    <MdOutlineWbSunny />
                  ) : (
                    <MdBrightness2 />
                  )
                }
                bgColor={tokens.bgHeader}
                color={"#537D3D"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#D5E3C8",
                }}
                onClick={toggleColorMode}
              />
              <Button
                ml={2}
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
                onClick={() => setLogin(!login)}
              >
                Logar
              </Button>
            </Box>
            <Heading>Registrar-se</Heading>
            <Text>Informe os dados baixo para se registrar!</Text>
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
              <Button
                type="submit"
                mt={16}
                size={"lg"}
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
              >
                Confirmar
              </Button>
            </Stack>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
