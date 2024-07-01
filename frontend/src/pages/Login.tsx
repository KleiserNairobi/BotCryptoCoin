import { useState } from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdBrightness2,
  MdLockOutline,
  MdMailOutline,
  MdOutlineWbSunny,
} from "react-icons/md";
import { useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { useTokens } from "../styles/tokens";
import { TbUser } from "react-icons/tb";
import { NButton } from "../components/Form/NButton";
import { NIconButton } from "../components/Form/NIconButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../utils/Validations";
import { logar } from "../services/LoginService";

type DadosLogin = {
  email: string;
  password: string;
};

type DadosRegistro = {
  cadUsername: string;
  cadEmail: string;
  cadPassword: string;
  cadConfPassword: string;
};

export function Login() {
  const tokens = useTokens();
  const [login, setLogin] = useState(true);
  const { toggleColorMode, colorMode } = useColorMode();

  const loginForm = useForm<DadosLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const registerForm = useForm<DadosRegistro>({
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });

  function toggleLoginRegister() {
    setLogin((prevLogin) => {
      if (prevLogin) {
        registerForm.reset();
      } else {
        loginForm.reset();
      }
      return !prevLogin;
    });
  }

  async function onSubmitLogin(data: DadosLogin) {
    console.log("dados: ", data);
    try {
      const resposta = await logar(data);
      if (resposta) {
        console.log("login realizado");
      }
    } catch (erro) {
      console.error(erro);
    }
  }

  function onSubmitRegister(data: DadosRegistro) {
    console.log("dados: ", data);
  }

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
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Image
            objectFit={"cover"}
            src="./src/assets/images/ImgCrypto.png"
            alt="imagem crypto moeda"
            w={"40vw"}
            h={"auto"}
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
                onClick={toggleLoginRegister}
              />
            </Box>
            <Heading>Login</Heading>
            <Text>Digite seu e-mail e senha para entrar!</Text>
            <form onSubmit={loginForm.handleSubmit(onSubmitLogin)}>
              <Stack mt={10} spacing={4}>
                <Input
                  type="email"
                  label="E-Mail *"
                  icon={MdMailOutline}
                  {...loginForm.register("email")}
                  error={loginForm.formState.errors.email?.message}
                />

                <Input
                  type="password"
                  label="Senha *"
                  icon={MdLockOutline}
                  {...loginForm.register("password")}
                  error={loginForm.formState.errors.password?.message}
                />
              </Stack>
              <NButton mt={16} size={"lg"} type="submit" title="Entrar" />
            </form>
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
              <NButton ml={2} title="Logar" onClick={toggleLoginRegister} />
            </Box>
            <Heading>Registrar-se</Heading>
            <Text>Informe os dados abaixo para se registrar!</Text>
            <form onSubmit={registerForm.handleSubmit(onSubmitRegister)}>
              <Stack mt={10} spacing={4}>
                <Input
                  type="text"
                  label="Nome *"
                  icon={TbUser}
                  {...registerForm.register("cadUsername")}
                  error={registerForm.formState.errors.cadUsername?.message}
                />
                <Input
                  type="email"
                  label="E-Mail *"
                  icon={MdMailOutline}
                  {...registerForm.register("cadEmail")}
                  error={registerForm.formState.errors.cadEmail?.message}
                />
                <Input
                  type="password"
                  label="Senha *"
                  icon={MdLockOutline}
                  {...registerForm.register("cadPassword")}
                  error={registerForm.formState.errors.cadPassword?.message}
                />
                <Input
                  type="password"
                  label="Confirme a senha *"
                  icon={MdLockOutline}
                  {...registerForm.register("cadConfPassword")}
                  error={registerForm.formState.errors.cadConfPassword?.message}
                />
              </Stack>
              <NButton mt={16} size={"lg"} type="submit" title="Confirmar" />
            </form>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
