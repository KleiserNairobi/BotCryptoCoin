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
        <Card bg={"#F9FAF5"} overflow={"hidden"} w={"100%"}>
          <CardHeader>
            <Heading size="md" fontFamily={"Inter Tight"} fontWeight={400}>
              USUÁRIO
            </Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
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
            </FormControl>
          </CardBody>
          <Divider color={"#C3D6B0"} />
          <CardFooter h={"70px"}>
            <Flex w={"100%"} justifyContent={"end"}>
              <Spacer />
              <Button>Salvar</Button>
            </Flex>
          </CardFooter>
        </Card>
        <Card bg={"#F9FAF5"} overflow={"hidden"} w={"100%"}>
          <CardHeader>
            <Heading size="md" fontFamily={"Inter Tight"} fontWeight={400}>
              Exchange
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Input name="url" label="URL da API" type="url" />
              <Input name="accessKey" label="Chave de acesso" type="text" />
              <Input name="secretKey" label="Chave secreta" type="text" />
            </Stack>
          </CardBody>
          <Divider color={"#C3D6B0"} />
          <CardFooter h={"70px"}>
            <Flex w={"100%"} justifyContent={"end"}>
              <Button>Salvar</Button>
            </Flex>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
