import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTokens } from "../styles/tokens";
import { MdOutlineSync } from "react-icons/md";

export function Simbolos() {
  const tokens = useTokens();
  return (
    <Flex h={"100%"} w={"100%"} py={6} flexDir={"column"}>
      <Card
        bg={tokens.bgMain}
        borderColor={"#C3D6B0"}
        borderWidth={1}
        mr={6}
        h={"100%"}
      >
        <CardHeader>
          <HStack
            h={"full"}
            w={"full"}
            align={"center"}
            mx={"auto"}
            justifyContent={"space-between"}
          >
            <Heading size={"md"}>Listagem de símbolos</Heading>
            <Button
              isLoading={false}
              loadingText="Sincronizando"
              bg={"#bad5a8"}
              leftIcon={<MdOutlineSync />}
              _hover={{
                color: "gray.800",
                bgColor: "#84b969",
              }}
            >
              Sincronizar
            </Button>
          </HStack>
        </CardHeader>
        <CardBody overflowY={"hidden"} flex={1}>
          <TableContainer
            overflowY="auto"
            //position="relative"
            //w={"100%"}
            h={"100%"}
          >
            <Table size="sm">
              <Thead
                top={0}
                position="sticky"
                zIndex="docked"
                bg={tokens.bgMain}
              >
                <Tr>
                  <Th fontSize={"13px"}>Símbolo</Th>
                  <Th
                    isNumeric
                    fontSize={"13px"}
                    style={{ textAlign: "right" }}
                  >
                    Precisão da <br />
                    Moeda Base
                  </Th>
                  <Th
                    isNumeric
                    fontSize={"13px"}
                    style={{ textAlign: "right" }}
                  >
                    Precisão da <br />
                    Parte Decimal
                  </Th>
                  <Th
                    isNumeric
                    fontSize={"13px"}
                    style={{ textAlign: "right" }}
                  >
                    Valor <br />
                    Nominal Mínimo
                  </Th>
                  <Th
                    isNumeric
                    fontSize={"13px"}
                    style={{ textAlign: "right" }}
                  >
                    Tamanho <br />
                    Mínimo do Lote
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {[...Array(50)].map((_, index) => (
                  <Tr key={index}>
                    <Td>BTC-USDT</Td>
                    <Td isNumeric>8</Td>
                    <Td isNumeric>8</Td>
                    <Td isNumeric>10.00000000</Td>
                    <Td isNumeric>0.00001000</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Flex>
  );
}
