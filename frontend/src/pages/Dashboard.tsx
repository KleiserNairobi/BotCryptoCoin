import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CandleChart } from "./CandleChart";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useTokens } from "../styles/tokens";

export function Dashboard() {
  const tokens = useTokens();
  return (
    <Flex direction={"column"} mt={5} mr={6}>
      <Flex
        w={"100%"}
        h={"500px"}
        bg={tokens.bgMain}
        borderWidth={1}
        borderRadius={10}
        borderColor={tokens.mainBorder}
      >
        <CandleChart simbolo="BTCUSDT" />
      </Flex>
      <Flex w={"100%"} mt={6} mb={6}>
        <Card overflow={"hidden"} w={"100%"}>
          <CardHeader>
            <Heading size="md">Mercado 24h</Heading>
          </CardHeader>
          <CardBody mt={-8} mb={-6}>
            <TableContainer
              maxH={370}
              overflowY="auto"
              position="relative"
              mt={6}
              mb={6}
              w={"100%"}
            >
              <Table size="sm">
                <Thead
                  position="sticky"
                  top={0}
                  zIndex="docked"
                  bg="white"
                  h={10}
                >
                  <Tr>
                    <Th>Símbolo</Th>
                    <Th isNumeric>Vlr. Abertura</Th>
                    <Th isNumeric>Vlr. Máximo</Th>
                    <Th isNumeric>Vlr. Mínimo</Th>
                    <Th isNumeric>Vlr. Fechamento</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[...Array(20)].map((_, index) => (
                    <Tr key={index}>
                      <Td>BTC-USDT</Td>
                      <Td isNumeric>66.500,00</Td>
                      <Td isNumeric>72.235,00</Td>
                      <Td isNumeric>64.405,00</Td>
                      <Td isNumeric>68.125,00</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
          <Divider />
          <CardFooter h={"70px"}>
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Select
                width="auto"
                //value={itemsPerPage}
                //onChange={handleItemsPerPageChange}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </Select>

              <Flex>
                <IconButton
                  mr={1}
                  variant={"solid"}
                  fontSize={"20px"}
                  icon={<MdFirstPage />}
                  aria-label="Primeiro"
                  //onClick={() => handlePageChange(1)}
                  //isDisabled={currentPage === 1}
                />
                <IconButton
                  mr={1}
                  variant={"solid"}
                  fontSize={"20px"}
                  icon={<GrFormPrevious />}
                  aria-label="Anterior"
                  //onClick={() => handlePageChange(currentPage - 1)}
                  //isDisabled={currentPage === 1}
                />
                <IconButton
                  mr={1}
                  variant={"solid"}
                  fontSize={"20px"}
                  icon={<GrFormNext />}
                  aria-label="Próximo"
                  //onClick={() => handlePageChange(currentPage + 1)}
                  //isDisabled={currentPage === totalPages}
                />
                <IconButton
                  mr={1}
                  variant={"solid"}
                  fontSize={"20px"}
                  icon={<MdLastPage />}
                  aria-label="Último"
                  //onClick={() => handlePageChange(totalPages)}
                  //isDisabled={currentPage === totalPages}
                />
              </Flex>
            </Flex>
          </CardFooter>
        </Card>
      </Flex>
    </Flex>
  );
}
