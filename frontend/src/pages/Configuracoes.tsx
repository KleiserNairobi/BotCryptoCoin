import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  SimpleGrid,
  Spacer,
  Stack,
  //Input,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { useTokens } from "../styles/tokens";
import { NButton } from "../components/Form/NButton";

export function Configuracoes() {
  const tokens = useTokens();
  return (
    <Flex direction={"column"} mr={6} mt={6}>
      <SimpleGrid columns={2} spacing={5}>
        <Card
          bg={tokens.bgMain}
          borderColor={tokens.mainBorder}
          borderWidth={1}
          overflow={"hidden"}
          w={"100%"}
        >
          <CardHeader>
            <HStack
              h={"full"}
              w={"full"}
              align={"center"}
              mx={"auto"}
              justifyContent={"space-between"}
            >
              <Heading
                size={"md"}
                fontFamily={"Inter Tight"}
                fontWeight={500}
                letterSpacing={"tight"}
              >
                Usuário
              </Heading>
              <NButton title="Salvar" />
            </HStack>
          </CardHeader>
          <CardBody mb={6}>
            <Stack spacing={4}>
              <Input name="nome" label="Nome" type="text" icon={TbUser} />
              <Input
                name="email"
                label="E-Mail"
                type="email"
                icon={MdMailOutline}
              />
              <Input
                name="password"
                label="Senha"
                type="password"
                icon={MdLockOutline}
              />
            </Stack>
          </CardBody>
        </Card>

        <Card
          bg={tokens.bgMain}
          borderColor={tokens.mainBorder}
          borderWidth={1}
          overflow={"hidden"}
          w={"100%"}
        >
          <CardHeader>
            <HStack
              h={"full"}
              w={"full"}
              align={"center"}
              mx={"auto"}
              justifyContent={"space-between"}
            >
              <Heading
                size={"md"}
                fontFamily={"Inter Tight"}
                fontWeight={500}
                letterSpacing={"tight"}
              >
                Exchange
              </Heading>
              <NButton title="Salvar" />
            </HStack>
          </CardHeader>
          <CardBody mb={6}>
            <Stack spacing={4}>
              <Input name="url" label="URL da API" type="url" />
              <Input name="accessKey" label="Chave de acesso" type="text" />
              <Input name="secretKey" label="Chave secreta" type="text" />
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
