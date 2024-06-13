import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  useDisclosure,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Input } from "../components/form/Input";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdFirstPage, MdLastPage, MdMailOutline } from "react-icons/md";
import { TbUser } from "react-icons/tb";
import { useTokens } from "../styles/tokens";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Dados estáticos para a tabela
const allUsers: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: index % 2 === 0 ? "Admin" : "User",
}));

export default function Symbols() {
  const tokens = useTokens();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalPages = Math.ceil(allUsers.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const currentUsers = allUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Flex w={"full"} h={"full"} flexDir={"column"} p={4} borderRadius={"3xl"}>
        <HStack justify={"space-between"}>
          <Heading mt={6} mb={6} color={tokens.title}>
            Usuários
          </Heading>
          <Button onClick={onOpen} colorScheme="yellow">
            Cadastrar
          </Button>
        </HStack>
        <Box overflowX="auto">
          <Table>
            <Thead bg={"gray.100"}>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Flex mt={6} p={4} justifyContent="space-between" alignItems="center">
          <Select
            width="auto"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
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
              onClick={() => handlePageChange(1)}
              isDisabled={currentPage === 1}
            />
            <IconButton
              mr={1}
              variant={"solid"}
              fontSize={"20px"}
              icon={<GrFormPrevious />}
              aria-label="Anterior"
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
            />
            <IconButton
              mr={1}
              variant={"solid"}
              fontSize={"20px"}
              icon={<GrFormNext />}
              aria-label="Próximo"
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
            />
            <IconButton
              mr={1}
              variant={"solid"}
              fontSize={"20px"}
              icon={<MdLastPage />}
              aria-label="Último"
              onClick={() => handlePageChange(totalPages)}
              isDisabled={currentPage === totalPages}
            />
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edição de usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
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
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3}>
              Confirmar
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
