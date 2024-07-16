import { useEffect, useState } from "react";
import {
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
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useTokens } from "../styles/tokens";
import { MdOutlineSync } from "react-icons/md";
import { NButton } from "../components/Form/NButton";
import { getSymbols } from "../services/SymbolsService";
import { ISymbols } from "../models/SymbolsModel";

export function Simbolos() {
  const tokens = useTokens();
  const [symbols, setSymbols] = useState<ISymbols[]>([]);

  async function fetchSymbols(): Promise<void> {
    try {
      const result = await getSymbols();
      setSymbols(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSymbols();
  }, []);

  return (
    <Flex h={"100%"} w={"100%"} py={6} flexDir={"column"}>
      <Card
        bg={tokens.bgMain}
        borderColor={tokens.mainBorder}
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
            <Heading
              size={"md"}
              fontFamily={"Inter Tight"}
              fontWeight={500}
              letterSpacing={"tight"}
            >
              Listagem de símbolos
            </Heading>
            <NButton
              isLoading={false}
              title="Sincronizar"
              loadingText="Sincronizando"
              leftIcon={<MdOutlineSync />}
            />
          </HStack>
        </CardHeader>
        <CardBody overflowY={"hidden"} flex={1}>
          <TableContainer overflowY="auto" h={"100%"}>
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
                {symbols.map((symbol, index) => (
                  <Tr key={index}>
                    <Td>{symbol.symbol}</Td>
                    <Td isNumeric>{symbol.base_precision}</Td>
                    <Td isNumeric>{symbol.quote_precision}</Td>
                    <Td isNumeric>{symbol.min_notional}</Td>
                    <Td isNumeric>{symbol.min_lot_size}</Td>
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
