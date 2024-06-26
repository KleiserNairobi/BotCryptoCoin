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

export function Configuracoes() {
  return (
    <Flex direction={"column"} mr={6} mt={6}>
      <SimpleGrid columns={2} spacing={5}>
        <Card
          bg={"#F9FAF5"}
          borderColor={"#C3D6B0"}
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
              <Heading size={"md"}>Usuário</Heading>
              <Button
                isLoading={false}
                loadingText="Sincronizando"
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
              >
                Salvar
              </Button>
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
          bg={"#F9FAF5"}
          borderColor={"#C3D6B0"}
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
              <Heading size={"md"}>Exchange</Heading>
              <Button
                isLoading={false}
                loadingText="Sincronizando"
                bg={"#bad5a8"}
                _hover={{
                  color: "gray.800",
                  bgColor: "#84b969",
                }}
              >
                Salvar
              </Button>
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
